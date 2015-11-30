/**
 *    UI Utils: Utility classes for external libraries
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import * as ld from "lodash";
import * as mm from "moment";
import * as nm from "numeral";
import {Lazy} from "aurelia-framework";


export var _       = ld;
export var moment  = mm;
export var numeral = nm;

export module Utils {
	export function lazy(T, container) {
		return Lazy.of(T).get(container);
	}
}

// Format
export module Format {
	export function toHTML(value:string):string {
		return marked(value, {sanitize: true, highlight: (v=>v)});
	}

	// Dates
	export function dateDisplay(value:any, format:string = 'DD MMM YYYY hh:mm A') {
		if (!moment(value).isValid()) return '';
		return moment(value).format(format);
	}

	export function dateISO(value:any) {
		if (!moment(value).isValid()) return null;
		return moment(value).utc().toISOString();
	}

	export function dateOracle(value:any) {
		if (!moment(value).isValid()) return null;
		return moment(value).utc().format('DD-MMM-YYYY hh:mm:ss');
	}

	export function dateSql(value:any) {
		if (!moment(value).isValid()) return null;
		return moment(value).utc().format('YYYY-MM-DD hh:mm:ss');
	}

	export function fromNow(value:any):string {
		return moment(value).fromNow(false);
	}


	// Numbers
	export function numberDisplay(value:any, format:string = '$ 0[.]00', symbol:string = '') {
		return numeral(value)
			.format(format)
			.replace('$', symbol)
			.replace(/[^\d]+/g, function (txt) {
				return `<small>${txt.toUpperCase()}</small>`;
			});
	}

	export function exRate(value):string {
		if (parseFloat(value || 0) <= 0) return ' ';
		return numberDisplay(1 / parseFloat(value), '0.0000a') + '/$';
	}
}
