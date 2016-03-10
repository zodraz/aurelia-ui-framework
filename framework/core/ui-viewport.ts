/**
 *    UI Core       Viewport
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 *    @description  Application Viewport
 **/

import {customElement, bindable, Container} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIUtils} from "../utils/ui-utils";
import {UIApplication} from "../utils/ui-application";

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

	constructor(public element:Element, container:Container, appState:UIApplication) {
		UIUtils.container(container);
	}

	showMenu($event) {
		$event.stopPropagation();
		this.element.classList.add('show-menu');
	}

	hideMenu($event) {
		this.element.classList.remove('show-menu');
		return true;
	}
}

export class UIViewportOptions {
	logo          = "images/logo.png";
	title         = 'Aurelia UI Framework';
	subtitle      = 'Version 2';
	copyright     = "Copyright &copy; 2016, Adarsh Pastakia";
	footerMessage = "Made With <span class='heart'>&hearts;</span> For HMC";

	showMenu    = true;
	showTaskbar = true;

	constructor(obj:any = {}) {
		Object.assign(this, obj);
	}
}