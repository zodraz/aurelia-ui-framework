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
	private _temp;
	private _button;
	private _menu;
	private _dropdown;

	@bindable menu:boolean;
	@bindable value:string;
	@bindable label:string;
	@bindable icon:string;
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
		if (this.icon) this._attachIcon();

		if (this.menu && this._menuRight) {
			$(this._button).addClass('ui-menu-right');
		}
		if (this.menu) {
			$(this._button).append('&nbsp;<i class="ui-caret"></i>');
		}
	}

	attached() {
		if (this.menu) {
			$(this._temp).children().each((i, c:any)=> {
				c = $(c);
				if (c.is('divider'))this._menuItems.push('-');
				if (c.is('section'))this._menuItems.push(c.text());
				if (c.is('menu'))this._menuItems.push({id: c.attr('link-id'), icon: c.attr('icon'), title: c.text()});
			});
		}
		else this.label = $(this._temp).text();
		$(this._temp).remove();
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
		$event.cancelBubble = true;
		if (this.menu) {
			if ($(this._button).hasClass('ui-dropdown'))
				return $(this._button).removeClass('ui-dropdown');
			if (!this._menu) this._menu = $(this._button).next('.ui-menu');
			$(this._menu)
				.width($(this._button).outerWidth())
				.offset({left: -1000, top: -1000});
			$('.ui-dropdown').removeClass('ui-dropdown');
			$(this._button).toggleClass('ui-dropdown');
			let o  = $(this._button).offset(),
				t  = o.top, l = o.left,
				w  = $(this._button).outerWidth(),
				h  = $(this._button).outerHeight(),
				mh = $(this._menu).outerHeight(),
				ph = $(this._menu).offsetParent().height();

			if (!this._menuRight) {
				if (o.top + mh > ph) {
					t -= (mh - 2);
					$(this._button).addClass('ui-menu-reverse');
				}
				else {
					t += (h - 2);
					$(this._button).removeClass('ui-menu-reverse');
				}
			}
			else {
				$(this._button).removeClass('ui-menu-reverse');
				l += (w - 2);
				if (o.top + mh > ph) {
					t -= (mh - h);
					$(this._button).addClass('ui-menu-reverse');
				}
			}
			$(this._menu).offset({left: l, top: t});
		}
		else {
			UIEvent.fireEvent('click', this.element, this, this._button);
		}
	}

	_menuClicked($event) {
		$event.cancelBubble = true;
		$('.ui-dropdown').removeClass('ui-dropdown');
		UIEvent.fireEvent('menuclick', this.element, $event.data, this._button);
	}
}