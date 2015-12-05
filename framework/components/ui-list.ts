/**
 *    UI Component: Chosen
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {UIInput} from "./ui-input";

/**
 * @bindable value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: '_valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})
/**
 * @bindable checked
 */
@bindable({
	name: 'checked',
	attribute: 'checked',
	changeHandler: '_checkedChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: false
})

// TODO: add support for multi select

@autoinject()
@customElement('ui-list')
export class UIList {
	private _id;
	private _list;
	private _input;
	private _select;
	private _options;
	private _clear:boolean       = false;
	private _focus:boolean       = false;
	private _noLabel:boolean     = false;
	private _checkbox:boolean    = false;
	private _multiple:boolean    = false;
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	// binding privates
	private value:string    = '';
	private checked:boolean = false;

	@bindable id:string         = '';
	@bindable label:string      = '';
	@bindable addonIcon:string  = '';
	@bindable addonText:string  = '';
	@bindable addonClass:string = '';
	@bindable buttonIcon:string = '';
	@bindable buttonText:string = '';
	@bindable readonly:boolean  = false;
	@bindable disabled:boolean  = false;

	constructor(public element:Element) {
		this._id = `list-${UIInput._id++}`;
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('clear')) this._clear = true;
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('readonly')) this.readonly = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('multiple')) this._multiple = true;
	}

	bind() {
		if (this.value) {
			this._valueChanged(this.value);
		}
		if (this._checkbox) {
			this.disabled = this.checked !== true;
		}
	}

	attached() {
		$(this.element).data('UIList', this)
		$(this._select)
			.html(this._getListItems())
			.find(`li[value="${this.value}"]`).addClass('active');
		$(this._options).remove();
	}

	disabledChanged(newValue) {
		$(this._select)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
	}

	readonlyChanged(newValue) {
		$(this._select)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue !== false ? 'readonly' : 'R', '');
	}

	private _checkedChanged(newValue) {
		if (this._checkbox) {
			this.disabled = newValue !== true;
		}
	}

	private _valueChanged(newValue) {
		if (this._multiple) newValue = (newValue || '').split(',');
		setTimeout(() => {
			if (newValue && newValue != '') {
				$(this._select).find('.ui-active').removeClass('ui-active');
				var s, t = (s = $(this._select))
					.find(`li[value="${newValue}"]`)
					.addClass('ui-active')
					.offset().top;
				t -= s.offset().top - s.scrollTop();
				if (t > s.height() + s.scrollTop())s.scrollTop(t - 30);
				else if (t - 30 < s.scrollTop())s.scrollTop(t - 30);
			}
		}, 100);
	}

	private _buttonClick($event) {
		$event.cancelBubble = true;
		UIEvent.fireEvent('click', this.element, this, this._input);
	}

	private _getListItems() {
		$(this._input).html($(this._options).html());
		$(this._options).find('option').addClass('ui-list-option');
		$(this._options).find('optgroup').addClass('ui-list-group');
		var html = $(this._options).html();
		return html
			.replace(/<optgroup/gi, '<li')
			.replace(/optgroup>/gi, 'li>')
			.replace(/<option/gi, '<li')
			.replace(/option>/gi, 'li>');
	}

	_changeSelection($event) {
		if ($event.type == 'click') {
			this._input.focus();
			this.value = $($event.target).closest('li').attr('value');
		}
		if ($event.type == 'change') {
			this.value = $($event.target).val();
		}
	}
}
