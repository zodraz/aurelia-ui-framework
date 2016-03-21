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
@customElement("ui-app")
export class UIApp {
	@bindable title:string;
	@bindable subTitle:string;

	@bindable router:Router;
	@bindable authenticated:boolean;

	private __uiApp;
	private __thisYear = new Date().getFullYear();


	constructor(public appState:UIApplicationState) {
		$.notify.addStyle(
			'ui', {
				html: "<div><div data-notify-html></div></div>"
			});
	}

	private showMenu($event) {
		$event.stopPropagation();
		$(this.__uiApp)
			.addClass('show-menu');
	}

	private hideMenu($event) {
		if (!$($event.target)
				.closest('button')
				.hasClass('ui-app-menu-handle')) {
			$(this.__uiApp)
				.removeClass('show-menu');
		}
		if (!$($event.target)
				.closest('.ui-button')
				.hasClass('ui-dropdown')) {
			$('.ui-dropdown')
				.removeClass('ui-dropdown');
		}
		return true;
	}
}