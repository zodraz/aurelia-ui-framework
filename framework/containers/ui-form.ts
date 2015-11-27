/**
 *    UI Container: Form
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@autoinject()
@containerless()
@customElement('ui-form')
export class UIForm {
	@bindable id:string    = '';
	@bindable class:string = '';

	private _form;
	private _classes:string = '';

	constructor(public element:Element) {
	}

	attached() {
		setTimeout(()=> {
			$(this._form).data('UIForm', this)
				.find('input,textarea').first().focus();
		}, 200);
	}

	private _keyup($event) {
		if (!$($event.target).is('textarea') && $event.keyCode == 13)
			UIEvent.fireEvent('submit', this.element, this, this._form);

		return true;
	}
}