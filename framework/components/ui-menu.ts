/**
 *    UI Core       Menu
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/

import {customElement, bindable, inlineView} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIEvent} from "../utils/ui-event";
import {UIApplication} from "../utils/ui-application";

@customElement('ui-menu')
export class UIMenu {
	/**
	 * @property    router
	 * @type        Aurelia Router
	 */
	@bindable() router:Router;
	/**
	 * @property    menu
	 * @type        Array of links
	 */
	@bindable() menu:Array<any>;

	constructor(public element:Element, public appState:UIApplication) {
	}

	isActive(route) {
		return route.isActive || route.href == location.hash ||
			location.hash.indexOf(route.config.redirect || 'QWER') > -1;
	}

	onClick($event) {
		if (this.router) return true;
	}
}