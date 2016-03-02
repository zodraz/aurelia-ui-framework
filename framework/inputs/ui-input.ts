/**
 *    UI Component: Input
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable, useView, bindingMode} from "aurelia-framework";
import {UIEvent} from "aurelia-ui-framework";

@autoinject()
export class UIInputGroup {
	protected __id = `auf-${seed++}`;
	protected __input:HTMLElement;
	protected __input2:HTMLElement;
	protected __label:Element;
	protected __chkbox:Element;

	protected __type     = 'text';
	protected __format   = 'text';
	protected __checkbox = false;
	protected __value    = '';
	protected __value2   = '';

	protected value       = '';
	protected valueSecond = '';
	protected checked     = false;
	protected readonly    = false;
	protected disabled    = false;

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
		if (this.element.hasAttribute('number')) {
			this.__type   = 'number';
			this.__format = 'number';
		}
		else if (this.element.hasAttribute('decimal')) {
			this.__type   = 'number';
			this.__format = 'decimal';
		}
		else if (this.element.hasAttribute('capitalize')) {
			this.__format = 'title';
		}
		else if (this.element.hasAttribute('email')) {
			this.__type   = 'email';
			this.__format = 'email';
		}
		else if (this.element.hasAttribute('url')) {
			this.__type   = 'url';
			this.__format = 'url';
		}
		else if (this.element.hasAttribute('password')) {
			this.__type = 'password';
		}
		else if (this.element.hasAttribute('search')) {
			this.__type = 'search';
		}
	}

	bind() {
		this.__checkbox = this.element.hasAttribute('checkbox');
		if (!this.__checkbox) this.checked = true;

		if (this.__checkbox) this.checked = isTrue(this.checked);
		this.disabled = this.element.hasAttribute('disabled');
		this.readonly = this.element.hasAttribute('readonly');

		if (!isEmpty(this.value)) this.__value = this.value;
		if (!isEmpty(this.valueSecond)) this.__value2 = this.valueSecond;
	}

	attached() {
		if (this.element.hasAttribute('required')) this.__label.classList.add('ui-required');

		let clr = this.element.querySelector('.ui-clear') as HTMLElement;
		if (clr) clr.style.left = (this.__input.offsetWidth + this.__input.offsetLeft - 24) + 'px';

		if (this.readonly === true) {
			this.__input.attributes.setNamedItem(document.createAttribute('readonly'));
			if (this.__input2)this.__input2.attributes.setNamedItem(document.createAttribute('readonly'));
		}
		if (this.disabled === true || this.checked === false) {
			this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
			if (this.__input2)this.__input2.attributes.setNamedItem(document.createAttribute('disabled'));
		}
		if (this.__chkbox && this.disabled === true) {
			this.__chkbox.attributes.setNamedItem(document.createAttribute('disabled'));
		}

		this.__input.oninput = (evt)=>this.value = this.format(evt);
		this.__input.onkeypress = (evt)=>this.keyPress(evt);

		if (this.__input2) {
			let clr = this.element.querySelector('.ui-clear2') as HTMLElement;
			if (clr) clr.style.left = (this.__input2.offsetWidth + this.__input2.offsetLeft - 24) + 'px';

			this.__input2.oninput = (evt)=>this.valueSecond = this.format(evt);
			this.__input2.onkeypress = (evt)=>this.keyPress(evt);
		}
	}

	clearInput(isSecond) {
		if (isSecond === true)this.valueSecond = '';
		if (isSecond !== true)this.value = '';
	}

	checkedChanged() {
		if (!this.__chkbox)return;
		if (this.__input.attributes.getNamedItem('disabled') !== null) {
			this.__input.attributes.removeNamedItem('disabled');
			if (this.__input2)this.__input2.attributes.removeNamedItem('disabled');
		}
		if (this.checked === false) {
			this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
			if (this.__input2)this.__input2.attributes.setNamedItem(document.createAttribute('disabled'));
		}
		UIEvent.fireEvent('checked', this.element, this.checked);
	}

	readonlyChanged() {
		if (this.__input.attributes.getNamedItem('readonly') !== null) {
			this.__input.attributes.removeNamedItem('readonly');
			if (this.__input2)this.__input2.attributes.removeNamedItem('readonly');
		}
		if (this.readonly === true) {
			this.__input.attributes.setNamedItem(document.createAttribute('readonly'));
			if (this.__input2)this.__input2.attributes.setNamedItem(document.createAttribute('readonly'));
		}
		if (this.__chkbox && this.__chkbox.attributes.getNamedItem('disabled') !== null) {
			this.__chkbox.attributes.removeNamedItem('disabled');
		}
		if (this.__chkbox && this.readonly === true) {
			this.__chkbox.attributes.setNamedItem(document.createAttribute('disabled'));
		}
	}

	valueChanged(newValue) {
		this.__value = newValue;
	}

	valueSecondChanged(newValue) {
		this.__value2 = newValue;
	}

	disabledChanged() {
		this.disable();
	}

	disable(disabled?) {
		if (this.__input.attributes.getNamedItem('disabled') !== null) {
			this.__input.attributes.removeNamedItem('disabled');
			if (this.__input2)this.__input2.attributes.removeNamedItem('disabled');
		}
		if (disabled === true || this.disabled === true || this.checked === false) {
			this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
			if (this.__input2)this.__input2.attributes.setNamedItem(document.createAttribute('disabled'));
		}
		if (this.__chkbox && this.__chkbox.attributes.getNamedItem('disabled') !== null) {
			this.__chkbox.attributes.removeNamedItem('disabled');
		}
		if (this.__chkbox && (disabled === true || this.disabled === true)) {
			this.__chkbox.attributes.setNamedItem(document.createAttribute('disabled'));
		}
	}

	onAddonClick($event) {
		$event.preventDefault();
		UIEvent.fireEvent('addon', this.element, this);
	}

	protected keyPress(evt) {
		if (evt.ctrlKey || evt.altKey || evt.metaKey || evt.charCode === 0) return true;

		if (evt.target.type !== 'textarea' && (evt.which || evt.keyCode) === 13) {
			this.format(evt);
			return UIEvent.fireEvent('enterpressed', this.element, this);
		}

		if (this.__type === 'number') {
			return (/[0-9\-]/).test(String.fromCharCode(evt.charCode));
		}
		else if (this.__type === 'decimal') {
			return (/[0-9\-\.]/).test(String.fromCharCode(evt.charCode));
		}
		else if (this.__type === 'email') {
			return (/[A-Za-z0-9\-\.@_\+$/]/).test(String.fromCharCode(evt.charCode));
		}
		else if (this.__type === 'url') {
			return (/[A-Za-z0-9\-\.?:\{\}\[\]=&#%!()^_\+$/]/).test(String.fromCharCode(evt.charCode));
		}
		return true;
	}

	protected format(evt) {
		let val   = isEmpty(evt.target.value) ? '' : evt.target.value;
		let start = evt.target.selectionStart;
		if (this.__format === 'title') {
			val = val.replace(new RegExp('[' + this.ALPHA + '\']+(?=[\\.\\-&\\s]*)', 'g'), (txt) => {
				if (/^[ivxlcm]+$/.test(txt.toLowerCase())) return txt.toUpperCase();
				if (txt.toLowerCase()
					   .indexOf("mc") == 0) {
					return txt.substr(0, 1)
							  .toUpperCase() +
						txt.substr(1, 1)
						   .toLowerCase() +
						txt.substr(2, 1)
						   .toUpperCase() +
						txt.substr(3);
				}
				if (txt.toLowerCase()
					   .indexOf("mac") == 0) {
					return txt.substr(0, 1)
							  .toUpperCase() +
						txt.substr(1, 2)
						   .toLowerCase() +
						txt.substr(3, 1)
						   .toUpperCase() +
						txt.substr(4);
				}
				return txt.charAt(0)
						  .toUpperCase() + txt.substr(1);
			});
		}
		else if (this.__format === 'email' || this.__format === 'url') {
			val = val.toLowerCase();
		}
		evt.target.value = val;
		setTimeout(()=>evt.target.selectionStart = evt.target.selectionEnd = start, 10);
		return val;
	}
}

@customElement('ui-input')
export class UIInput extends UIInputGroup {
	/**
	 * @property    value
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	value:string                 = '';
	/**
	 * @property    checked
	 * @type        boolean
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	checked:boolean              = false;
	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable() disabled:boolean = false;
	/**
	 * @property    readonly
	 * @type        boolean
	 */
	@bindable() readonly:boolean = false;

	/**
	 * @property    prefix-icon
	 * @type        string
	 */
	@bindable() prefixIcon:string;
	/**
	 * @property    prefix-text
	 * @type        string
	 */
	@bindable() prefixText:string;

	/**
	 * @property    suffix-icon
	 * @type        string
	 */
	@bindable() suffixIcon:string;
	/**
	 * @property    suffix-text
	 * @type        string
	 */
	@bindable() suffixText:string;

	/**
	 * @property    button-icon
	 * @type        string
	 */
	@bindable() buttonIcon:string;
	/**
	 * @property    button-text
	 * @type        string
	 */
	@bindable() buttonText:string;

	/**
	 * @property    help-text
	 * @type        string
	 */
	@bindable() helpText:string;

	/**
	 * @property    placeholder
	 * @type        string
	 */
	@bindable() placeholder:string = '';

}
