/**
 *    UI Core    Content
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement("ui-content")
export class UIContent {
	@bindable class:string = '';

	constructor(el:Element) {
		if (el.hasAttribute('auto')) this.class += ' ui-auto-height';
	}
}