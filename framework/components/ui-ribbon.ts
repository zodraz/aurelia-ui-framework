/**
 *    UI Component: Ribbon
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@customElement('ui-ribbon')
export class UIRibbon {
	@bindable class:string;

	private theme:string = 'default';
	private posH         = 'right';
	private posV         = 'top';

	constructor(public element:Element) {
		// check theme attributes
		if (element.hasAttribute('primary'))this.theme = 'primary';
		if (element.hasAttribute('secondary'))this.theme = 'secondary';
		if (element.hasAttribute('info'))this.theme = 'info';
		if (element.hasAttribute('danger'))this.theme = 'danger';
		if (element.hasAttribute('success'))this.theme = 'success';
		if (element.hasAttribute('warning'))this.theme = 'warning';
		// position
		if (element.hasAttribute('top'))this.posV = 'top';
		if (element.hasAttribute('bottom'))this.posV = 'bottom';
		if (element.hasAttribute('left'))this.posH = 'left';
		if (element.hasAttribute('right'))this.posH = 'right';
	}
}