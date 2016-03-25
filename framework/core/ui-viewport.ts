/**
 *    UI Core       Viewport
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 *    @description  Application Viewport
 **/

import {customElement, bindable, Container} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIEvent} from "../utils/ui-event";
import {UIUtils} from "../utils/ui-utils";
import {UIApplication} from "../utils/ui-application";

@customElement('ui-viewport')
export class UIViewport {
	/**
	 * @property    router
	 * @type        Aurelia Router
	 */
	@bindable()
	router:Router;


	@bindable()
	subtitle:string     = '';
	@bindable()
	copyright:string    = '';
	@bindable()
	showMenu:boolean    = true;
	@bindable()
	showTaskbar:boolean = true;

	constructor(public element:Element, public appState:UIApplication, container:Container) {
		UIUtils.container(container);
		this.appState.info(this.constructor.name, "UIViewport Created");
	}

	bind() {
		this.showMenu    = isTrue(this.showMenu);
		this.showTaskbar = isTrue(this.showTaskbar);
	}

	__showMenu($event) {
		$event.stopPropagation();
		this.element.classList.add('show-menu');
		this.appState.info(this.constructor.name, "showMenu");
	}

	__hideMenu($event) {
		if (this.element.classList.contains('show-menu')) {
			this.appState.info(this.constructor.name, "hideMenu");
			this.element.classList.remove('show-menu');
		}
		return true;
	}

	logout() {
		this.appState.info(this.constructor.name, "fire logout event");
		UIEvent.fireEvent('logout', this.element);
	}
}
