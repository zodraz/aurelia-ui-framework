/**
 *    UI Input      ComboBox
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {customElement, bindable, bindingMode, autoinject} from "aurelia-framework";
import {UIInputGroup} from "./ui-input-group";
import {_, UIUtils} from "../utils/ui-utils";
import {UIEvent} from "../utils/ui-event";

@autoinject
@customElement('ui-combo')
export class UIComboBox extends UIInputGroup {
	__list;
	__focus;
	__options;
	__searchText;
	__subscribeSearch;
	__noResult = false;

	__hilight:HTMLElement = null;

	constructor(element:Element) {
		super(element);
	}

	/**
	 * @property    value
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	value:string     = '';
	/**
	 * @property    checked
	 * @type        boolean
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	checked:boolean  = false;
	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable()
	disabled:boolean = false;
	/**
	 * @property    readonly
	 * @type        boolean
	 */
	@bindable()
	readonly:boolean = false;

	/**
	 * @property    prefix-icon
	 * @type        string
	 */
	@bindable()
	prefixIcon:string;
	/**
	 * @property    prefix-text
	 * @type        string
	 */
	@bindable()
	prefixText:string;

	/**
	 * @property    suffix-icon
	 * @type        string
	 */
	@bindable()
	suffixIcon:string;
	/**
	 * @property    suffix-text
	 * @type        string
	 */
	@bindable()
	suffixText:string;

	/**
	 * @property    button-icon
	 * @type        string
	 */
	@bindable()
	buttonIcon:string;
	/**
	 * @property    button-text
	 * @type        string
	 */
	@bindable()
	buttonText:string;

	/**
	 * @property    help-text
	 * @type        string
	 */
	@bindable()
	helpText:string;

	/**
	 * @property    placeholder
	 * @type        string
	 */
	@bindable()
	placeholder:string = '';

	/**
	 * @property    dir
	 * @type        string
	 */
	@bindable()
	dir:string = '';

	/**
	 * @property    option
	 * @type        string
	 */
	@bindable()
	options:any          = [];
	/**
	 * @property    value-property
	 * @type        string
	 */
	@bindable()
	valueProperty:string = 'id';
	/**
	 * @property    display-property
	 * @type        string
	 */
	@bindable()
	displayProperty:any  = 'text';
	/**
	 * @property    icon-property
	 * @type        string
	 */
	@bindable()
	iconProperty:any     = '';
	/**
	 * @property    icon-class
	 * @type        string
	 */
	@bindable()
	iconClass:any        = '';

	/**
	 * @property    empty-text
	 * @type        string
	 */
	@bindable()
	emptyText = 'No Results Found...';

	bind() {
		super.bind();
		this.optionsChanged(this.options);
	}

	attached() {
		super.attached();
		setTimeout(()=>this.valueChanged(this.value), 500);
	}

	detached() {
	}

	valueChanged(newValue) {
		this.__hilight = this.__list.querySelector(`[data-value="${newValue}"]`);
		this.__select(this.__hilight);
	}

	optionsChanged(newValue) {
		this.__noResult = isEmpty(newValue);
		this.options    = newValue;
		if (_.isArray(newValue) && !isEmpty(newValue)) this.options = {'§': newValue};
		this.__options = _.cloneDeep(this.options);
	}

	__select(item) {
		if (item !== null) {
			this.value        = item.dataset['value'];
			this.__searchText = item['model'][this.displayProperty];
			UIEvent.fireEvent('select', this.element, item['model']);
		}
		else {
			this.value = this.__searchText = '';
		}
		this.__options = _.cloneDeep(this.options);
		this.__focus   = false;
		this.__noResult = isEmpty(this.__options);
	}

	__clicked($event) {
		let o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
		if (o !== null) {
			this.__select(this.__hilight = o);
		}
	}

	__gotFocus() {
		this.__hilight = this.__list.querySelector(`[data-value="${this.value}"]`);
		this.__focus   = true;
		setTimeout(()=> {
			this.__input.select();
			this.__scrollIntoView();
		}, 20);
	}

	__lostFocus() {
		this.__select(this.__hilight);
		this.__focus = false;
	}

	keyDown(evt) {
		if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0) return true;
		let code = (evt.keyCode || evt.which);

		if (code == 13 && this.__focus) {
			this.__select(this.__hilight);
			this.__focus = false;
			return false;
		}
		else if (code == 13 && !this.__focus) {
			return UIEvent.fireEvent('enterpressed', this.element, this);
		}

		if (this.__noResult) return true;

		this.__focus = true;
		if (code === 38) {
			let h = this.__list.querySelector('.ui-list-item.hilight');
			// if no hilight get selected
			if (h === null) h = this.__list.querySelector('.ui-list-item.selected');
			if (h != null) {
				h = <HTMLElement>h.previousElementSibling;
				if (h.tagName === 'P')h = <HTMLElement>h.previousElementSibling;
				if (h !== null) {
					if (this.__hilight != null) this.__hilight.classList.remove('hilight');
					(this.__hilight = h).classList.add('hilight');
					this.__scrollIntoView();
				}
			}
			return false;
		}
		else if (code === 40) {
			let h = this.__list.querySelector('.ui-list-item.hilight');
			// if no hilight get selected
			if (h === null) h = this.__list.querySelector('.ui-list-item.selected');
			// if found hilight or selected get next
			if (h !== null) h = <HTMLElement>h.nextElementSibling;
			// if no selected get first
			if (h === null) h = this.__list.querySelector('.ui-list-item');
			// if group label get next
			if (h.tagName === 'P')h = <HTMLElement>h.nextElementSibling;
			if (h !== null) {
				if (this.__hilight != null) this.__hilight.classList.remove('hilight');
				(this.__hilight = h).classList.add('hilight');
				this.__scrollIntoView();
			}
			return false;
		}
		return true;
	}

	keyPress(evt) {
		if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0) return true;
		let code = (evt.keyCode || evt.which);
	}

	formatter() {
		return this.value;
	}

	__scrollIntoView() {
		this.__list.scrollTop = (this.__hilight !== null ? this.__hilight.offsetTop - (this.__list.offsetHeight / 2) : 0);
	}

	__searchTextChanged() {
		if (_.isEmpty(this.__searchText)) {
			this.__options  = _.cloneDeep(this.options);
			this.__noResult = isEmpty(this.__options);
			return;
		}
		var opts        = _.cloneDeep(this.options);
		var rx          = new RegExp(UIUtils.getAscii(this.__searchText), 'i');
		this.__options  = _.forEach(opts, (v, k)=> {
			opts[k] = _.filter(v, (n:any)=> {
				var lbl = n;
				if (!isEmpty(n[this.displayProperty])) {
					lbl = n[this.displayProperty];
				}

				let asc = UIUtils.getAscii(lbl);
				if (rx.test(asc)) {
					if (n.hasOwnProperty(this.displayProperty)) {
						let start      = asc.search(rx);
						lbl            = lbl.substr(0, start + this.__searchText.length) + '</u>' +
							lbl.substr(start + this.__searchText.length);
						lbl            = lbl.substr(0, start) + '<u>' + lbl.substr(start);
						n['__display'] = lbl;
					}
					return true;
				}
				return false;
			});
			if (opts[k].length === 0)delete opts[k];
		});
		this.__noResult = isEmpty(this.__options);
		setTimeout(()=>this.__hilight = this.__list.querySelector(`.ui-list-item`) || this.__hilight, 100);
	}
}
