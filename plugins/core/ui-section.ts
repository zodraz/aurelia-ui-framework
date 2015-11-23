/**
 *    UI Core    View Section
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement("ui-section")
export class UISection {
	private dir:string = 'ui-flex-row';

	constructor(el:Element) {
		if (el.hasAttribute('column')) this.dir = 'ui-flex-column';
	}
}