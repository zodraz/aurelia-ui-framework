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
	private _option;
	private _type:string      = '';
	private _classes:string   = '';
	private _checkbox:boolean = true;

	private checked:boolean  = false;
	@bindable id:string    = '';
	@bindable name:string  = '';
	@bindable value:string = '';

	constructor(public element:Element) {
		if (element.hasAttribute('radio')) this._checkbox = false;
	}

	bind() {
		this._type    = this._checkbox ? 'checkbox' : 'radio';
		this._classes = this._checkbox ? 'ui-checkbox' : 'ui-radio';
	}

	attached() {
		$(this._option).data('UIOption', this);
	}

	private _checkChanged($event:UIEvent) {
		$event.data = this._checkbox ? this.checked : this.value;
	}
}
