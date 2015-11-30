/**
 *    UI Core    Application
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 *    @description
 *    This plugin provides an application container with header, footer and side drawer menu
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIApplicationState} from "../utils/ui-app-state";

@autoinject()
@containerless()
@customElement("ui-app")
export class UIApp {
	@bindable title:string;
	@bindable subTitle:string;

	@bindable router:Router;
	@bindable authenticated:boolean;

	@bindable startYear:string;
	private thisYear = new Date().getFullYear();

	private uiApp;

	constructor(public appState:UIApplicationState) {
		$.notify.addStyle('ui', {
			html: "<div><div data-notify-html></div></div>"
		});
	}

	private showMenu($event) {
		$event.stopPropagation();
		$(this.uiApp).addClass('show-menu');
	}

	private hideMenu($event) {
		if (!$($event.target).closest('button').hasClass('ui-app-menu-handle')) {
			$(this.uiApp).removeClass('show-menu');
		}
		$('.ui-dropdown').removeClass('ui-dropdown');
		return true;
	}
}