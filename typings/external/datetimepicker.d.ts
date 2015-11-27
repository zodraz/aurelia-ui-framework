// Type definitions for Bootstrap datetimepicker v3 
// Project: http://eonasdan.github.io/bootstrap-datetimepicker
// Definitions by: Jesica N. Fera <https://github.com/bayitajesi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * bootstrap-datetimepicker.js 3.0.0 Copyright (c) 2014 Jonathan Peterson
 * Available via the MIT license.
 * see: http://eonasdan.github.io/bootstrap-datetimepicker or https://github.com/Eonasdan/bootstrap-datetimepicker for details.
 */

	/// <reference path="jquery.d.ts"/>
	/// <reference path="moment.d.ts"/>

declare module DatetimePicker {
	interface DPChangeEventObject extends JQueryEventObject {
		date: any;
		oldDate: any;
	}

	interface DPEventObject extends JQueryEventObject {
		date: any;
	}

	interface DPIcons {
		time?:string;
		date?:string;
		up?:string;
		down?:string;
		previous?:string;
		next?:string;
		today?:string;
		clear?:string;
		close?:string;
	}

	interface DPOptions {
		format?: string | boolean;
		dayViewHeaderFormat?: string;
		extraFormats?: string;
		stepping?: number;
		minDate?:Date | moment.Moment | string;
		maxDate?:Date | moment.Moment | string;
		useCurrent?:boolean;
		collapse?:boolean;
		locale?: string;
		defaultDate?:Date | moment.Moment | string;
		disabledDates?: Array<Date | moment.Moment | string>;
		enabledDates?: Array<Date | moment.Moment | string>;
		icons?: DPIcons;
		useStrict?:boolean;
		sideBySide?:boolean;
		daysOfWeekDisabled?:Array<number>;
		calendarWeeks?:boolean;
		viewMode?:string;
		toolbarPlacement?:string;
		showTodayButton?:boolean;
		showClear?:boolean;
		showClose?:boolean;
		keepOpen?:boolean;
		inline?:boolean;
		keepInvalid?:boolean;
		ignoreReadonly?:boolean;
		disabledTimeIntervals?:boolean;
		allowInputToggle?:boolean;
		focusOnShow?:boolean;
		enabledHours?:any;
		disabledHours?:any;
		viewDate?:any;
		tooltips?:any;
	}

	interface DPDatePicker {
		setDate(date:any): void;
		setMinDate(date:any): void;
		setMaxDate(date:any): void;
		show(): void;
		disable(): void;
		enable(): void;
		getDate(): void;
	}

}


interface JQuery {

	datetimepicker(): JQuery;
	datetimepicker(options:DatetimePicker.DPOptions): JQuery;

	off(events:"dp.change", selector?:string, handler?:(eventobject:DatetimePicker.DPChangeEventObject) => any): JQuery;
	off(events:"dp.change", handler:(eventobject:DatetimePicker.DPChangeEventObject) => any): JQuery;

	on(events:"dp.change", selector:string, data:any, handler?:(eventobject:DatetimePicker.DPChangeEventObject) => any): JQuery;
	on(events:"dp.change", selector:string, handler:(eventobject:DatetimePicker.DPChangeEventObject) => any): JQuery;
	on(events:'dp.change', handler:(eventObject:DatetimePicker.DPChangeEventObject) => any): JQuery;

	off(events:"dp.show", selector?:string, handler?:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	off(events:"dp.show", handler:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;

	on(events:"dp.show", selector:string, data:any, handler?:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	on(events:"dp.show", selector:string, handler:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	on(events:'dp.show', handler:(eventObject:DatetimePicker.DPEventObject) => any): JQuery;

	off(events:"dp.hide", selector?:string, handler?:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	off(events:"dp.hide", handler:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;

	on(events:"dp.hide", selector:string, data:any, handler?:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	on(events:"dp.hide", selector:string, handler:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	on(events:'dp.hide', handler:(eventObject:DatetimePicker.DPEventObject) => any): JQuery;

	off(events:"dp.error", selector?:string, handler?:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	off(events:"dp.error", handler:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;

	on(events:"dp.error", selector:string, data:any, handler?:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	on(events:"dp.error", selector:string, handler:(eventobject:DatetimePicker.DPEventObject) => any): JQuery;
	on(events:'dp.error', handler:(eventObject:DatetimePicker.DPEventObject) => any): JQuery;

	data(key:'DateTimePicker'): DatetimePicker.DPDatePicker;
}
