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
	private classes:string = '';
	private iconEl;
	private button;
	private dropdown;

	@bindable value:string;
	@bindable icon:string;
	@bindable menu;

	private size:string     = "normal";
	private theme:string    = "default";
	private default:boolean = false;

	// TODO: Add disabled functionality and styles

	constructor(public element:Element) {
		this.default = element.hasAttribute('default');
		// check size attributes
		if (element.hasAttribute('large'))this.size = 'large';
		if (element.hasAttribute('small'))this.size = 'small';
		// check theme attributes
		if (element.hasAttribute('primary'))this.theme = 'primary';
		if (element.hasAttribute('secondary'))this.theme = 'secondary';
		if (element.hasAttribute('info'))this.theme = 'info';
		if (element.hasAttribute('danger'))this.theme = 'danger';
		if (element.hasAttribute('success'))this.theme = 'success';
		if (element.hasAttribute('warning'))this.theme = 'warning';
	}

	bind() {
		if (this.theme)
			this.classes += `ui-button-${this.theme} `;
		if (this.size)
			this.classes += `ui-button-${this.size} `;
		if (this.default !== false)
			this.classes += `ui-default `;
		if (this.icon) this.attachIcon();

		if (this.menu) {
			$(this.button).append('&nbsp;<i class="ui-caret"></i>');
		}
	}

	private attachIcon() {
		if (!this.iconEl) {
			this.iconEl = $(this.button).prepend('<i></i>').children('i');
		}
		this.iconEl.attr('class', '').addClass(this.icon);
	}

	private clicked($event) {
		if (this.menu) {
			$event.cancelBubble = true;
			$(this.button).toggleClass('ui-dropdown');
		}
		else {
			UIEvent.fireEvent('click', this.element);
		}
	}
}