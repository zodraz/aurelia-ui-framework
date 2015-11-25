/**
 *    UI Component: Checkbox/Radio
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@bindable({
	name: 'checked',
	attribute: 'checked',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: false
})

@autoinject()
@containerless()
@customElement('ui-option')
export class UIOption {
	private option;
	private type:string      = '';
	private classes:string   = '';
	private checked:boolean  = false;
	private checkbox:boolean = true;

	@bindable id:string    = '';
	@bindable name:string  = '';
	@bindable value:string = '';

	constructor(public element:Element) {
		if (element.hasAttribute('radio')) this.checkbox = false;
	}

	bind() {
		this.type    = this.checkbox ? 'checkbox' : 'radio';
		this.classes = this.checkbox ? 'ui-checkbox' : 'ui-radio';
	}

	attached() {
		$(this.option).data('UIOption', this);
	}

	checkChanged($event:UIEvent) {
		$event.data = this.checkbox ? this.checked : this.value;
	}
}
