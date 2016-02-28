/**
 *    UI Input      Button
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/

import {autoinject, customElement, bindable, inlineView, bindingMode} from "aurelia-framework";
import {_, UIEvent} from "aurelia-ui-framework";
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
	@bindable() href:string      = null;
	/**
	 * @property    label
	 * @type        string
	 */
	@bindable() label:string     = '';
	/**
	 * @property    value
	 * @type        string
	 */
	@bindable() value:string     = '';
	/**
	 * @property    icon
	 * @type        string
	 */
	@bindable() icon:string      = '';
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
		if (this.disabled === true) return false;
		$event.cancelBubble = true;
		UIEvent.fireEvent('click', this.element, this);
		return true;
	}
}


@customElement('ui-button-group')
@inlineView(`<template class="ui-button-group" click.delegate="onClick($event)"><content></content></template>`)
export class UIButtonGroup {
	private __size       = 'normal';
	private __theme      = 'default';
	private __toggle:any = false;

	/**
	 * @property    disabled
	 * @type        string
	 */
	@bindable() disabled:boolean = false;
	/**
	 * @property    value
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	value:string;

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

		if (this.element.hasAttribute('toggle')) {
			this.__toggle = this.element.attributes.getNamedItem('toggle').value || 'single';
			this.__theme  = 'secondary';
		}
		this.disabled = isTrue(this.disabled);
	}

	attached() {
		if (this.element.hasAttribute('vertical')) this.element.classList.add('ui-vertical');

		let buttons = this.element.getElementsByClassName('ui-button');
		_.forEach(buttons, b=> {
			b.classList.remove('ui-button-default');
			b.classList.remove('ui-button-normal');
			b.classList.remove('ui-button-large');
			b.classList.remove('ui-button-small');
			b.classList.add(`ui-button-${this.__theme}`);
			b.classList.add(`ui-button-${this.__size}`);
		});

		if (this.__toggle && !isEmpty(this.value)) {
			setTimeout(()=> {
				_.forEach((this.value + '').split(','), v=> {
					let opt = this.element.querySelector(`.ui-button[data-value="${v}"]`);
					if (opt)opt.classList.add('ui-checked');
				});
			}, 200);
		}
	}

	disable(disabled?) {
		let buttons = this.element.getElementsByClassName('ui-button');
		_.forEach(buttons, b=> {
			if (b.attributes.getNamedItem('disabled') !== null) {
				b.attributes.removeNamedItem('disabled');
			}
			if (disabled === true || this.disabled === true) {
				b.attributes.setNamedItem(document.createAttribute('disabled'));
			}
		});
	}

	disabledChanged(newValue) {
		this.disabled = isTrue(newValue);
		this.disable();
	}

	valueChanged(newValue) {
		if (this.__toggle) {
			_.forEach(this.element.querySelectorAll(`.ui-button.ui-checked`),
					  b=>b.classList.remove('ui-checked'));
			_.forEach((newValue + '').split(','), v=> {
				let opt = this.element.querySelector(`.ui-button[data-value="${v}"]`);
				if (opt)opt.classList.add('ui-checked');
			});
		}
	}

	onClick($event) {
		if (this.disabled === true) return false;
		if (this.__toggle) {
			$event.cancelBubble = true;
			if (this.__toggle === 'multiple') {
				let v       = $event.detail.value;
				let a:string[] = isEmpty(this.value) ? [] : (this.value + '').split(',');
				if (a.indexOf(v) == -1) {
					a.push(v);
				}
				else {
					a.splice(a.indexOf(v), 1);
				}
				this.value = a.join(',');
			}
			else {
				this.value = $event.detail.value;
			}
			UIEvent.fireEvent('change', this.element, this.value);
		}
	}
}
