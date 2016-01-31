/**
 *    UI Container: Button Group
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {_} from "../utils/ui-utils";

@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: '_valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})

@autoinject()
@customElement('ui-button-group')
export class UIButtonGroup {
	private _buttonGroup;
	private _classes:string   = '';
	private _size:string;
	private _theme:string;
	private _toggle:any       = false;
	private _vertical:boolean = false;

	private value       = '';
	@bindable id:string = '';

	// TODO: Add disabled functionality

	constructor(public element:Element) {
		if (element.hasAttribute('toggle'))
			this._toggle = element.getAttribute('toggle') || 'single';
		this._vertical = element.hasAttribute('vertical');
		// check size attributes
		if (element.hasAttribute('large'))this._size = 'large';
		if (element.hasAttribute('small'))this._size = 'small';
		// check theme attributes
		if (element.hasAttribute('primary'))this._theme = 'primary';
		if (element.hasAttribute('secondary'))this._theme = 'secondary';
		if (element.hasAttribute('info'))this._theme = 'info';
		if (element.hasAttribute('danger'))this._theme = 'danger';
		if (element.hasAttribute('success'))this._theme = 'success';
		if (element.hasAttribute('warning'))this._theme = 'warning';
	}

	bind() {
		if (this._vertical !== false)
			this._classes += `ui-vertical `;
	}

	attached() {
		if (this._size) {
			$(this._buttonGroup).children('.ui-button')
				.removeClass('ui-button-normal')
				.addClass(`ui-button-${this._size}`);
		}
		if (this._toggle === false && this._theme) {
			$(this._buttonGroup).children('.ui-button')
				.removeClass('ui-button-default')
				.addClass(`ui-button-${this._theme}`);
		}
		if (this._toggle !== false) {
			$(this._buttonGroup).children('.ui-button')
				.removeClass('ui-button-default')
				.addClass(`ui-button-secondary ui-button-toggle`);
		}
		if (this.value !== null && this._toggle !== false)
			this._checkChange();
	}

	private _valueChanged(newValue) {
		this._checkChange();
	}

	private _clickHandler($event) {
		if (this._toggle !== false) {
			$event.cancelBubble = true;

			if (this._toggle === 'multiple') {
				let a = (this.value + '').split(',')
				let v = $event.detail.value;
				if (a.indexOf(v) == -1)
					a.push(v);
				else
					a.splice(a.indexOf(v), 1);
				this.value = a.join(',');
			}
			else {
				this.value = $event.detail.value;
			}
			UIEvent.fireEvent('change', this.element, this.value, this._buttonGroup);
		}
	}

	private _checkChange() {
		$(this._buttonGroup).children('.ui-checked').removeClass('ui-checked');
		if (this._toggle === 'multiple') {
			let a = (this.value + '').split(',')
			_.forEach(a, v=> {
				$(this._buttonGroup).children(`[value='${v}']`).addClass('ui-checked');
			});
		}
		else {
			$(this._buttonGroup).children(`[value='${this.value}']`).addClass('ui-checked');
		}
	}
}