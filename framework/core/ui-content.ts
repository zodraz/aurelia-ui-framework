/**
 *    UI Core    Content
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@customElement("ui-content")
export class UIContent {
	private __classes;

	constructor(public element:Element) {
		if (element.hasAttribute('auto')) {
			this.__classes += ' ui-auto-height';
		}
		if (element.hasAttribute('scroll')) {
			this.__classes += ' ui-scroll';
		}
	}
}