/**
 *    UI Container: Layout Grid
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement('ui-grid')
export class UIGrid {
	@bindable class:string = '';

	private classes:string = '';

	constructor(el:Element) {
		if (el.hasAttribute('nowrap')) this.classes += ' ui-nowrap ';
		if (el.hasAttribute('stretch')) this.classes += ' ui-stretch ';
		if (el.hasAttribute('center')) this.classes += ' ui-center ';
		if (el.hasAttribute('start')) this.classes += ' ui-start';
		if (el.hasAttribute('end')) this.classes += ' ui-end';
		if (el.hasAttribute('middle')) this.classes += ' ui-middle ';
		if (el.hasAttribute('bottom')) this.classes += ' ui-bottom';
		if (el.hasAttribute('top')) this.classes += ' ui-top';
	}
}