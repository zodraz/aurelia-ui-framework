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
	private _optionInput;
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
	@bindable helpText:string   = '';
	@bindable addonIcon:string  = '';
	@bindable addonText:string  = '';
	@bindable addonClass:string = '';
	@bindable buttonIcon:string = '';
	@bindable buttonText:string = '';
	@bindable readonly:boolean  = false;
	@bindable disabled:boolean  = false;
	@bindable options           = [];

	constructor(public element:Element) {
		this._id = `list-${UIInput._id++}`;
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('clear')) this._clear = true;
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('multiple')) this._multiple = true;
	}

	bind() {
		if (this.value) {
			this._valueChanged(this.value);
		}
	}

	attached() {
		$(this._select)
			.html(this._getListItems())
			.find(`li[value="${this.value}"]`).addClass('active');
		$(this._options).remove();
		if (this._checkbox) {
			this._checkedChanged(this.checked === true);
		}
	}

	optionsChanged(newValue) {
		setTimeout(()=> {
			$(this._input).find('option').addClass('ui-list-option');
			$(this._input).find('optgroup').addClass('ui-list-group');
			var html = $(this._input).html()
				.replace(/<optgroup/gi, '<li')
				.replace(/optgroup>/gi, 'li>')
				.replace(/<option/gi, '<li')
				.replace(/option>/gi, 'li>');
			$(this._select)
				.html(html)
				.find(`li[value="${this.value}"]`).addClass('active');
		}, 500);
	}

	disabledChanged(newValue) {
		this.disabled = newValue === 'true' || newValue === true;
		this.makeBusy(newValue);
	}

	readonlyChanged(newValue) {
		$(this._select)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue === true ? 'readonly' : 'R', '');
		$(this._input)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue === true ? 'readonly' : 'R', '');
		$(this._optionInput)
			.removeAttr('R')
			.removeAttr('readonly')
			.attr(newValue === true ? 'readonly' : 'R', '');
	}

	makeBusy(isBusy) {
		if (!this._select) return;
		$(this._select)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
		$(this._input)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
		$(this._optionInput)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true ? 'disabled' : 'D', '');
	}

	private _checkedChanged(newValue) {
		if (this._checkbox) {
			$(this._input)
				.removeAttr('D')
				.removeAttr('disabled')
				.attr(newValue === false ? 'disabled' : 'D', '');
			$(this._select)
				.removeAttr('D')
				.removeAttr('disabled')
				.attr(newValue === false ? 'disabled' : 'D', '');
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
		if (this.disabled === true || (this._checkbox && !this.checked))return false;
		if ($event.type == 'click') {
			this._input.focus();
			this.value = $($event.target).closest('li').attr('value');
		}
		if ($event.type == 'change') {
			this.value = $($event.target).val();
		}
	}
}
