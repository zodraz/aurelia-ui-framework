/**
 *    UI Component: Button
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {Utils} from "../utils/ui-utils";

@autoinject()
@customElement('ui-button')
export class UIButton {
	private _classes:string = '';
	private _iconEl;
	private _temp;
	private _button;
	private _link;
	private _menu;
	private _dropdown;

	@bindable menu:boolean;
	@bindable value:string;
	@bindable label:string;
	@bindable icon:string;
	@bindable href:string;
	@bindable id:string        = '';
	@bindable disabled:boolean = false;

	private _menuItems         = [];
	private _size:string       = "normal";
	private _theme:string      = "default";
	private _default:boolean   = false;
	private _menuRight:boolean = false;

	constructor(public element:Element) {
		if (element.hasAttribute('default'))this._default = true;
		if (element.hasAttribute('disabled'))this.disabled = true;
		if (element.hasAttribute('menu'))this.menu = true;
		if (element.hasAttribute('menu-right'))this._menuRight = true;
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
		if (this.label) {
			this.menu = true;
		}
		if (this._theme)
			this._classes += `ui-button-${this._theme} `;
		if (this._size)
			this._classes += `ui-button-${this._size} `;
		if (this._default !== false)
			this._classes += `ui-default `;
	}

	attached() {
		if (this.href) this._button = this._link;
		if (this.icon) this._attachIcon();
		if (this.menu && this._menuRight) {
			$(this.element).addClass('ui-menu-right');
		}
		if (this.menu) {
			$(this._button).append('&nbsp;<i class="ui-caret"></i>');
		}

		if (this.menu) {
			$(this._temp).children().each((i, c:any)=> {
				c = $(c);
				if (c.is('divider'))this._menuItems.push('-');
				if (c.is('section'))this._menuItems.push(c.text());
				if (c.is('menu'))this._menuItems.push({
					id: c.attr('data-id'),
					icon: c.attr('icon'),
					href: c.attr('href') || 'javascript:;',
					title: c.text()
				});
			});
		}
		else this.label = $(this._temp).text();
		$(this._temp).remove();
		$(this.element)
			.data('UIButton', this)
			.attr(this.disabled !== false ? 'disabled' : 'x', '');
	}

	disabledChanged(newValue) {
		$(this.element)
			.attr(newValue !== false ? 'disabled' : 'x', '');
	}

	private _attachIcon() {
		if (!this._iconEl) {
			this._iconEl = $(this._button).prepend('<i></i>').children('i');
		}
		this._iconEl.attr('class', '').addClass(this.icon);
	}

	private _clicked($event) {
		$event.cancelBubble = true;
		if (this.menu) {
			if ($(this.element).hasClass('ui-dropdown')) {
				$(this.element).removeClass('ui-dropdown');
				$event.preventDefault();
				return false;
			}
			if (!this._menu) this._menu = $(this._button).next('.ui-menu');
			$('.ui-dropdown').removeClass('ui-dropdown');

			let pos = Utils.getFloatPosition(this.element, this._menu, this._menuRight);
			$(this._menu).offset({left: pos.left, top: pos.top});
			$(this.element)
				.toggleClass('ui-dropdown')
				.removeClass('ui-menu-reverse');

			if (pos.vReverse) $(this.element).addClass('ui-menu-reverse');
			if (pos.hReverse) $(this.element).addClass('ui-menu-left');
		}
		else {
			UIEvent.fireEvent('click', this.element, this, this._button);
		}
		return true;
	}

	_menuClicked($event) {
		$event.cancelBubble = true;
		$('.ui-dropdown').removeClass('ui-dropdown');
		UIEvent.fireEvent('menuclick', this.element, $event.data, this._button);
		return true;
	}
}