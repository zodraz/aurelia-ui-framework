/**
 *    UI Core       Grid Layout
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {inlineView, customElement, bindable} from "aurelia-framework";

@customElement('ui-row')
@inlineView('<template><content></content></template>')
export class UIRow {

	constructor(public element:Element) {
	}

	bind() {
		if (this.element.hasAttribute('column')) {
			this.element.classList.add('ui-column-row');
		}
		else {
			this.element.classList.add('ui-row');
		}
	}
}


@customElement('ui-column')
@inlineView(`<template class="ui-column" css.bind="{'flex-basis': width}"><content></content></template>`)
export class UIColumn {

	@bindable()
	size:string  = '';
	@bindable()
	width:string = 'none';

	constructor(public element:Element) {
	}

	bind() {
		if (this.element.hasAttribute('fill')) {
			this.element.classList.add('ui-col-fill');
		}
		else if (this.element.hasAttribute('full')) {
			this.element.classList.add('ui-col-full');
		}
		else if (isEmpty(this.size)) {
			this.element.classList.add('ui-col-auto');
		}

		if (this.element.hasAttribute('padded')) this.element.classList.add('ui-pad-all');

		for (var size of this.size.split(' ')) {
			this.element.classList.add(`ui-col-${size}`);
		}
	}
}
