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

	@bindable id:string          = '';
	@bindable addonIcon:string   = '';
	@bindable addonText:string   = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable readonly:boolean   = false;
	@bindable disabled:boolean   = false;

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
				this.value = this.double ? `${this.value1},${this.value2}` : this.value1;
			})
			.on('mousemove', (e)=> {
				if ($(e.target).hasClass('x'))
					$(e.target)[(e.target.offsetWidth - 18 < e.clientX - e.target.getBoundingClientRect().left) ? 'addClass' : 'removeClass']('onX');
			})
			.on('touchstart mousedown', (e)=> {
				if ($(e.target).hasClass('onX')) {
					e.preventDefault();
					e.cancelBubble = true;
					$(e.target).removeClass('x onX').val('');
				}
			})
			.keypress((e) => {
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

				if (e.keyCode == 13) $(e.target).trigger('change', e);

				return true;
			})
			.change((e) => {
				var val = $(e.target).val().replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
				val     = this._format(val);
				$(e.target).val(val);
				if (this.double && $(e.target).hasClass('ui-secondary')) this.value2 = val
				else this.value1 = val;
				this.value = this.double ? `${this.value1},${this.value2}` : this.value1;
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
		[this.value1, this.value2] = (newValue || '').split(',');
		this.value1                = this._format(this.value1 || '');
		this.value2                = this._format(this.value2 || '');
		$(this.inputGroup).find('input.ui-primary')[this.value1 !== '' ? 'addClass' : 'removeClass']('x');
		$(this.inputGroup).find('input.ui-secondary')[this.value2 !== '' ? 'addClass' : 'removeClass']('x');
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
		return val;
	}
}