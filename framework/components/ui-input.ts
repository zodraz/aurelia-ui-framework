/**
 *    UI Component: Input
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

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
@containerless()
@customElement('ui-input')
export class UIInput {
	private _inputGroup;
	private _input;
	private _value1:string       = '';
	private _value2:string       = '';
	private _placeholder1:string = '';
	private _placeholder2:string = '';
	private _type:string         = 'text';
	private _area:boolean        = false;
	private _double:boolean      = false;
	private _checkbox:boolean    = false;
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	// binding privates
	private value:string    = '';
	private checked:boolean = false;
	// For Phone Input Only
	private phoneCode:string    = '';
	private phoneNumber:string  = '';
	private phoneCountry:string = 'us';

	@bindable id:string          = '';
	@bindable addonIcon:string   = '';
	@bindable addonText:string   = '';
	@bindable addonClass:string  = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable readonly:boolean   = false;
	@bindable disabled:boolean   = false;
	@bindable phoneType:number   = PhoneLib.TYPE.MOBILE;

	constructor(public element:Element) {
		if (element.hasAttribute('clear')) this._inputClasses += ' ui-clear ';
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('readonly')) this.readonly = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('area')) this._area = true;
		if (element.hasAttribute('double')) this._double = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		// check types
		if (element.hasAttribute('email')) this._type = 'email';
		if (element.hasAttribute('search')) this._type = 'search';
		if (element.hasAttribute('number')) this._type = 'number';
		if (element.hasAttribute('decimal')) this._type = 'decimal';
		if (element.hasAttribute('name')) this._type = 'name';
		if (element.hasAttribute('address')) this._type = 'address';
		if (element.hasAttribute('position')) this._type = 'position';
		if (element.hasAttribute('phone')) this._type = 'phone';
	}

	bind() {
		if (this._type == 'position') {
			this._double = true;
			this._type   = 'decimal';
		}
		if (this.placeholder) {
			[this._placeholder1, this._placeholder2] = this.placeholder.split(',');
		}
		if (this.value) {
			this._valueChanged(this.value);
		}
		if (this._checkbox) {
			this.disabled = this.checked !== true;
		}
		if (this._type == 'phone') {
			this.addonText     = '+' + PhoneLib.getDialingCode(this.phoneCountry || 'US');
			this._placeholder1 = PhoneLib.getExample(this.phoneCountry || 'US', this.phoneType, true);

			this._value1 = `${this.phoneCode}${this.phoneNumber}`;
			this._processValue();
		}
	}

	attached() {
		this._input = $(this._inputGroup)
			.data('UIInput', this)
			.find('.ui-input');
		this._input
			[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
			.attr(this.readonly !== false ? 'readonly' : 'R', '')
			.attr(this.disabled !== false ? 'disabled' : 'D', '')
			.on('input', (e)=> {
				if (!this.readonly && !this.disabled) {
					var el = $(e.target);
					el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
				}
				this._processValue();
			})
			.on('mousemove', (e)=> {
				if ($(e.target).hasClass('x'))
					$(e.target)[(e.target.offsetWidth - 18 < e.clientX - e.target.getBoundingClientRect().left) ? 'addClass' : 'removeClass']('onX');
			})
			.on('touchstart mousedown', (e)=> {
				if (e.button == 0 && $(e.target).hasClass('onX')) {
					e.preventDefault();
					e.cancelBubble = true;
					$(e.target).removeClass('x onX').val('');
				}
			})
			.keypress((e) => {
				if (e.ctrlKey || e.altKey || e.metaKey) return true;
				if (this._type == 'name') {
					return (/\w*/)
						.test(String.fromCharCode(e.charCode));
				}
				else if (this._type == 'address') {
					return (/\w*/)
						.test(String.fromCharCode(e.charCode));
				}
				else if (this._type == 'number') {
					return (/[0-9\-]/).test(String.fromCharCode(e.charCode));
				}
				else if (this._type == 'decimal') {
					return (/[0-9\-\.]/).test(String.fromCharCode(e.charCode));
				}
				else if (this._type == 'email') {
					return (/[A-Za-z0-9\-\.@_\+]/).test(String.fromCharCode(e.charCode));
				}
				else if (this._type == 'phone') {
					return /[0-9]/.test(String.fromCharCode(e.charCode));
				}

				if (e.keyCode == 13) $(e.target).trigger('change', e);

				return true;
			})
			.change((e) => {
				var val = $(e.target).val().replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
				val     = this._format(val);
				$(e.target).val(val);
				if (this._double && $(e.target).hasClass('ui-secondary')) this._value2 = val
				else this._value1 = val;
				this._processValue();
			});
	}

	disabledChanged(newValue) {
		this._input
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
	}

	readonlyChanged(newValue) {
		this._input
			.removeAttr('readonly')
			.attr(newValue !== false ? 'readonly' : 'R', '');
	}

	private _checkedChanged(newValue) {
		if (this._checkbox) {
			this.disabled = newValue !== true;
		}
	}

	private _valueChanged(newValue) {
		if (this._type == 'phone') {
			// DONOT USE VALUE FOR PHONE, INSTEAD USE AREACODE AND NUMBER
		}
		else {
			[this._value1, this._value2] = (newValue || '').split(',');
			this._value1                 = this._format(this._value1 || '');
			this._value2                 = this._format(this._value2 || '');
		}
		$(this._inputGroup).find('input.ui-primary')[this._value1 !== '' ? 'addClass' : 'removeClass']('x');
		$(this._inputGroup).find('input.ui-secondary')[this._value2 !== '' ? 'addClass' : 'removeClass']('x');
	}

	private _countryChanged(newValue) {
		this.addonText     = '+' + PhoneLib.getDialingCode(newValue || 'US');
		this._placeholder1 = PhoneLib.getExample(newValue || 'US', this.phoneType, true);

		this._value1 = PhoneLib.formatInput(this._value1 || '', newValue || 'US')
			.replace(/[\(\)\s\-]+$/, '');
		this._processValue();
	}

	private _processValue() {
		this.value = this._double ? `${this._value1},${this._value2}` : this._value1;
		if (this._type == 'phone') {
			this._value1 = PhoneLib.formatInput(this._value1, this.phoneCountry || 'us');
			this.value   = PhoneLib.format(this._value1, this.phoneCountry || 'us', PhoneLib.FORMAT.FULL);
			this._updatePhone();
		}
	}

	private _format(val) {
		if (this._type == 'name') {
			val = val.replace(new RegExp('[' + 'A-Za-z' + ']+(?=[\'\\.\\-&\\s]*)', 'g'), (txt) => {
				if (/^[ivxlcm]+$/.test(txt.toLowerCase()))
					return txt.toUpperCase();
				if (txt.toLowerCase().indexOf("mc") == 0)
					return txt.substr(0, 1).toUpperCase() + txt.substr(1, 1).toLowerCase() + txt.substr(2, 1).toUpperCase() + txt.substr(3);
				if (txt.toLowerCase().indexOf("mac") == 0)
					return txt.substr(0, 1).toUpperCase() + txt.substr(1, 2).toLowerCase() + txt.substr(3, 1).toUpperCase() + txt.substr(4);
				return txt.charAt(0).toUpperCase() + txt.substr(1);
			});
		}
		else if (this._type == 'email') {
			val = val.toLowerCase();
		}
		else if (this._type == 'phone') {
			val = PhoneLib.formatInput(val || '', this.phoneCountry || 'US')
				.replace(/[\(\)\s\-]+$/, '');
		}
		return val;
	}

	private _updatePhone() {
		try {
			var info         = PhoneLib.getNumberInfo(this._value1 || '', this.phoneCountry || 'US');
			this.phoneCode   = info.areaCode;
			this.phoneNumber = isNaN(info.phone) ? '' : info.phone + '';
		} catch (e) {
			this.phoneCode   = '';
			this.phoneNumber = '';
		}
	}

	private _buttonClick($event) {
		UIEvent.fireEvent('click', this.element);
	}
}