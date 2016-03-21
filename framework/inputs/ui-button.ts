/**
 *    UI Input       Button
 *    @author        Adarsh Pastakia
 *    @company       HMC
 *    @copyright     2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable, bindingMode, inlineView} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {_} from "../utils/ui-utils";

@autoinject()
@customElement('ui-button')
export class UIButton {
	private __button:Element;
	private __size  = 'normal';
	private __theme = 'default';

	/**
	 * @property    label
	 * @type        string
	 */
	@bindable()
	label:string     = '';
	/**
	 * @property    value
	 * @type        string
	 */
	@bindable()
	value:string     = '';
	/**
	 * @property    icon
	 * @type        string
	 */
	@bindable()
	icon:string      = '';
	/**
	 * @property    disabled
	 * @type        string
	 */
	@bindable()
	disabled:boolean = false;

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
		if (this.element.hasAttribute('square')) this.__button.classList.add('ui-button-square');

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

	fireClick($event) {
		$event.preventDefault();
		$event.cancelBubble = true;
		if (this.disabled === true) return false;
		UIEvent.fireEvent('click', this.element, this);
	}
}

@autoinject()
@customElement('ui-button-group')
@inlineView('<template class="ui-button-group" click.delegate="fireChange($event)"><content></content></template>')
export class UIButtonGroup {
	private __size       = 'normal';
	private __theme      = 'default';
	private __extraClass = '';

	/**
	 * @property    toggle
	 * @type        string
	 */
	@bindable()
	toggle:any       = false;
	/**
	 * @property    disabled
	 * @type        string
	 */
	@bindable()
	disabled:boolean = false;
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
		if (this.element.hasAttribute('info'))      this.__theme = 'info';
		if (this.element.hasAttribute('danger'))    this.__theme = 'danger';
		if (this.element.hasAttribute('success'))   this.__theme = 'success';
		if (this.element.hasAttribute('warning'))   this.__theme = 'warning';
		// Set Size
		if (this.element.hasAttribute('small')) this.__size = 'small';
		if (this.element.hasAttribute('large')) this.__size = 'large';

		if (this.element.hasAttribute('top')) this.__extraClass += ' ui-icon-top';
		if (this.element.hasAttribute('round')) {
			this.__extraClass += ' ui-button-round';
		}
		else if (this.element.hasAttribute('square')) this.__extraClass += ' ui-button-square';

		if (this.element.hasAttribute('vertical')) this.element.classList.add('ui-vertical');

		this.disabled = isTrue(this.disabled);
	}

	attached() {
		if (this.toggle !== false) {
			this.element.classList.add(`ui-button-group-${this.__theme}`);
			this.__theme = 'default';
		}

		let buttons = this.element.getElementsByClassName('ui-button');
		_.forEach(buttons, b=> {
			b.className = `ui-button ui-button-${this.__theme} ui-button-${this.__size} ${this.__extraClass}`;
		});

		if (this.toggle !== false) {
			if (!isEmpty(this.value)) {
				setTimeout(()=> {
					_.forEach((this.value + '').split(','), v=> {
						let opt = this.element.querySelector(`.ui-button[data-value="${v}"]`);
						if (opt)opt.classList.add('ui-checked');
					});
				}, 10);
			}
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

	toggleChanged(newValue) {
		this.value = '';
	}

	valueChanged(newValue) {
		if (this.toggle !== false) {
			_.forEach(this.element.querySelectorAll(`.ui-button.ui-checked`),
					  b=>b.classList.remove('ui-checked'));
			_.forEach((newValue + '').split(','), v=> {
				let opt = this.element.querySelector(`.ui-button[data-value="${v}"]`);
				if (opt)opt.classList.add('ui-checked');
			});
		}
	}

	fireChange($event) {
		$event.preventDefault();
		$event.cancelBubble = true;
		if (this.disabled === true) return false;
		if (this.toggle !== false) {
			if (isEmpty($event.detail.value)) return false;
			if (this.toggle === 'multiple') {
				let v          = $event.detail.value;
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