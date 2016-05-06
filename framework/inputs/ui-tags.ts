/**
 *    UI Input      Tag Editor
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {customElement, bindable, bindingMode, autoinject} from "aurelia-framework";
import {UIInputGroup} from "./ui-input-group";
import {_, UIUtils} from "../utils/ui-utils";
import {UIEvent} from "../utils/ui-event";

@autoinject
@customElement('ui-tags')
export class UITags extends UIInputGroup {
    __list;
    __focus;
    __noList;
    __options;
    __tagInput;
    __isGrouped;
    __isFiltered;
    __searchText;
    __ignoreChange;
    __subscribeSearch;
    __noResult = false;
    __reverse = false;

    __tags = [];
    __available;
    __hilight;

    constructor(element: Element) {
        super(element);
    }

	/**
	 * @property    value
	 * @type        string
	 */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value: string = '';
	/**
	 * @property    checked
	 * @type        boolean
	 */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    checked: boolean = false;
	/**
	 * @property    disabled
	 * @type        boolean
	 */
    @bindable()
    disabled: boolean = false;
	/**
	 * @property    readonly
	 * @type        boolean
	 */
    @bindable()
    readonly: boolean = false;

	/**
	 * @property    prefix-icon
	 * @type        string
	 */
    @bindable()
    prefixIcon: string;
	/**
	 * @property    prefix-text
	 * @type        string
	 */
    @bindable()
    prefixText: string;

	/**
	 * @property    suffix-icon
	 * @type        string
	 */
    @bindable()
    suffixIcon: string;
	/**
	 * @property    suffix-text
	 * @type        string
	 */
    @bindable()
    suffixText: string;

	/**
	 * @property    button-icon
	 * @type        string
	 */
    @bindable()
    buttonIcon: string;
	/**
	 * @property    button-text
	 * @type        string
	 */
    @bindable()
    buttonText: string;

	/**
	 * @property    help-text
	 * @type        string
	 */
    @bindable()
    helpText: string;

	/**
	 * @property    placeholder
	 * @type        string
	 */
    @bindable()
    placeholder: string = '';

	/**
	 * @property    dir
	 * @type        string
	 */
    @bindable()
    dir: string = '';

	/**
	 * @property    option
	 * @type        string
	 */
    @bindable()
    options: any = [];
	/**
	 * @property    value-property
	 * @type        string
	 */
    @bindable()
    valueProperty: string = 'id';
	/**
	 * @property    display-property
	 * @type        string
	 */
    @bindable()
    displayProperty: any = 'name';
	/**
	 * @property    icon-property
	 * @type        string
	 */
    @bindable()
    iconProperty: any = '';
	/**
	 * @property    icon-class
	 * @type        string
	 */
    @bindable()
    iconClass: any = '';

	/**
	 * @property    empty-text
	 * @type        string
	 */
    @bindable()
    emptyText = 'No Results Found...';

    bind() {
        super.bind();
        this.optionsChanged(this.options);
        this.__noList = this.element.hasAttribute('no-list');
    }

    attached() {
        super.attached();
        setTimeout(() => this.valueChanged(this.value), 500);
    }

    detached() {
    }

    valueChanged(newValue) {
        let v: any = newValue || [];
        if (!_.isArray(v)) v = v.split(',');
        if (this.__noList) {
            this.__tags = v;
        }
        else {
            this.__options = this.__available = _.cloneDeep(this.options);
            this.__tags = _['removeByValues'](this.__available, this.valueProperty, v);
        }
    }

    optionsChanged(newValue) {
        this.__noResult = isEmpty(newValue);
        this.options = newValue;
        this.__isFiltered = false;
        this.__isGrouped = !_.isArray(newValue);
        this.__options = this.__available = _.cloneDeep(this.options);
    }

    readonlyChanged() {
        super.readonlyChanged();
        if (isTrue(this.readonly))
            this.__tagInput.classList.add('ui-readonly');
        else
            this.__tagInput.classList.remove('ui-readonly');
    }

    disable(disabled?) {
        super.disable(disabled);
        if (disabled === true || this.disabled === true || this.checked === false)
            this.__tagInput.classList.add('ui-disabled');
        else
            this.__tagInput.classList.remove('ui-disabled');
    }

    __select(item) {
        if (this.__noList) {
            let v = _.trim(this.__searchText);
            if (!isEmpty(v) && this.__tags.indexOf(v) == -1) this.__tags.push(v);
            this.value = this.__tags.join(',');
            this.__searchText = '';
            this.__focus = true;
        }
        else if (item) {
            this.__searchText = '';
            this.__tags.push(item['model']);
            this.value = _.map(this.__tags, this.valueProperty).join(',');
        }
    }

    __deselect(item) {
        this.__tags.splice(this.__tags.indexOf(item), 1);
        if (this.__noList) {
            this.value = this.__tags.join(',');
        }
        else {
            // _.remove(this.__tags, [this.valueProperty, item[this.valueProperty]]);
            this.value = _.map(this.__tags, this.valueProperty).join(',');
        }
    }

    __clicked($event) {
        let o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
        if (o !== null) {
            this.__select(o);
        }
    }

    __gotFocus() {
        this.__focus = true;
        let el = <HTMLElement>this.element;
        if (el.offsetParent.scrollTop + el.offsetParent['offsetHeight'] < el.offsetHeight + el.offsetTop + 30) {
            this.__reverse = true;
            this.__list.style.bottom = el.offsetHeight + 'px';
        }
        else {
            this.__reverse = false;
            this.__list.style.bottom = "auto";
        }
        setTimeout(() => {
            this.__input.select();
            this.__scrollIntoView();
        }, 20);
        this.__tagInput.classList.add('ui-focus');
    }

    __lostFocus() {
        this.__focus = false;
        this.__tagInput.classList.remove('ui-focus');
    }

    inputClicked(evt) {
        let b = getParentByClass(evt.target, 'ui-tag', 'ui-input');
        if (b !== null) this.__deselect(b['model']);
    }

    keyDown(evt) {
        if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0) return true;
        let code = (evt.keyCode || evt.which);

        if (code == 13 && this.__focus) {
            this.__focus = false;
            this.__select(this.__hilight);
            return false;
        }
        else if (code == 13 && !this.__focus) {
            return UIEvent.fireEvent('enterpressed', this.element, this);
        }

        this.__focus = true;
        if (code === 8 && isEmpty(this.__searchText)) {
            this.__deselect(null);
        }
        if (this.__noResult) return true;
        if (code === 38) {
            let h = this.__list.querySelector('.ui-list-item.hilight');
            // if no hilight get selected
            if (h === null) h = this.__list.querySelector('.ui-list-item.selected');
            if (h != null) {
                h = <HTMLElement>h.previousElementSibling;
                if (h.tagName === 'P') h = <HTMLElement>h.previousElementSibling;
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
            if (h.tagName === 'P') h = <HTMLElement>h.nextElementSibling;
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
    }

    __searchTextChanged() {
        if (this.__noList) return;
        if (_.isEmpty(this.__searchText)) {
            this.__options = _.cloneDeep(this.options);
            this.__noResult = isEmpty(this.__options);
            this.__isFiltered = false;
            return;
        }
        var opts = _.cloneDeep(this.__available);
        var rx = new RegExp(UIUtils.getAscii(this.__searchText), 'i');
        if (this.__isGrouped) {
            this.__options = _.forEach(opts, (v, k) => {
                opts[k] = _.filter(v, (n: any) => {
                    var lbl = n;
                    if (!isEmpty(n[this.displayProperty])) {
                        lbl = n[this.displayProperty];
                    }
                    lbl = lbl + '';
                    let asc = UIUtils.getAscii(lbl);
                    if (rx.test(asc)) {
                        if (n.hasOwnProperty(this.displayProperty)) {
                            let start = asc.search(rx);
                            lbl = lbl.substr(0, start + this.__searchText.length) + '</u>' +
                                lbl.substr(start + this.__searchText.length);
                            lbl = lbl.substr(0, start) + '<u>' + lbl.substr(start);
                            n['__display'] = lbl;
                        }
                        return true;
                    }
                    return false;
                });
                if (opts[k].length === 0) delete opts[k];
            });
        }
        if (!this.__isGrouped) {
            this.__options = _.filter(opts, (n: any) => {
                var lbl = n;
                if (!isEmpty(n[this.displayProperty])) {
                    lbl = n[this.displayProperty];
                }
                lbl = lbl + '';
                let asc = UIUtils.getAscii(lbl);
                if (rx.test(asc)) {
                    if (n.hasOwnProperty(this.displayProperty)) {
                        let start = asc.search(rx);
                        lbl = lbl.substr(0, start + this.__searchText.length) + '</u>' +
                            lbl.substr(start + this.__searchText.length);
                        lbl = lbl.substr(0, start) + '<u>' + lbl.substr(start);
                        n['__display'] = lbl;
                    }
                    return true;
                }
                return false;
            });
        }
        this.__isFiltered = true;
        this.__noResult = isEmpty(this.__options);
        setTimeout(() => this.__hilight = this.__list.querySelector(`.ui-list-item`) || null, 100);
    }
}
