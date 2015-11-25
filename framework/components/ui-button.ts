/**
 *    UI Component: Button
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@autoinject()
@containerless()
@customElement('ui-button')
export class UIButton {
	private _classes:string = '';
	private _iconEl;
	private _button;
	private _dropdown;

	@bindable menu;
	@bindable value:string;
	@bindable icon:string;
	@bindable id:string          = '';
	@bindable disabled:boolean = false;

	private _size:string     = "normal";
	private _theme:string    = "default";
	private _default:boolean = false;

	constructor(public element:Element) {
		this._default = element.hasAttribute('default');
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
		if (this._theme)
			this._classes += `ui-button-${this._theme} `;
		if (this._size)
			this._classes += `ui-button-${this._size} `;
		if (this._default !== false)
			this._classes += `ui-default `;
		if (this.icon) this._attachIcon();

		if (this.menu) {
			$(this._button).append('&nbsp;<i class="ui-caret"></i>');
		}
	}

	attached() {
		$(this._button)
			.data('UIButton', this)
			.attr(this.disabled !== false ? 'disabled' : 'x', '');
	}

	disabledChanged(newValue) {
		$(this._button)
			.attr(newValue !== false ? 'disabled' : 'x', '');
	}

	private _attachIcon() {
		if (!this._iconEl) {
			this._iconEl = $(this._button).prepend('<i></i>').children('i');
		}
		this._iconEl.attr('class', '').addClass(this.icon);
	}

	private _clicked($event) {
		if (this.menu) {
			$event.cancelBubble = true;
			$(this._button).toggleClass('ui-dropdown');
		}
		else {
			UIEvent.fireEvent('click', this.element);
		}
	}
}