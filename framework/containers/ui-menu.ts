/**
 *    UI Containers: Menu
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 *    @description
 *    This plugin provides an application drawer menu
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
@containerless()
@customElement("ui-menu")
export class UIMenu {
	@bindable router:Router;
	@bindable title:string;
	@bindable menu:string;

	private classes:string   = '';
	private floating:boolean = false;

	constructor(public element:Element) {
		this.floating = element.hasAttribute('dropdown');
	}

	bind() {
		if (this.router && this.router.isRoot) this.classes = 'ui-app-menu';
		if (this.floating !== false) this.classes += ' ui-floating ';
	}

	linkClicked($event) {
		let el = $($event.target).closest('a');
		if (el) {
			let e        = new Event('click');
			e.bubbles    = true;
			e.cancelable = true;
			e.target     = el.get(0);
			this.element.dispatchEvent(e);
		}
	}
}