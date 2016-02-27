/**
 *    UI Core		Viewport
 *    @author		Adarsh Pastakia
 *    @company   	HMC
 *    @copyright 	2015-2016, Adarsh Pastakia
 *    @description
 *    This plugin provides an application viewport with header, footer and side drawer menu
 **/

import {autoinject, customElement, bindable} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
@customElement('ui-viewport')
export class UIViewport {

	/**
	 * @property    router
	 * @type        Aurelia Router
	 */
	@bindable() router:Router;

	/**
	 * @property    options
	 * @type        UIViewportOptions
	 */
	@bindable() options:UIViewportOptions;

	constructor(public element:Element) {
	}
}
export class UIViewportOptions {
	// App Logo - Relative Path | URL
	logo:string;
	// App Title
	title:string;
	// App Subtitle
	subtitle:string;
	// Footer Copyright
	copyright:string;

	// Show app side menu
	showMenu:boolean = true;
	// Show Taskbar multiple dialogs
	showTaskbar:boolean = true;

	constructor(obj) {
		Object.assign(this, obj);
	}
}