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
	private _optionInput;
	private _select;
	private _options;
	private _clear:boolean       = false;
	private _focus:boolean       = false;
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
	@bindable helpText:string    = '';
	@bindable prefixIcon:string  = '';
	@bindable prefixText:string  = '';
	@bindable prefixClass:string = '';
	@bindable suffixIcon:string  = '';
	@bindable suffixText:string  = '';
	@bindable suffixClass:string = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable readonly:boolean   = false;
	@bindable disabled:boolean   = false;
	@bindable options            = [];
	@bindable valueProperty      = 'id';
	@bindable displayProperty    = 'name';

	private _allowAdd = false;

	constructor(public element:Element) {
		this._id = `chosen-${UIInput._id++}`;
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('clear')) this._clear = true;
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('multiple')) this._multiple = true;
		if (element.hasAttribute('allow-new')) this._allowAdd = true;
		if (element.hasAttribute('label-top')) this._classes = 'ui-label-top';
	}

	bind() {
		if (this.element.hasAttribute('readonly')) this.readonly = true;
		if (this.element.hasAttribute('disabled')) this.disabled = true;

		if (this.value) {
		}
	}

	attached() {
		$(this._select)
			.append($(this._options).children())
			.attr(this.readonly === true ? 'readonly' : 'R', '')
			.attr(this.disabled === true ? 'disabled' : 'D', '')
			.attr(this._multiple ? 'multiple' : 'single', '')
			.val((this._multiple) ? (this.value || '').split(',') : this.value)
			.chosen({
				width: '100%',
				search_contains: true,
				disable_search_threshold: 10,
				allow_single_deselect: this._clear,
				placeholder_text_single: this.placeholder,
				placeholder_text_multiple: this.placeholder,
				create_option: this._allowAdd,
				// persistent_create_option decides if you can add any term, even if part
				// of the term is also found, or only unique, not overlapping terms
				persistent_create_option: true,
				// with the skip_no_results option you can disable the 'No results match..'
				// message, which is somewhat redundant when option adding is enabled
				skip_no_results: this._allowAdd
			})
			.change(()=> {
				/**
				 * convert value to string is multiple is true
				 */
				let v      = $(this._select).val();
				this.value = (this._multiple ? (v || ['']).join(',') : v);
				let model  = this.value;
				if (!this._multiple) {
					try {model = this._select.options[this._select.selectedIndex].model || model;} catch (e) {}
				}
				UIEvent.fireEvent('change', this.element, model);
			});
		$(this._options).remove();
		if (this._checkbox) {
			this._checkedChanged(this.checked === true);
		}
	}

	optionsChanged(newValue) {
		setTimeout(()=> {
			$(this._select)
				.val(this.value)
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
					let v      = $(this._select).val();
					this.value = (this._multiple ? (v || ['']).join(',') : v);
					let model  = this.value;
					if (!this._multiple) {
						try {model = this._select.options[this._select.selectedIndex].model || model;} catch (e) {}
					}
					UIEvent.fireEvent('change', this.element, model);
				})
				.trigger('chosen:updated');
		}, 500);
	}

	disabledChanged(newValue) {
		this.disabled = newValue === 'true' || newValue === true;
		this.makeBusy(newValue);
	}

	readonlyChanged(newValue) {
		$(this._select)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue === true ? 'readonly' : 'R', '')
			.trigger('chosen:updated');
		$(this._optionInput)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue === true ? 'readonly' : 'R', '');
	}

	makeBusy(isBusy) {
		if (!this._select) return;
		$(this._select)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '')
			.trigger('chosen:updated');
		$(this._optionInput)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true ? 'disabled' : 'D', '');
	}

	private _checkedChanged(newValue) {
		if (this._checkbox) {
			$(this._select)
				.removeAttr('D')
				.removeAttr('disabled')
				.attr(newValue === false ? 'disabled' : 'D', '')
				.trigger('chosen:updated');
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

	private _keyup($event) {
		if ($event.keyCode == 13) {
			$event.cancelBubble = true;
			$event.preventDefault();
			return false;
		}
		return true;
	}
}
