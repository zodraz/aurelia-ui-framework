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
import {Container} from "aurelia-dependency-injection";


export var _       = ld;
export var moment  = mm;
export var numeral = nm;

export module Utils {
	let _c = new Container();

	export function lazy(T) {
		return Lazy.of(T).get(_c)();
	}

	export function getFloatPosition(anchor, floater, side:boolean = false) {
		let _f = $(floater), _a = $(anchor);
		_f.offset({left: -1000, top: -1000})
			.css('max-height', side ? '480px' : '320px')
			.css('visibility', 'visible');
		let o  = _a.offset(),
			aw = _a.outerWidth(),
			ah = _a.outerHeight(),
			fh = _f.outerHeight(),
			fw = _f.outerWidth(),
			pw = window.innerWidth,
			ph = window.innerHeight;

		var _hr = false, _vr = false;
		var t   = o.top, l = o.left;

		if (!side) {
			_f.css('min-width', aw);
			if (t + ah + fh > ph) {
				t -= fh;
				_vr = true;
			}
			else {
				t += ah;
			}
			if (l + fw > pw) {
				l -= (fw - aw);
			}
		}
		else {
			if (t + fh > ph) {
				t -= (fh - ah);
				_vr = true;
			}
			if (l + aw + fw > pw) {
				l -= fw;
				_hr = true;
			}
			else {
				l += aw;
			}
		}
		_f.css('max-height', '0').css('visibility', 'hidden');
		return {top: t, left: l, hReverse: _hr, vReverse: _vr}
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
	export function numberDisplay(value:any, format:string = '0[.]00') {
		if (isNaN(parseFloat(value))) return value;
		return numeral(value)
			.format(format)
			.replace(/[^\d]+/g, function (txt) {
				return `<small>${txt.toUpperCase()}</small>`;
			});
	}

	export function currencyDisplay(value:any, format:string = '$ 0[.]00', symbol:string = '$') {
		if (isNaN(parseFloat(value))) return value;
		return numeral(value)
			.format(format)
			.replace('$', symbol)
			.replace(/[^\d]+/g, function (txt) {
				return `<small>${txt.toUpperCase()}</small>`;
			});
	}

	export function exRate(value):string {
		if (isNaN(parseFloat(value))) return ' ';
		if (parseFloat(value || 0) <= 0) return ' ';
		return numberDisplay(1 / parseFloat(value), '0.0000a') + '/$';
	}
}
