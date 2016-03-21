/**
 *    UI Component: Input Dual
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
	name: 'valueLeft',
	attribute: 'value-left',
	changeHandler: '_valueLeftChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})
/**
 * @bindable value
 */
@bindable({
	name: 'valueRight',
	attribute: 'value-right',
	changeHandler: '_valueRightChanged',
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
@customElement('ui-input-dual')
export class UIInputDual {
	static _id = 0;

	private _id;
	private _input;
	private _inputLeft;
	private _inputRight;
	private _inputGroup;
	private _optionInput;
	private _type:string         = 'text';
	private _intype:string       = 'text';
	private _focus:boolean       = false;
	private _noLabel:boolean     = false;
	private _checkbox:boolean    = false;
	private _classes:string      = '';
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	// binding privates
	private _valueLeft:string  = '';
	private _valueRight:string = '';
	private valueLeft:string   = '';
	private valueRight:string  = '';
	private checked:boolean    = false;

	@bindable id:string               = '';
	@bindable dir:string              = '';
	@bindable helpText:string         = '';
	@bindable prefixIcon:string       = '';
	@bindable prefixText:string       = '';
	@bindable prefixClass:string      = '';
	@bindable suffixIcon:string       = '';
	@bindable suffixText:string       = '';
	@bindable suffixClass:string      = '';
	@bindable buttonIcon:string       = '';
	@bindable buttonText:string       = '';
	@bindable placeholderLeft:string  = '';
	@bindable placeholderRight:string = '';
	@bindable readonly:boolean        = false;
	@bindable disabled:boolean        = false;

	//LATITUDE REGEX  /^-?(90|([0-8]?[0-9]{1,1}(\.[0-9]*)?))$/
	//LONGITUDE REGEX /^-?(180|(1[0-7][0-9]|[0-9]{0,2})(\.[0-9]*)?)$/

	/**
	 * valid acceptable character list for all unicode supported languages
	 */
	private ALPHA:string = "\\u0041-\\u005a\\u0061-\\u007a\\u00aa\\u00c0-\\u02af\\u0370-\\u0481\\u048a-\\u05ea\\u0621-\\u065e\\u066e-\\u06ef\\u0710-\\u072f\\u074d-\\u07a5\\u07ca-\\u07ea\\u0800-\\u082c\\u0900-\\u0964"
		+ "\\u0981-\\u09e3\\u0a01-\\u0a5e\\u0a81-\\u0ae3\\u0b01-\\u0b63\\u0b82-\\u0bd7\\u0c01-\\u0c63\\u0c82-\\u0ce3\\u0d63\\u0d7a-\\u0e4f\\u0e5a-\\u0ecd\\u0f00-\\u0f1f\\u0f34-\\u103f\\u104c-\\u108f\\u109a-\\u1368"
		+ "\\u1380-\\u17dd\\u17f0-\\u180e\\u1820-\\u1940\\u1950-\\u19c9\\u19e0-\\u1a7f\\u1aa0-\\u1b4b\\u1b80-\\u1baf\\u1c00-\\u1c3f\\u1c5a-\\u1dbf\\u1dd3-\\u1ffe\\u2c00-\\u2dff\\u3041-\\u3243\\ua000-\\ua827"
		+ "\\ua840-\\ua8cf\\ua90a-\\ua9cf\\uaa00-\\uaa4d\\uaa60-\\ufdfb\\ufe70-\\ufefc\\u3400-\\u4db5\\u4e00-\\u9fa5";

	/**
	 * valid acceptable digits list for all unicode supported languages
	 */
	private DIGIT:string = "\\u0030-\\u0039\\u0660-\\u0669\\u06f0-\\u06f9\\u07c0-\\u07c9\\u0966-\\u096f\\u09e6-\\u09ef\\u0a66-\\u0a6f\\u0ae6-\\u0aef\\u0b66-\\u0b6f\\u0be6-\\u0bef\\u0c66-\\u0c6f\\u0ce6-\\u0cef\\u0d66-\\u0d6f"
		+ "\\u0e50-\\u0e59\\u0ed0-\\u0ed9\\u0f20-\\u0f33\\u1040-\\u1049\\u1090-\\u1099\\u1369-\\u137c\\u17e0-\\u17e9\\u1810-\\u1819\\u1946-\\u194f\\u19d0-\\u19d9\\u1a80-\\u1a99\\u1b50-\\u1b59\\u1bb0-\\u1bb9\\u1c40-\\u1c49"
		+ "\\u1c50-\\u1c59\\ua620-\\ua629\\ua8d0-\\ua8d9\\ua900-\\ua909\\ua9d0-\\ua9d9\\uaa50-\\uaa59\\uabf0-\\uabf9";


	constructor(public element:Element) {
		this._id = `input-${UIInputDual._id++}`;
		if (element.hasAttribute('clear')) this._inputClasses += ' ui-clear ';
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('label-top')) this._classes = 'ui-label-top';
		// check types
		if (element.hasAttribute('password')) this._type = 'password';
		if (element.hasAttribute('email')) this._type = 'email';
		if (element.hasAttribute('search')) this._type = 'search';
		if (element.hasAttribute('number')) this._type = 'number';
		if (element.hasAttribute('decimal')) this._type = 'decimal';
		if (element.hasAttribute('name')) this._type = 'name';
		if (element.hasAttribute('address')) this._type = 'address';
		if (element.hasAttribute('location')) this._type = 'location';

		if (this._type == 'email')this._intype = 'email';
		if (this._type == 'location' || this._type == 'number' || this._type == 'decimal')this._intype = 'number';
	}

	bind() {
		if (this.element.hasAttribute('readonly')) this.readonly = true;
		if (this.element.hasAttribute('disabled')) this.disabled = true;

		if (!_.isEmpty(this.valueLeft)) {
			this._valueLeftChanged(this.valueLeft);
		}
		if (!_.isEmpty(this.valueRight)) {
			this._valueRightChanged(this.valueRight);
		}
	}

	attached() {
		this._input = $(this._inputGroup).find('.ui-input');
		if (this._type == 'password') {
			this._input.attr('type', 'password');
		}
		else if (this._type == 'email') {
			this._input.attr('type', 'email');
		}
		else if (this._type == 'search') {
			this._input.attr('type', 'search');
		}
		else if (this._type == 'phone') {
			this._input.attr('type', 'tel');
		}
		else if (this._type == 'number' || this._type == 'decimal' || this._type == 'position') {
			this._input.attr('type', 'number');
		}
		this._input
			.attr(this.readonly === true ? 'readonly' : 'R', '')
			.attr(this.disabled === true ? 'disabled' : 'D', '')
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
				if (this._type == 'name') {
					return (new RegExp('[' + this.ALPHA + '\'\\.\\-&\\s]', 'g'))
						.test(String.fromCharCode(e.charCode));
				}
				//else if (this._type == 'address') {
				//	return (/\w*/)
				//		.test(String.fromCharCode(e.charCode));
				//}
				else if (this._type == 'number') {
					return (/[0-9\-]/).test(String.fromCharCode(e.charCode));
				}
				else if (this._type == 'decimal' || this._type == 'location') {
					return (/[0-9\-\.]/).test(String.fromCharCode(e.charCode));
				}
				else if (this._type == 'email') {
					return (/[A-Za-z0-9\-\.@_\+]/).test(String.fromCharCode(e.charCode));
				}

				if ((e.which || e.keyCode) == 13) {
					$(e.target).trigger('change', e);
					return false;
				}

				return true;
			});

		$(this._inputLeft)
			[(this.valueLeft || '') !== '' ? 'addClass' : 'removeClass']('x')
			.on('input', (e)=> {
				let el = $(e.target);
				if (!this.readonly && !this.disabled) {
					el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
				}
				this.valueLeft = el.val();
			})
			.change((e) => {
				var val = $(e.target).val();
				val     = val.replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
				val     = this._format(val);
				$(e.target).val(val);
				this.valueLeft = val;
			});
		$(this._inputRight)
			[(this.valueRight || '') !== '' ? 'addClass' : 'removeClass']('x')
			.on('input', (e)=> {
				let el = $(e.target);
				if (!this.readonly && !this.disabled) {
					el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
				}
				this.valueRight = el.val();
			})
			.change((e) => {
				var val = $(e.target).val();
				val     = val.replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
				val     = this._format(val);
				$(e.target).val(val);
				this.valueRight = val;
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

	private _valueLeftChanged(newValue) {
		this.valueLeft = this._valueLeft = this._format(_.isEmpty(newValue) ? '' : newValue);
		$(this._inputLeft)[this.valueLeft !== '' ? 'addClass' : 'removeClass']('x');
	}

	private _valueRightChanged(newValue) {
		this.valueRight = this._valueRight = this._format(_.isEmpty(newValue) ? '' : newValue);
		$(this._inputRight)[this._valueRight !== '' ? 'addClass' : 'removeClass']('x');
	}

	private _format(val) {
		if (this._type == 'name') {
			val = val.replace(new RegExp('[' + this.ALPHA + '\']+(?=[\\.\\-&\\s]*)', 'g'), (txt) => {
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
		return val;
	}

	private _buttonClick($event) {
		$event.cancelBubble = true;
		UIEvent.fireEvent('click', this.element, this, this._input);
	}
}