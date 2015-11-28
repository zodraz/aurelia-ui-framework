/**
 *    UI Component: Date
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {moment, _} from "../utils/ui-utils";
import DPOptions = DatetimePicker.DPOptions;

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

@bindable({
	name: 'data-min',
	attribute: 'minDate',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: null
})
@bindable({
	name: 'data-max',
	attribute: 'maxDate',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: null
})

@autoinject()
@containerless()
@customElement('ui-date')
export class UIDate {
	private _date;
	private _input;
	private _inputinline;
	private _clear:boolean       = false;
	private _checkbox:boolean    = false;
	private _multiple:boolean    = false;
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	private dt      = '';
	private value   = '';
	private checked = false;
	private minDate = null;
	private maxDate = null;

	@bindable format:string      = 'DD/MM/YYYY';
	@bindable id:string          = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable options:DPOptions  = {};
	@bindable inline:boolean     = false;
	@bindable disabled:boolean   = false;


	constructor(public element:Element) {
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('clear')) this._clear = true;
		if (element.hasAttribute('inline')) this.inline = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;

		this.dt = moment().format('DD');
	}

	attached() {
		if (this.inline && (this._input = this._inputinline)) $(this._date).remove();
		else $(this._inputinline).remove();

		var opts:any = _.merge(this.options, {
			useCurrent: false,
			collapse: false,
			keepOpen: false,
			showTodayButton: true,
			inline: this.inline,
			format: this.format,
			ignoreReadonly: true,
			icons: {
				previous: 'ui-font-big fi-elegant-arrow85',
				next: 'ui-font-big fi-elegant-mini7',
				up: 'ui-font-large fi-elegant-little16',
				down: 'ui-font-large fi-elegant-little9'
			}
		});
		if(this.minDate) opts.minDate = moment(this.minDate);
		if(this.maxDate) opts.maxDate = moment(this.maxDate);

		$(this._input).datetimepicker(opts);
	}

	disabledChanged(newValue) {
		this._input
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
	}

	inlineChanged(newValue) {
		this.inline = newValue !== false;
		if (this.inline) this._labelClasses += ' ui-hide ';
	}


	private _valueChanged(newValue) {

	}

	private _checkedChanged(newValue) {

	}
}
