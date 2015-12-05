/**
 *    UI Container: Layout Grid Column
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement('ui-column')
export class UIGridColumn {
	private _classes = '';

	@bindable class:string = '';
	@bindable size:string  = 'auto';
	@bindable width:string = 'auto';
	@bindable minWidth:string = '0';

	constructor(el:Element) {
		if (el.hasAttribute('auto'))this.size = 'auto';
		if (el.hasAttribute('fill'))this.size = 'fill';
		if (el.hasAttribute('full'))this.size = 'full';
		if (el.hasAttribute('pad'))this._classes += ' ui-padding ';
		if (el.hasAttribute('row'))this._classes += ' ui-row ';
		if (el.hasAttribute('stretch'))this._classes += ' ui-flex-stretch ';
		if (el.hasAttribute('middle')) this._classes += ' ui-flex-middle ';
		if (el.hasAttribute('bottom')) this._classes += ' ui-flex-bottom ';
		if (el.hasAttribute('top')) this._classes += ' ui-flex-top ';
	}

	bind() {
		for (var cls of this.class.split(' ')) {
			this._classes += ` ${cls} `;
		}
		for (var size of this.size.split(' ')) {
			this._classes += ` ui-col-${size} `;
		}
	}
}