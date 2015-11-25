/**
 *    UI Containers: Menu
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
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

	private _classes:string   = '';
	private _floating:boolean = false;

	constructor(public element:Element) {
		this._floating = element.hasAttribute('dropdown');
	}

	bind() {
		if (this.router && this.router.isRoot) this._classes = 'ui-app-menu';
		if (this._floating !== false) this._classes += ' ui-floating ';
	}

	private _linkClicked($event) {
		// Dont trigger event for router menu clicks
		if (this.router) return true;
		// Trigger event
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