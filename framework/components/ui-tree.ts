/**
 *    UI Component: Tree
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, bindable, computedFrom, customElement, bindingMode, ObserverLocator} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";
import {UITreeModel, UITreeOptionsModel} from "../utils/ui-tree-models";
import {_} from "../utils/ui-utils";

/**
 * @bindable selected node value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: '_valueChanged',
	defaultValue: null,
	defaultBindingMode: bindingMode.oneWay
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

/**
 * TODO: value change functionality missing
 *
 * 	1. update value with node on single select mode
 * 	2. update value with grouped node ids for checked, partial and unchecked
 * 	3. update selection when the value changes from incoming binding
 */

@autoinject()
@customElement('ui-tree')
export class UITree {
	private model:Array<any>;
	private options:UITreeOptionsModel;
	private searchText:string = '';

	private value:any;

	private root:UITreeModel;

	private selectedNode:any = {};

	constructor(public element:Element, eventAggregator:EventAggregator, observer:ObserverLocator) {
		var self = this;
		eventAggregator.subscribe('tree-select', v=>self._itemSelect(v));
		observer.getObserver(this, 'searchText')
			.subscribe(v=>self._searchTextChanged(v));

		$(this.element).data('UITree', this);
	}

	private attached() {
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

	@computedFrom('root')
	private get rootNodes() {
		return this.options.showRoot ? [this.root] : this.root.children;
	}

	private _itemSelect(node) {
		if (this.selectedNode)
			this.selectedNode.active = false;
		(this.selectedNode = node).active = true;
		this.value = this.selectedNode.id;
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
		var self = this, ret = false, rx = new RegExp(value, 'gi');

		_.forEach(obj, (n:UITreeModel)=> {
			n.name = n.name.replace(/<b>/gi, '').replace(/<\/b>/gi, '');
			n.expanded = !_.isEmpty(value) && n.level <= 2 && parentVisible === false;

			if (_.isEmpty(value) && self.selectedNode.id == n.id && self.selectedNode.level == n.level) {
				var p = n.parent;
				while (p) {
					p.expanded = true;
					p = p.parent;
				}
			}
			var match = rx.test(n.name);
			if (!_.isEmpty(value) && match) {
				n.parent.expanded = true;
				n.name = n.name.replace(rx, b=> {
					return `<b>${b}</b>`
				});
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
				found = !_.isEmpty(self._find(n.children, id, level, field, value));
				n.expanded = found;
			}
			else if (found) {
				if (field == 'active') (self.selectedNode = n).active = !self.options.showCheckbox;
				if (field == 'expanded') n.expanded = value;
				if (field == 'checked') n.ischecked = value ? 1 : 0;

				setTimeout(()=> {
					var x = $(this.element).find('.active');
					if (x.length > 0)x.get(0).scrollIntoView();
				}, 200);
			}

			return found;
		});
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

