/**
 *    UI Container: Form
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@autoinject()
@customElement('ui-form')
export class UIForm {
	@bindable id:string    = '';
	@bindable class:string = '';
	@bindable busy:boolean = false;

	private _form;
	private _classes:string = '';

	constructor(public element:Element) {
	}

	attached() {
		setTimeout(()=> {
			$(this._form).data('UIForm', this)
				.find('input,select,textarea').first().focus();
		}, 200);
	}

	busyChanged(newValue:any) {
		try {
			$(this.element).find('ui-input, ui-chosen, ui-markdown, ui-button, ui-date, ui-list, ui-option, ui-switch')
				.each((i, e)=> {
					if (newValue === true) {
						$(e).find('input,select,button,textarea').removeAttr('D')
							.removeAttr('disabled')
							.attr('disabled', '');
					}
					else if (!e.au.controller.viewModel.disabled) {
						$(e).find('input,select,button,textarea').removeAttr('D')
							.removeAttr('disabled');
					}
				});
		} catch (e) {
		}
		try {
			$(this.element).find('select').trigger('chosen:updated');
		} catch (e) {
		}
	}

	private _keyup($event) {
		if (!$($event.target).is('textarea') && $event.keyCode == 13) {
			UIEvent.fireEvent('submit', this.element, this, this._form);
		}

		return true;
	}
}