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

	private _switch;
	private checked:boolean;

	constructor(public element:Element) {
		if (element.hasAttribute('check'))this.checked = true;
		if (element.hasAttribute('disabled'))this.disabled = true;
		// check theme attributes
		if (element.hasAttribute('primary'))this.theme = 'primary';
		if (element.hasAttribute('info'))this.theme = 'info';
		if (element.hasAttribute('danger'))this.theme = 'danger';
		if (element.hasAttribute('success'))this.theme = 'success';
		if (element.hasAttribute('warning'))this.theme = 'warning';
		if (element.hasAttribute('ampm'))this.theme = 'ampm';
		if (element.hasAttribute('gender'))this.theme = 'gender';
		if (element.hasAttribute('priority'))this.theme = 'priority';
	}

	attached() {
		$(this._switch)
			.find('input')
			.attr(this.disabled !== false ? 'disabled' : 'D', '');
		$(this._switch).find('label').last()
			.attr(this.disabled !== false ? 'disabled' : 'D', '');
	}

	disabledChanged(newValue) {
		$(this._switch).find('input')
			.removeAttr('D')
			.attr(newValue !== false ? 'disabled' : 'D', '');
		$(this._switch).find('label').last()
			.removeAttr('D')
			.attr(this.disabled !== false ? 'disabled' : 'D', '');
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