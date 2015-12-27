import {autoinject, ViewSlot} from "aurelia-framework";
import {UIApplicationState} from "../../framework/utils/ui-app-state";
import {UIDialogService} from "../../framework/utils/ui-dialog-service";
import {MyDialog} from "./my-dialog";

@autoinject()
export class HomeDialogs {
	constructor(public appState:UIApplicationState, public dialogService:UIDialogService) {
	}

	open() {
		this.dialogService.show(MyDialog);
	}

	modal() {
		this.dialogService.show(MyDialog, {modal: true});
	}

	confirm() {
		this.appState.notifyConfirm("Are you sure?")
		.then(()=>{
		});
	}
}