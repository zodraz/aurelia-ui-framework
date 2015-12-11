import {autoinject, customElement, bindable} from "aurelia-framework";
import {UIDialogService} from "../utils/ui-dialog-service";
import {UIEvent} from "../utils/ui-event";

@autoinject()
@customElement('ui-dialog')
export class UIDialog {

	@bindable dataTitle;

	_modal:boolean = false;

	constructor(public element:Element, public dialogService:UIDialogService) {
		if (element.hasAttribute('modal'))this._modal = true;
	}

	attached() {
	}
}