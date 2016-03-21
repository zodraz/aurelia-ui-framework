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
	private _optionInput;
	private _clear:boolean       = false;
	private _focus:boolean       = false;
	private _noLabel:boolean     = false;
	private _checkbox:boolean    = false;
	private _multiple:boolean    = false;
	private _classes:string      = '';
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	private dt        = '';
	private value:any = '';
	private checked   = false;
	private minDate   = null;
	private maxDate   = null;
	private range     = false;
	private inline    = false;

	private _valueStart;
	private _valueEnd;

	@bindable format:string      = 'DD/MM/YYYY';
	@bindable id:string          = '';
	@bindable helpText:string    = '';
	@bindable addonText:string   = '';
	@bindable buttonIcon:string  = '';
	@bindable buttonText:string  = '';
	@bindable placeholder:string = '';
	@bindable options:DPOptions  = {};
	@bindable disabled           = false;


	constructor(public element:Element) {
		this._id = `date-${UIInput._id++}`;
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
		if (element.hasAttribute('checkbox')) this._checkbox = true;
		if (element.hasAttribute('label-top')) this._classes = 'ui-label-top';

		this.dt = moment().format('DD');
	}

	bind() {
		if (this.element.hasAttribute('disabled')) this.disabled = true;
	}

	attached() {
		if (this.inline && (this._inputStart = this._inputInline)) $(this._date).parent().remove();
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
			if (this.value && this.value.start && this.value.end) {
				optStart.date = moment(this.value.start);
				optEnd.date   = moment(this.value.end);

				optStart.maxDate = optEnd.date;
				optEnd.minDate   = optStart.date;
			}
			this._initPicker(this._inputStart, optStart, true);
			this._initPicker(this._inputEnd, optEnd, false);
		}
		else {
			if (this.minDate) opts.minDate = moment(this.minDate);
			if (this.maxDate) opts.maxDate = moment(this.maxDate);
			if (this.value) opts.date = moment(this.value);
			this._initPicker(this._inputStart, opts);
		}
		if (this._checkbox) {
			this._checkedChanged(this.checked === true);
		}
	}

	private _initPicker(el, options, primary?) {
		$(el).datetimepicker(options)
			.on('dp.change', (e)=> {
				if (this.range) {
					if (primary) {
						this.value.start = e.date.toISOString();
						$(this._inputEnd).data('DateTimePicker').minDate(e.date);
					}
					if (!primary) {
						this.value.end = e.date.toISOString();
						$(this._inputStart).data('DateTimePicker').maxDate(e.date);
					}
				}
				else {
					this.value = e.date.toISOString();
				}
			});
	}

	disabledChanged(newValue) {
		this.disabled = newValue === 'true' || newValue === true;
		this.makeBusy(newValue);
	}

	makeBusy(isBusy) {
		$(this._inputStart)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
		if (this._inputEnd) {
			$(this._inputEnd)
				.removeAttr('D')
				.removeAttr('disabled')
				.attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
		}
		$(this._optionInput)
			.removeAttr('D')
			.removeAttr('disabled')
			.attr(isBusy === true || this.disabled === true ? 'disabled' : 'D', '');
	}

	private _valueChanged(newValue) {
		if ($(this._inputStart).data('DateTimePicker')) {
			if (this.range) {
				$(this._inputStart).data('DateTimePicker').date(newValue.start || null);
				$(this._inputEnd).data('DateTimePicker').date(newValue.end || null);
			} else if (!this.range) {
				$(this._inputStart).data('DateTimePicker').date(newValue || null);
			}
		}
	}

	private _checkedChanged(newValue) {
		if (this._checkbox) {
			$(this._inputStart)
				.removeAttr('D')
				.removeAttr('disabled')
				.attr(newValue === false ? 'disabled' : 'D', '');
			if (this._inputEnd) {
				$(this._inputEnd)
					.removeAttr('D')
					.removeAttr('disabled')
					.attr(newValue === false ? 'disabled' : 'D', '');
			}
		}
	}
}
