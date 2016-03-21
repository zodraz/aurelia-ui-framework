/**
 *    UI Component: Switch
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

/**
 * @bindable checked
 * @type {boolean}
 */
@bindable({
	name: 'checked',
	attribute: 'checked',
	changeHandler: '_valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: false
})

@autoinject()
@customElement('ui-switch')
export class UISwitch {
	@bindable id:string        = '';
	@bindable labelOn:string   = 'On';
	@bindable labelOff:string  = 'Off';
	@bindable theme:string     = 'default';
	@bindable disabled:boolean = false;

	private _input;
	private _label;
	private _switch;
	private checked:boolean;

	constructor(public element:Element) {
		if (element.hasAttribute('check'))this.checked = true;
		// check theme attributes
		if (element.hasAttribute('primary'))this.theme = 'primary';
		if (element.hasAttribute('info'))this.theme = 'info';
		if (element.hasAttribute('danger'))this.theme = 'danger';
		if (element.hasAttribute('success'))this.theme = 'success';
		if (element.hasAttribute('warning'))this.theme = 'warning';
		if (element.hasAttribute('ampm'))this.theme = 'ampm';
		if (element.hasAttribute('gender'))this.theme = 'gender';
		if (element.hasAttribute('priority'))this.theme = 'priority';
		if (element.hasAttribute('long'))this.theme += ' ui-switch-long';
	}

	attached() {
		if (this.element.hasAttribute('disabled')) this.disabled = true;

		$(this._input)
			.attr(this.disabled === true ? 'disabled' : 'D', '');
		$(this._label)
			.attr(this.disabled === true ? 'disabled' : 'D', '');
	}

	disabledChanged(newValue) {
		this.disabled = newValue === 'true' || newValue === true;
		this.makeBusy(newValue);
	}

	makeBusy(newValue) {
		$(this._input)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(newValue === true || this.disabled === true ? 'disabled' : 'D', '');
		$(this._label)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(this.disabled === true || this.disabled === true ? 'disabled' : 'D', '');
	}

	private _valueChanged(newValue) {
		UIEvent.fireEvent('change', this.element, newValue, this._switch);
	}

	private _focus() {
		$(this._switch).children().first().addClass('ui-focus');
	}

	private _blur() {
		$(this._switch).children().first().removeClass('ui-focus');
	}
}