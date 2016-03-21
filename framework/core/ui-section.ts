/**
 *    UI Core    View Section
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@customElement("ui-section")
export class UISection {
	private __dir:string = 'ui-flex-row';

	constructor(public element:Element) {
		if (element.hasAttribute('column')) {
			this.__dir = 'ui-flex-column';
		}
	}
}