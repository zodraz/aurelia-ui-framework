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
	@bindable minWidth:string = '0';

	constructor(el:Element) {
		if (el.hasAttribute('auto'))this.size = 'auto';
		if (el.hasAttribute('fill'))this.size = 'fill';
		if (el.hasAttribute('full'))this.size = 'full';
		if (el.hasAttribute('row'))this.classes += ' ui-row ';
		if (el.hasAttribute('stretch'))this.classes += ' ui-stretch ';
		if (el.hasAttribute('middle')) this.classes += ' ui-middle ';
		if (el.hasAttribute('bottom')) this.classes += ' ui-bottom ';
		if (el.hasAttribute('top')) this.classes += ' ui-top ';
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