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

	private _classes:string = '';

	constructor(el:Element) {
		if (el.hasAttribute('nowrap')) this._classes += ' ui-nowrap ';
		if (el.hasAttribute('stretch')) this._classes += ' ui-stretch ';
		if (el.hasAttribute('center')) this._classes += ' ui-center ';
		if (el.hasAttribute('start')) this._classes += ' ui-start ';
		if (el.hasAttribute('end')) this._classes += ' ui-end ';
	}
}