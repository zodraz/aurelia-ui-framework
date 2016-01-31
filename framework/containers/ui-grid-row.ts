/**
 *    UI Container: Layout Grid
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement('ui-row')
export class UIGridRow {
	@bindable class:string = '';

	private _classes:string = '';

	constructor(el:Element) {
		if (el.hasAttribute('column')) this._classes += ' ui-row-column ';
		if (el.hasAttribute('nowrap')) this._classes += ' ui-flex-nowrap ';
		if (el.hasAttribute('stretch')) this._classes += ' ui-flex-stretch ';
		if (el.hasAttribute('center')) this._classes += ' ui-flex-center ';
		if (el.hasAttribute('start')) this._classes += ' ui-flex-start ';
		if (el.hasAttribute('end')) this._classes += ' ui-flex-end ';
		if (el.hasAttribute('spaced')) this._classes += ' ui-flex-spaced ';
	}
}