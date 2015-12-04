/**
 *    UI Component: Chosen
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {UIInput} from "./ui-input";

/**
 * @bindable value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: '_valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})
/**
 * @bindable checked
 */
@bindable({
	name: 'checked',
	attribute: 'checked',
	changeHandler: '_checkedChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: false
})

@autoinject()
@customElement('ui-chosen')
export class UIChosen {
	private _id;
	private _value;
	private _chosen;
	private _select;
	private _options;
	private _clear:boolean       = false;
	private _noLabel:boolean     = false;
	private _checkbox:boolean    = false;
	private _multiple:boolean    = false;
	private _classes:string      = '';
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	// binding privates
	private value:string    = '';
	private checked:boolean = false;

	@bindable id:string          = '';
	@bindable label:string       = '';
	@bindable addonIcon:string   = '';
	@bindable addonText:string   = '';
	@bindable addonClass:string  = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable readonly:boolean   = false;
	@bindable disabled:boolean   = false;

	constructor(public element:Element) {
		this._id = `chosen-${UIInput._id++}`;
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('clear')) this._clear = true;
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('readonly')) this.readonly = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('multiple')) this._multiple = true;
		if (element.hasAttribute('label-top')) this._classes = 'ui-label-top';
		$(this.element).data('UIChosen', this)
	}

	bind() {
		if (this.value) {
			this._valueChanged(this.value);
		}
		if (this._checkbox) {
			this.disabled = this.checked !== true;
		}
	}

	attached() {
		$(this._select)
			.append($(this._options).children())
			.val(this.value)
			.attr(this._multiple ? 'multiple' : 'single', '')
			.chosen({
				width: '100%',
				search_contains: true,
				disable_search_threshold: 10,
				allow_single_deselect: this._clear,
				placeholder_text_single: this.placeholder,
				placeholder_text_multiple: this.placeholder
			})
			.change(()=> {
				/**
				 * convert value to string is multiple is true
				 */
				let v = $(this._select).val();
				this.value = (this._multiple ? (v || ['']).join(',') : v);
			});
		$(this._options).remove();
	}

	disabledChanged(newValue) {
		$(this._select)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '')
			.trigger('chosen:updated');
	}

	readonlyChanged(newValue) {
		$(this._select)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue !== false ? 'readonly' : 'R', '')
			.trigger('chosen:updated');
	}

	private _checkedChanged(newValue) {
		if (this._checkbox) {
			this.disabled = newValue !== true;
		}
	}

	private _valueChanged(newValue) {
		if (this._multiple) newValue = (newValue || '').split(',');
		setTimeout(() => {
			$(this._select)
				.val(newValue)
				.trigger('chosen:updated');
		}, 200);
	}

	private _buttonClick($event) {
		UIEvent.fireEvent('click', this.element, this, this._select);
		return false;
	}
}
