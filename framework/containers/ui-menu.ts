/**
 *    UI Containers: Menu
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIEvent} from "../utils/ui-event";
import {UIApplicationState} from "../utils/ui-app-state";

@autoinject()
@containerless()
@customElement("ui-menu")
export class UIMenu {
	@bindable router:Router;
	@bindable title:string;
	@bindable menu:string;

	private _menu;
	private _classes:string   = '';
	private _floating:boolean = false;

	constructor(public element:Element, public appState:UIApplicationState) {
		this._floating = element.hasAttribute('dropdown');
	}

	bind() {
		if (this.router && this.router.isRoot) this._classes = 'ui-app-menu';
		if (this._floating !== false) this._classes += ' ui-floating ';
	}

	private _linkClicked($event) {
		if ($($event.target).closest('a').data('disabled') === true) {
			$event.preventDefault();
			return false;
		}
		// Dont trigger event for router menu clicks
		if (this.router) return true;
		// Trigger event
		$event.cancelBubble = true;
		let el              = $($event.target).closest('a');
		if (el.length == 1) {
			UIEvent.fireEvent('click', this.element, {linkId: el.data('id'), title: el.text()}, this._menu);
		}
		return true;
	}
}