/**
 *    UI Core    Header
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@autoinject()
@customElement("ui-header")
export class UIHeader {
	@bindable close:boolean    = false;
	@bindable collapse:boolean = false;

	private __theme = 'ui-default';

	constructor(public element:Element) {
		if (element.hasAttribute('primary')) {
			this.__theme = 'ui-primary';
		}
		if (element.hasAttribute('secondary')) {
			this.__theme = 'ui-secondary';
		}
	}

	closeChanged(newValue) {
		this.close = (newValue !== false);
	}

	collapseChanged(newValue) {
		this.collapse = (newValue !== false);
	}

	fireClose() {
		UIEvent.fireEvent('close', this.element);
	}

	fireCollapse() {
		UIEvent.fireEvent('collapse', this.element);
	}
}