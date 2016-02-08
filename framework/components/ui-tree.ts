/**
 *    UI Component: Tree
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, bindable, computedFrom, customElement, bindingMode, BindingEngine} from "aurelia-framework";
import {UITreeModel, UITreeOptionsModel} from "../utils/ui-tree-models";
import {_, Utils} from "../utils/ui-utils";
import {UIEvent} from "../utils/ui-event";

/**
 * @bindable selected node value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: '_valueChanged',
	defaultValue: null,
	defaultBindingMode: bindingMode.twoWay
})
@bindable({
	name: 'model',
	attribute: 'data-model',
	changeHandler: '_modelChanged',
	defaultValue: [],
	defaultBindingMode: bindingMode.oneWay
})
@bindable({
	name: 'options',
	attribute: 'data-options',
	defaultValue: {},
	defaultBindingMode: bindingMode.oneWay
})

@autoinject()
@customElement('ui-tree')
export class UITree {
	private model:Array<any>;
	private options:UITreeOptionsModel;
	private searchText:string = '';

	private value:any;

	private root:UITreeModel;

	private selectedNode:any = {};

	_subscribeSelect;
	_subscribeChecked;
	_subscribeSearch;

	constructor(public element:Element, observer:BindingEngine) {
		var self               = this;
		this._subscribeSelect  = UIEvent.subscribe('tree-select', v=>self._itemSelect(v));
		this._subscribeChecked = UIEvent.subscribe('tree-checked', v=>self._itemChecked(v));
		this._subscribeSearch  = observer.propertyObserver(this, 'searchText')
			.subscribe(v=>self._searchTextChanged(v));

	}

	private bind() {
		this.options = _.merge({
			showRoot: false,
			rootLabel: 'Root',
			maxLevels: 99,
			selectionLevel: -1,
			showCheckbox: false,
			checkboxLevel: -1
		}, this.options) as UITreeOptionsModel;

		this.root = new UITreeModel(-1, this.options.maxLevels, this.options.checkboxLevel, {
			id: '',
			name: this.options.rootLabel,
			children: this.model
		}, null);
	}

	private detached() {
		this._subscribeSelect.dispose();
		this._subscribeChecked.dispose();
		this._subscribeSearch.dispose();
	}

	@computedFrom('root')
	private get rootNodes() {
		return this.options.showRoot ? [this.root] : this.root.children;
	}

	private _itemSelect(node) {
		if (this.selectedNode)
			this.selectedNode.active = false;
		(this.selectedNode = node).active = true;
		this.value = this.selectedNode.id;
		UIEvent.fireEvent('change', this.element, this.selectedNode);
	}

	private _itemChecked(node) {
		UIEvent.fireEvent('checked', this.element, this.getChecked());
	}

	private _modelChanged(newValue) {
		this.root = new UITreeModel(-1, this.options.maxLevels, this.options.checkboxLevel, {
			id: '',
			name: this.options.rootLabel,
			children: newValue
		}, null);
	}

	private _valueChanged(newValue) {
	}

	private _searchTextChanged(newValue) {
		this._filter(this.root.children, newValue);
	}

	private _filter(obj, value, parentVisible:boolean = false):boolean {
		var self = this, ret = false, rx = new RegExp(Utils.getAscii(value), 'gi');

		_.forEach(obj, (n:UITreeModel)=> {
			n.name     = n.name.replace(/<b>/gi, '').replace(/<\/b>/gi, '');
			n.expanded = !_.isEmpty(value) && n.level <= 2 && parentVisible === false;

			if (_.isEmpty(value) && self.selectedNode.id == n.id && self.selectedNode.level == n.level) {
				var p = n.parent;
				while (p) {
					p.expanded = true;
					p          = p.parent;
				}
			}
			var match = rx.test(Utils.getAscii(n.name));
			if (!_.isEmpty(value) && match) {
				n.parent.expanded = true;
				/*n.name            = n.name.replace(rx, b=> {
				 return `<b>${b}</b>`
				 });*/
				let start = Utils.getAscii(n.name).search(rx);
				let name  = n.name.substr(0, start + value.length) + '</b>' + n.name.substr(start + value.length);
				n.name    = name.substr(0, start) + '<b>' + name.substr(start);
			}

			n.isvisible = n.children.length > 0 ? self._filter(n.children, value, match || parentVisible) : (match || parentVisible);

			ret = ret || n.isvisible;
		});

		return ret;
	}

	private _find(obj, id, level, field, value = true) {
		var self = this;
		return _.find(obj, (n:UITreeModel)=> {
			var found = n.id == id && n.level == level;
			if (!found && _.isArray(n.children)) {
				found      = !_.isEmpty(self._find(n.children, id, level, field, value));
				n.expanded = found;
			}
			else if (found) {
				if (field == 'active') self._itemSelect(n);
				if (field == 'expanded') n.expanded = value;
				if (field == 'checked') n.ischecked = value ? 1 : 0;

				setTimeout(()=> {
					var x = $(this.element).find('.ui-active');
					if (x.length > 0)x.get(0).scrollIntoView();
				}, 200);
			}

			return found;
		});
	}

	private _getChecked(nodes, retVal) {
		var self = this;
		return _.forEach(nodes, (n:UITreeModel)=> {
			if (n.checked == 2) retVal.partial.push(n.id);
			if (n.checked == 1) retVal.checked.push(n.id);
			if (n.checked == 0) retVal.unchecked.push(n.id);
			if (_.isArray(n.children)) self._getChecked(n.children, retVal);
		});
	}

	getChecked() {
		let nodes = {checked: [], partial: [], unchecked: []}
		this._getChecked(this.root.children, nodes);
		return nodes;
	}

	select(id:any, level:number) {
		this._find(this.root.children, id, level, 'active');
	}

	expand(id:any, level:number, expand:boolean) {
		this._find(this.root.children, id, level, 'expanded', expand);
	}

	check(id:any, level:number, check:boolean) {
		this._find(this.root.children, id, level, 'checked', check);
	}
}

