/**
 *    UI Component: Input
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {_} from "../utils/ui-utils";

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
/**
 * @bindable area code
 * @type {string}
 */
@bindable({
	name: 'phoneCode',
	attribute: 'phone-code',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})
/**
 * @bindable phone number
 * @type {string}
 */
@bindable({
	name: 'phoneNumber',
	attribute: 'phone-number',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})
/**
 * @bindable phone extension
 * @type {string}
 */
@bindable({
	name: 'phoneExt',
	attribute: 'phone-ext',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})
/**
 * @bindable country code (iso2 code)
 * @type {string}
 */
@bindable({
	name: 'phoneCountry',
	attribute: 'phone-country',
	changeHandler: '_countryChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: 'us'
})


@autoinject()
@customElement('ui-phone')
export class UIPhone {
	static _id = 0;

	private _id;
	private _input;
	private _inputGroup;
	private _optionInput;
	private _focus:boolean       = false;
	private _noLabel:boolean     = false;
	private _checkbox:boolean    = false;
	private _phoneFull:boolean   = false;
	private _value:string        = '';
	private _classes:string      = '';
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	// binding privates
	private value:string      = '';
	private checked:boolean   = false;
	private addonClass:string = '';
	private addonIcon:string  = '';
	private addonText:string  = '';
	// For Phone Input Only
	private phoneCode:string    = '';
	private phoneNumber:string  = '';
	private phoneExt:string     = '';
	private phoneCountry:string = 'us';
	private placeholder:string  = '';

	@bindable id:string         = '';
	@bindable helpText:string   = '';
	@bindable buttonIcon:string = '';
	@bindable buttonText:string = '';
	@bindable readonly:boolean  = false;
	@bindable disabled:boolean  = false;
	@bindable phoneType:number  = PhoneLib.TYPE.MOBILE;

	constructor(public element:Element) {
		this._id = `phone-${UIPhone._id++}`;
		if (element.hasAttribute('clear')) this._inputClasses += ' ui-clear ';
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('label-top')) this._classes = 'ui-label-top';
		if (element.hasAttribute('full')) {
			this._phoneFull = true;
			this.addonClass = 'ui-flag';
		}
	}

	bind() {
		if (!this._phoneFull) {
			this.addonText   = '+' + PhoneLib.getDialingCode(this.phoneCountry || 'US');
			this.placeholder = PhoneLib.getExample(this.phoneCountry || 'US', this.phoneType, true);
			this._value      = `${this.phoneCode}${this.phoneNumber}${this.phoneExt}`;
			if (this.value && this.value != '')
				this._value = PhoneLib.format(this.value, this.phoneCountry || 'US', PhoneLib.FORMAT.NATIONAL);
		}
		else {
			this._value = this.value;
		}
		this.processValue();
	}

	attached() {
		this._input = $(this._inputGroup).find('.ui-input');
		this._input
			[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
			.attr(this.readonly === true ? 'readonly' : 'R', '')
			.attr(this.disabled === true ? 'disabled' : 'D', '')
			.on('input', (e)=> {
				if (!this.readonly && !this.disabled) {
					var el = $(e.target);
					el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
				}
				this.processValue();
			})
			.on('mousemove', (e)=> {
				if ($(e.target).hasClass('x'))
					$(e.target)[(e.target.offsetWidth - 18 < e.clientX - e.target.getBoundingClientRect().left) ? 'addClass' : 'removeClass']('onX');
			})
			.on('touchstart mousedown', (e)=> {
				if (e.button == 0 && $(e.target).hasClass('onX')) {
					e.preventDefault();
					e.cancelBubble = true;
					$(e.target).removeClass('x onX').val('').trigger('change');
				}
			})
			.keypress((e) => {
				if (e.ctrlKey || e.altKey || e.metaKey || e.charCode == 0) return true;
				if ((e.which || e.keyCode) == 13) {
					$(e.target).trigger('change', e);
					return false;
				}

				return /[0-9]/.test(String.fromCharCode(e.charCode));
			})
			.change((e) => {
				this.processValue();
			});

		if (this._checkbox) {
			this._checkedChanged(this.checked === true);
		}
	}

	disabledChanged(newValue) {
		this.disabled = newValue === 'true' || newValue === true;
		this.makeBusy(newValue);
	}

	readonlyChanged(newValue) {
		if (!this._input) return;
		this._input
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue === true ? 'readonly' : 'R', '');
		$(this._optionInput)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue === true ? 'readonly' : 'R', '');
	}

	makeBusy(isBusy) {
		if (!this._input) return;
		this._input
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
		$(this._optionInput)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true ? 'disabled' : 'D', '');
	}

	private _checkedChanged(newValue) {
		if (this._checkbox) {
			this._input
				.removeAttr('D')
				.removeAttr('disabled')
				.attr(newValue === false ? 'disabled' : 'D', '');
		}
	}

	private _countryChanged(newValue) {
		this.addonText   = '+' + PhoneLib.getDialingCode(this.phoneCountry || 'US');
		this.placeholder = PhoneLib.getExample(this.phoneCountry || 'US', this.phoneType, true);
		this.processValue();
	}

	private _valueChanged(newValue) {
		if (this._phoneFull) {
			this._value = newValue;
			this.processValue();
		}
	}

	private processValue() {
		if (!this._phoneFull) {
			this._value = PhoneLib.formatInput(this._value, this.phoneCountry || 'us', false, true);
			this.value  = PhoneLib.format(this._value, this.phoneCountry || 'us', PhoneLib.FORMAT.FULL);
			this.updatePhone();
		}
		else {
			if (this._value != '' && !/^\+/.test(this._value)) this._value = '+' + this._value;
			this._value      = PhoneLib.formatInput(this._value, '', false, true);
			this.value       = PhoneLib.format(this._value, '', PhoneLib.FORMAT.FULL);
			this.addonIcon   = PhoneLib.getIso2Code(this.value) || 'US';
			this.placeholder = PhoneLib.getExample(this.addonIcon, this.phoneType, !this._phoneFull);
		}
		$(this._inputGroup).find('input.ui-primary')[this._value !== '' ? 'addClass' : 'removeClass']('x');
	}

	private updatePhone() {
		try {
			if (!this._phoneFull) {
				var info         = PhoneLib.getNumberInfo(this._value || '', this.phoneCountry || 'US');
				this.phoneCode   = info.areaCode;
				this.phoneNumber = isNaN(info.phone) ? '' : info.phone + '';
				this.phoneExt    = info.ext;
			}
		} catch (e) {
			this.phoneCode   = '';
			this.phoneNumber = '';
			this.phoneExt    = '';
		}
	}
}
