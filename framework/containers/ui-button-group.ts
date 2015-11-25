/**
 *    UI Container: Button Group
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: 'valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})

@autoinject()
@containerless()
@customElement('ui-button-group')
export class UIButtonGroup {
	private classes:string = '';
	private buttonGroup;
	private value;

	@bindable id:string = '';

	private size:string;
	private theme:string;
	private toggle:any       = false;
	private vertical:boolean = false;

	// TODO: Add disabled functionality

	constructor(public element:Element) {
		if (element.hasAttribute('toggle'))
			this.toggle = element.getAttribute('toggle') || 'single';
		this.vertical = element.hasAttribute('vertical');
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
		if (this.vertical !== false)
			this.classes += `ui-vertical `;
	}

	attached() {
		$(this.buttonGroup).data('UIButtonGroup', this);
		if (this.size) {
			$(this.buttonGroup).children('.ui-button')
				.removeClass('ui-button-normal')
				.addClass(`ui-button-${this.size}`);
		}
		if (this.toggle === false && this.theme) {
			$(this.buttonGroup).children('.ui-button')
				.removeClass('ui-button-default')
				.addClass(`ui-button-${this.theme}`);
		}
		if (this.toggle !== false) {
			$(this.buttonGroup).children('.ui-button')
				.removeClass('ui-button-default')
				.addClass(`ui-button-secondary ui-button-toggle`);
		}
		if (this.value !== null && this.toggle !== false)
			this.checkChange();
	}

	private valueChanged(newValue) {
		this.checkChange();
	}

	private clickHandler($event) {
		if (this.toggle !== false) {
			$event.cancelBubble = true;

			var el = $($event.target.closest('button'));
			if (this.toggle === 'multiple') {
				// TODO: add multiple check functionality
			}
			else {
				this.value = el.val();
			}
			UIEvent.fireEvent('change', this.element, this.value, el.get(0));
		}
	}

	private checkChange() {
		if (this.toggle === 'multiple') {
			// TODO: add multiple check functionality
		}
		else {
			$(this.buttonGroup).children('.ui-checked').removeClass('ui-checked');
			var el = $(this.buttonGroup).children(`[value='${this.value}']`);
			el.addClass('ui-checked');
		}
	}
}