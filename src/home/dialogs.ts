import {autoinject, ViewSlot} from "aurelia-framework";
import {UIApplicationState} from "aurelia-ui-framework";
import {UIDialogService} from "aurelia-ui-framework";
import {MyDialog} from "./my-dialog";

@autoinject()
export class HomeDialogs {
	constructor(public appState:UIApplicationState, public dialogService:UIDialogService) {
	}

	confirm() {
		this.dialogService.show(MyDialog);
	}
}