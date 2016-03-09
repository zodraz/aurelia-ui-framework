/**
 *    UI Input       Button
 *    @author        Adarsh Pastakia
 *    @company       HMC
 *    @copyright     2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable} from "aurelia-framework";
import {_, UIEvent} from "aurelia-ui-framework";

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
		if (this.element.hasAttribute('round')) this.__button.classList.add('ui-button-round');

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
