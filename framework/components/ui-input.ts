/**
 *    UI Component: Input
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";

/**
 * @bindable value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: 'valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})
/**
 * @bindable checked
 */
@bindable({
	name: 'checked',
	attribute: 'checked',
	changeHandler: 'checkedChanged',
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
	changeHandler: 'countryChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: 'us'
})


@autoinject()
@containerless()
@customElement('ui-input')
export class UIInput {
	private inputGroup;
	private value:string        = '';
	private value1:string       = '';
	private value2:string       = '';
	private placeholder1:string = '';
	private placeholder2:string = '';
	private type:string         = 'text';
	private area:boolean        = false;
	private double:boolean      = false;
	private checkbox:boolean    = false;
	private checked:boolean     = false;
	private labelClasses:string = '';
	private inputClasses:string = '';

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
		if (element.hasAttribute('clear')) this.inputClasses += ' ui-clear ';
		if (element.hasAttribute('required')) this.labelClasses += ' ui-required ';
		if (element.hasAttribute('readonly')) this.readonly = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('area')) this.area = true;
		if (element.hasAttribute('double')) this.double = true;
		if (element.hasAttribute('checkbox')) this.checkbox = true;
		// check types
		if (element.hasAttribute('email')) this.type = 'email';
		if (element.hasAttribute('search')) this.type = 'search';
		if (element.hasAttribute('number')) this.type = 'number';
		if (element.hasAttribute('decimal')) this.type = 'decimal';
		if (element.hasAttribute('name')) this.type = 'name';
		if (element.hasAttribute('address')) this.type = 'address';
		if (element.hasAttribute('position')) this.type = 'position';
		if (element.hasAttribute('phone')) this.type = 'phone';
	}

	bind() {
		if (this.type == 'position') {
			this.double = true;
			this.type   = 'decimal';
		}
		if (this.placeholder) {
			[this.placeholder1, this.placeholder2] = this.placeholder.split(',');
		}
		if (this.value) {
			this.valueChanged(this.value);
		}
		if (this.checkbox) {
			this.disabled = this.checked !== true;
		}
		if (this.type == 'phone') {
			this.addonText    = '+' + PhoneLib.getDialingCode(this.phoneCountry || 'US');
			this.placeholder1 = PhoneLib.getExample(this.phoneCountry || 'US', this.phoneType, true);

			this.value1 = `${this.phoneCode}${this.phoneNumber}`;
			this._processValue();
		}
	}

	attached() {
		$(this.inputGroup)
			.data('UIInput', this)
			.find('input.ui-input')
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
				if (this.type == 'name') {
					return (/\w*/)
						.test(String.fromCharCode(e.charCode));
				}
				else if (this.type == 'address') {
					return (/\w*/)
						.test(String.fromCharCode(e.charCode));
				}
				else if (this.type == 'number') {
					return (/[0-9\-]/).test(String.fromCharCode(e.charCode));
				}
				else if (this.type == 'decimal') {
					return (/[0-9\-\.]/).test(String.fromCharCode(e.charCode));
				}
				else if (this.type == 'email') {
					return (/[A-Za-z0-9\-\.@_\+]/).test(String.fromCharCode(e.charCode));
				}
				else if (this.type == 'phone') {
					return /[0-9]/.test(String.fromCharCode(e.charCode));
				}

				if (e.keyCode == 13) $(e.target).trigger('change', e);

				return true;
			})
			.change((e) => {
				var val = $(e.target).val().replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
				val     = this._format(val);
				$(e.target).val(val);
				if (this.double && $(e.target).hasClass('ui-secondary')) this.value2 = val
				else this.value1 = val;
				this._processValue();
			});
	}

	disabledChanged(newValue) {
		$(this.inputGroup).find('input.ui-input')
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
	}

	readonlyChanged(newValue) {
		$(this.inputGroup).find('input.ui-input')
			.removeAttr('readonly')
			.attr(newValue !== false ? 'readonly' : 'R', '');
	}

	checkedChanged(newValue) {
		if (this.checkbox) {
			this.disabled = newValue !== true;
		}
	}

	/**
	 * on change of determine if clear icon needs to be shown
	 * @param newValue
	 */
	private valueChanged(newValue) {
		if (this.type == 'phone') {
			// DONOT USE VALUE FOR PHONE, INSTEAD USE AREACODE AND NUMBER
		}
		else {
			[this.value1, this.value2] = (newValue || '').split(',');
			this.value1                = this._format(this.value1 || '');
			this.value2                = this._format(this.value2 || '');
		}
		$(this.inputGroup).find('input.ui-primary')[this.value1 !== '' ? 'addClass' : 'removeClass']('x');
		$(this.inputGroup).find('input.ui-secondary')[this.value2 !== '' ? 'addClass' : 'removeClass']('x');
	}

	private countryChanged(newValue) {
		this.addonText    = '+' + PhoneLib.getDialingCode(newValue || 'US');
		this.placeholder1 = PhoneLib.getExample(newValue || 'US', this.phoneType, true);

		this.value1 = PhoneLib.formatInput(this.value1 || '', newValue || 'US')
			.replace(/[\(\)\s\-]+$/, '');
		this._processValue();
	}

	private _processValue() {
		this.value = this.double ? `${this.value1},${this.value2}` : this.value1;
		if (this.type == 'phone') {
			this.value1 = PhoneLib.formatInput(this.value1, this.phoneCountry || 'us');
			this.value  = PhoneLib.format(this.value1, this.phoneCountry || 'us', PhoneLib.FORMAT.FULL);
			this._updatePhone();
		}
	}

	private _format(val) {
		if (this.type == 'name') {
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
		else if (this.type == 'email') {
			val = val.toLowerCase();
		}
		else if (this.type == 'phone') {
			val = PhoneLib.formatInput(val || '', this.phoneCountry || 'US')
				.replace(/[\(\)\s\-]+$/, '');
		}
		return val;
	}

	private _updatePhone() {
		try {
			var info         = PhoneLib.getNumberInfo(this.value1 || '', this.phoneCountry || 'US');
			this.phoneCode   = info.areaCode;
			this.phoneNumber = isNaN(info.phone) ? '' : info.phone;
		} catch (e) {
			this.phoneCode   = '';
			this.phoneNumber = '';
		}
	}
}