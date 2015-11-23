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
	changeHandler:'valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: false
})

@autoinject()
@containerless()
@customElement('ui-switch')
export class UISwitch {
	@bindable labelOn:string  = 'On';
	@bindable labelOff:string = 'Off';
	@bindable theme:string    = 'default';

	private switch;
	private checked:boolean;

	// TODO: Add disabled functionality and styles

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
	}

	private valueChanged(newValue) {
		UIEvent.fireEvent('change', this.element, newValue);
	}

	private onFocus() {
		$(this.switch).children().first().addClass('ui-focus');
	}

	private onBlur() {
		$(this.switch).children().first().removeClass('ui-focus');
	}
}