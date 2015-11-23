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
	private classes = '';

	@bindable class:string = '';
	@bindable size:string  = 'auto';
	@bindable width:string = 'auto';

	constructor(el:Element) {
		if (el.hasAttribute('auto'))this.size = 'auto';
		if (el.hasAttribute('fill'))this.size = 'fill';
		if (el.hasAttribute('full'))this.size = 'full';
		if (el.hasAttribute('row'))this.classes += ' ui-row ';
	}

	bind() {
		for (var cls of this.class.split(' ')) {
			this.classes += ` ${cls} `;
		}
		for (var size of this.size.split(' ')) {
			this.classes += ` ui-col-${size} `;
		}
	}
}