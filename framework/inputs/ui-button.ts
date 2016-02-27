/**
 *    UI Input      Button
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/

import {autoinject, customElement, bindable, inlineView} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
@customElement('ui-button')
export class UIButton {
	private __button:Element;
	private __size  = 'normal';
	private __theme = 'default';

	/**
	 * @property    href
	 * @type        string
	 */
	@bindable() href           = null;
	/**
	 * @property    label
	 * @type        string
	 */
	@bindable() label;
	/**
	 * @property    icon
	 * @type        string
	 */
	@bindable() icon;
	/**
	 * @property    disabled
	 * @type        string
	 */
	@bindable() disabled:boolean = false;

	constructor(public element:Element) {

	}

	bind() {
		// Set Theme
		if (this.element.hasAttribute('primary'))   this.__theme = 'primary';
		if (this.element.hasAttribute('secondary')) this.__theme = 'secondary';
		if (this.element.hasAttribute('info'))      this.__theme = 'info';
		if (this.element.hasAttribute('danger'))    this.__theme = 'danger';
		if (this.element.hasAttribute('success'))   this.__theme = 'success';
		if (this.element.hasAttribute('warning'))   this.__theme = 'warning';
		// Set Size
		if (this.element.hasAttribute('small')) this.__size = 'small';
		if (this.element.hasAttribute('large')) this.__size = 'large';

		this.disabled = isTrue(this.disabled);
	}

	attached() {
		if (this.element.hasAttribute('top')) this.__button.classList.add('ui-icon-top');

		this.__button.classList.add(`ui-button-${this.__size}`);
		this.__button.classList.add(`ui-button-${this.__theme}`);
		this.disable();
	}

	disable(disabled?) {
		if (this.__button.attributes.getNamedItem('disabled') !== null) {
			this.__button.attributes.removeNamedItem('disabled');
		}
		if (disabled === true || this.disabled === true) {
			this.__button.attributes.setNamedItem(document.createAttribute('disabled'));
		}
	}

	disabledChanged(newValue) {
		this.disabled = isTrue(newValue);
		this.disable();
	}

	onClick($event) {
		console.log('i got clicked');
	}
}


@customElement('ui-button-group')
@inlineView(`<template class="ui-button-group"><content></content></template>`)
export class UIButtonGroup {
	private __size    = 'normal';
	private __theme   = 'default';

	constructor(public element:Element) {
	}

	bind() {
		// Set Theme
		if (this.element.hasAttribute('primary'))   this.__theme = 'primary';
		if (this.element.hasAttribute('secondary')) this.__theme = 'secondary';
		if (this.element.hasAttribute('info'))      this.__theme = 'info';
		if (this.element.hasAttribute('danger'))    this.__theme = 'danger';
		if (this.element.hasAttribute('success'))   this.__theme = 'success';
		if (this.element.hasAttribute('warning'))   this.__theme = 'warning';
		// Set Size
		if (this.element.hasAttribute('small')) this.__size = 'small';
		if (this.element.hasAttribute('large')) this.__size = 'large';
	}

	attached() {
		if (this.element.hasAttribute('vertical')) this.element.classList.add('ui-vertical');

		let children = this.element.getElementsByClassName('ui-button');
		for (let e = 0; e < children.length; e++) {
			children[e].classList.remove('ui-button-default');
			children[e].classList.remove('ui-button-normal');
			children[e].classList.remove('ui-button-large');
			children[e].classList.remove('ui-button-small');
			children[e].classList.add(`ui-button-${this.__theme}`);
			children[e].classList.add(`ui-button-${this.__size}`);
		}
	}
}
