import {autoinject, ViewSlot} from "aurelia-framework";
import {UIApplicationState} from "../../framework/utils/ui-app-state";
import {UIDialogService} from "../../framework/utils/ui-dialog-service";
import {MyDialog} from "./my-dialog";

@autoinject()
export class HomeDialogs {
	constructor(public appState:UIApplicationState, public dialogService:UIDialogService) {
	}

	confirm() {
		this.dialogService.show(MyDialog);
	}
}