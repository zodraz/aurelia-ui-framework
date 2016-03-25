/**
 *    UI Component  Menu
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/

import {customElement, bindable} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIEvent} from "../utils/ui-event";
import {UIApplication} from "../utils/ui-application";

@customElement('ui-menu')
export class UIMenu {
	/**
	 * @property    router
	 * @type        Aurelia Router
	 */
	@bindable()
	router:Router;
	/**
	 * @property    menu
	 * @type        Array of links
	 */
	@bindable()
	menu:Array<any> = [];

	constructor(public element:Element, public appState:UIApplication) {
	}

	bind() {
		for (var i = 0, c = (<HTMLElement>this.element).children; i < c.length; i++) {
			if (c[i].tagName.toLowerCase() === 'menu') {
				this.menu.push({
								   id  : c[i].getAttribute('id'),
								   text: c[i].textContent,
								   icon: c[i].getAttribute('icon'),
								   href: c[i].getAttribute('href') || 'javascript:;',
							   });
			}
			if (c[i].tagName.toLowerCase() === 'section') this.menu.push(c[i].textContent);
			if (c[i].tagName.toLowerCase() === 'divider') this.menu.push('-');
		}
	}

	isActive(route) {
		return route.isActive || route.href == location.hash ||
			location.hash.indexOf(route.config.redirect || 'QWER') > -1;
	}

	onClick($event) {
		if (this.router) return true;
		$event.preventDefault();
		let link = getParentByClass($event.target, 'ui-menu-link', 'ui-menu');
		if (link === null) return false;
		UIEvent.fireEvent('click', this.element, link.dataset['id']);
	}
}