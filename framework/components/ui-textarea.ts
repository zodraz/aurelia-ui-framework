/**
 *    UI Component: TextArea
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {_} from "../utils/ui-utils";

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

@autoinject()
@customElement('ui-textarea')
export class UITextArea {
	static _id = 0;

	private _id;
	private _input;
	private _inputGroup;
	private _focus:boolean       = false;
	private _noLabel:boolean     = false;
	private _checkbox:boolean    = false;
	private _classes:string      = '';
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	// binding privates
	private value:string    = '';
	private checked:boolean = false;

	@bindable id:string          = '';
	@bindable dir:string         = '';
	@bindable helpText:string    = '';
	@bindable addonIcon:string   = '';
	@bindable addonText:string   = '';
	@bindable addonClass:string  = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable readonly:boolean   = false;
	@bindable disabled:boolean   = false;
	@bindable autoComplete       = null;

	constructor(public element:Element) {
		this._id = `textarea-${UITextArea._id++}`;
		if (element.hasAttribute('clear')) this._inputClasses += ' ui-clear ';
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('readonly')) this.readonly = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('label-top')) this._classes = 'ui-label-top';
	}

	bind() {
		if (this._checkbox) {
			this.disabled = this.checked !== true;
		}
	}

	attached() {
		this._input = $(this._inputGroup).find('.ui-input');
		this._input
			[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
			.attr(this.readonly !== false ? 'readonly' : 'R', '')
			.attr(this.disabled !== false ? 'disabled' : 'D', '')
			.on('input', (e)=> {
				if (!this.readonly && !this.disabled) {
					var el = $(e.target);
					el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
				}
			})
			.on('mousemove', (e)=> {
				if ($(e.target).hasClass('x'))
					$(e.target)[(e.target.offsetWidth - 18 < e.clientX - e.target.getBoundingClientRect().left) ? 'addClass' : 'removeClass']('onX');
			})
			.on('touchstart mousedown', (e)=> {
				if (e.button == 0 && $(e.target).hasClass('onX')) {
					e.preventDefault();
					e.cancelBubble = true;
					$(e.target).removeClass('x onX').val('').trigger('change');
				}
			})
			.on('change', e=> {
				this.value = this._input.val();
			});

		if (this.autoComplete) {
			this.autoCompleteChanged(this.autoComplete);
		}
	}

	autoCompleteChanged(newValue) {
		if (_.isString(newValue)) newValue = newValue.split(',');
		let self = this;
		this._input.textcomplete([{
			words: newValue,
			match: /\b(\w{1,})$/,
			search: (term, callback)=> {
				callback(_.filter(this.autoComplete as Array<string>, (word)=> {
					return eval(`/${term}/gi`).test(word);
				}));
			},
			index: 1,
			replace: (word)=> {
				if (/\-$/.test(word)) return word;
				if (word == 'and') return '&& ';
				if (word == 'or') return '|| ';
				if (word == 'not') return '!';
				return word + ' ';
			}
		}], {zIndex: 500000, maxCount: 20, debounce: 200});
	}

	disabledChanged(newValue) {
		if (!this._input) return;
		this._input
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(newValue !== false || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
	}

	readonlyChanged(newValue) {
		if (!this._input) return;
		this._input
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
		$(this._inputGroup).find('input.ui-primary')[this.value !== '' ? 'addClass' : 'removeClass']('x');
	}

	private _buttonClick($event) {
		$event.cancelBubble = true;
		UIEvent.fireEvent('click', this.element, this, this._input);
	}
}