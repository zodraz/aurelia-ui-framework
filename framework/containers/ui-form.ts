/**
 *    UI Container: Form
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement('ui-form')
export class UIForm {
	@bindable id:string    = '';
	@bindable class:string = '';

	private form;
	private classes:string = '';

	constructor(public element:Element) {
	}

	attached() {
		setTimeout(()=> {
			$(this.form).data('UIForm', this)
				.find('input,textarea').first().focus();
		}, 200);
	}

	keyup($event) {
		if (!$($event.target).is('textarea') && $event.keyCode == 13)
			console.log('Submit')
	}
}