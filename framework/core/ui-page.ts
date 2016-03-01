/**
 *    UI Core        Page
 *    @author        Adarsh Pastakia
 *    @company        HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 *    @description
 *    This plugin provides an router view page
 **/

import {customElement, bindable, inlineView} from "aurelia-framework";
import {Router} from "aurelia-router";

@customElement('ui-page')
export class UIPage {

	/**
	 * @property    page-title
	 * @type        string
	 */
	@bindable() pageTitle:string;
}

@customElement('ui-section')
@inlineView('<template class="ui-section"><content></content></template>')
export class UISection {

	constructor(public element:Element) {
	}

	bind() {
		if (this.element.hasAttribute('column')) {
			this.element.classList.add('ui-section-column');
		}
		else {
			this.element.classList.add('ui-section-row');
		}
	}
}

@customElement('ui-content')
@inlineView('<template class="ui-content"><content></content></template>')
export class UIContent {

	constructor(public element:Element) {
	}

	bind() {
		if (this.element.hasAttribute('auto')) {
			this.element.classList.add('ui-auto-fit');
		}
		else if (this.element.hasAttribute('scroll')) {
			this.element.classList.add('ui-scroll');
		}
		if (this.element.hasAttribute('padded')) this.element.classList.add('ui-pad-all');
	}
}

@customElement('ui-sidebar')
@inlineView(`<template class="ui-sidebar" css.bind="{'flex-basis':width}"><content></content></template>`)
export class UISidebar {
	private collapsible:boolean = false;

	/**
	 * @property    width
	 * @type        string
	 */
	@bindable() width:string = '220px';

	constructor(public element:Element) {
	}

	bind() {
		// TODO: Add collapse functionality
		this.collapsible = this.element.hasAttribute('collapsible');
		if (this.element.hasAttribute('padded')) this.element.classList.add('ui-pad-all');
	}
}

@customElement('ui-divider')
@inlineView('<template class="ui-divider"></template>')
export class UIDivider {
}

@customElement('ui-toolbar')
@inlineView(`<template class="ui-toolbar"><content></content></template>`)
export class UIToolbar {
}

@customElement('ui-statsbar')
@inlineView(`<template class="ui-statsbar"><content></content></template>`)
export class UIStatsbar {
}

@customElement('ui-stat')
@inlineView('<template class="ui-stat"><span class="${icon}" if.bind="icon"></span><div><h1>${value}</h1><h6>${label}</h6></div></template>')
export class UIStat {
	@bindable() value;
	@bindable() label;
	@bindable() icon;
}

