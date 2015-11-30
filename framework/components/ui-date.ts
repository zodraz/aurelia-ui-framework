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
import {UIInput} from "./ui-input";

/**
 * @bindable value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: '_valueChanged',
	defaultBindingMode: bindingMode.twoWay
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
	name: 'minDate',
	attribute: 'date-min',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: null
})
@bindable({
	name: 'maxDate',
	attribute: 'date-max',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: null
})

@autoinject()
@customElement('ui-date')
export class UIDate {
	private _id;
	private _date;
	private _inputStart;
	private _inputEnd;
	private _inputInline;
	private _clear:boolean       = false;
	private _noLabel:boolean     = false;
	private _checkbox:boolean    = false;
	private _multiple:boolean    = false;
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	private dt        = '';
	private value:any = '';
	private checked   = false;
	private minDate   = null;
	private maxDate   = null;

	private _valueStart;
	private _valueEnd;

	@bindable format:string      = 'DD/MM/YYYY';
	@bindable id:string          = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable options:DPOptions  = {};
	@bindable range:boolean      = false;
	@bindable inline:boolean     = false;
	@bindable disabled:boolean   = false;


	constructor(public element:Element) {
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('nolabel')) this._noLabel = true;
		if (element.hasAttribute('clear')) this._clear = true;
		if (element.hasAttribute('range')) {
			this.range  = true;
			this.inline = false;
			this.format = 'DD/MM/YYYY';
		}
		else if (element.hasAttribute('inline')) {
			this.inline   = true;
			this._noLabel = true;
			this.range    = false;
		}
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('checkbox')) this._checkbox = true;

		this.dt = moment().format('DD');
	}

	attached() {
		this._id = `date-${UIInput._id++}`;
		if (this.inline && (this._inputStart = this._inputInline)) $(this._date).remove();
		else $(this._inputInline).remove();

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

		if (this.range) {
			let optStart:any = _.merge({}, opts);
			let optEnd:any   = _.merge({}, opts);
			if (this.minDate) optStart.minDate = moment(this.minDate);
			if (this.maxDate) optStart.maxDate = moment(this.maxDate);
			if (this.minDate) optEnd.minDate = moment(this.minDate);
			if (this.maxDate) optEnd.maxDate = moment(this.maxDate);
			this._initPicker(this._inputStart, optStart, true);
			this._initPicker(this._inputEnd, optEnd, false);
		}
		else {
			if (this.minDate) opts.minDate = moment(this.minDate);
			if (this.maxDate) opts.maxDate = moment(this.maxDate);
			this._initPicker(this._inputStart, opts);
		}
		if (this.range && this.value && this.value.start !== null && this.value.end !== null) {
			$(this._inputStart).data('DateTimePicker').date(this.value.start);
			$(this._inputEnd).data('DateTimePicker').date(this.value.end);
		} else if (!this.range && this.value) {
			$(this._inputStart).data('DateTimePicker').date(this.value);
		}
	}

	private _initPicker(el, options, primary?) {
		$(el).datetimepicker(options)
			.on('dp.change', (e)=> {
				if (this.range) {
					if (primary) {
						this.value.start = e.date;
						$(this._inputEnd).data('DateTimePicker').minDate(e.date);
						$(this._inputEnd).focus();
					}
					if (!primary) {
						this.value.end = e.date;
						$(this._inputStart).data('DateTimePicker').maxDate(e.date);
					}
				}
				else {
					this.value = e.date;
				}
			});
	}

	disabledChanged(newValue) {
		$(this._inputStart)
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
		if (this._inputEnd) {
			$(this._inputEnd)
				.removeAttr('disabled')
				.attr(newValue !== false ? 'disabled' : 'D', '');
		}
	}

	rangeChanged(newValue) {
		this.range = newValue !== false;
	}

	inlineChanged(newValue) {
		this.inline = newValue !== false;
		if (this.inline) this._labelClasses += ' ui-hide ';
	}


	private _valueChanged(newValue) {
		if ($(this._inputStart).data('DateTimePicker')) {
			if (this.range && newValue && newValue.start && newValue.end) {
				if (!newValue) newValue = {start: moment(), end: moment()};
				$(this._inputStart).data('DateTimePicker').date(newValue.start);
				$(this._inputEnd).data('DateTimePicker').date(newValue.end);
			} else if (newValue) {
				$(this._inputStart).data('DateTimePicker').date(newValue);
			}
		}
	}

	private _checkedChanged(newValue) {

	}
}
