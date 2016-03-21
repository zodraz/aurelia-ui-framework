import {autoinject} from "aurelia-framework";
import {UIApplicationState} from "../../framework/utils/ui-app-state";

@autoinject()
export class AppLogin {

	constructor(public appState:UIApplicationState) {

	}

	onLogin($event) {
		this.appState.IsAuthenticated = true;
		this.appState.UserGroup       = 'User';
		this.appState.Username        = 'user@domain.com';
		this.appState.IpAddress       = '192.168.0.1';
		if (this.appState.currentRoute) {
			this.appState.router.navigate(this.appState.currentRoute.fragment);
		}
		else {
			this.appState.navigateTo('home');
		}
	}
}