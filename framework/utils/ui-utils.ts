/**
 *    UI Utils: Utility classes for external libraries
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import * as ld from "lodash";
import * as mm from "moment";
import * as nm from "numeral";
import {Lazy, Optional, BindingEngine} from "aurelia-framework";
import {Container} from "aurelia-dependency-injection";


export var _       = ld;
export var moment  = mm;
export var numeral = nm;

export module Utils {
	export var container:Container;

	export function lazy(T) {
		if (!container) return;
		return Lazy.of(T).get(container)();
	}

	export function getAscii(str) {
		var conversions   = new Object();
		conversions['ae'] = 'ä|æ|ǽ';
		conversions['oe'] = 'ö|œ';
		conversions['ue'] = 'ü';
		conversions['Ae'] = 'Ä';
		conversions['Ue'] = 'Ü';
		conversions['Oe'] = 'Ö';
		conversions['A']  = 'À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ';
		conversions['a']  = 'à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª';
		conversions['C']  = 'Ç|Ć|Ĉ|Ċ|Č';
		conversions['c']  = 'ç|ć|ĉ|ċ|č';
		conversions['D']  = 'Ð|Ď|Đ';
		conversions['d']  = 'ð|ď|đ';
		conversions['E']  = 'È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě';
		conversions['e']  = 'è|é|ê|ë|ē|ĕ|ė|ę|ě';
		conversions['G']  = 'Ĝ|Ğ|Ġ|Ģ';
		conversions['g']  = 'ĝ|ğ|ġ|ģ';
		conversions['H']  = 'Ĥ|Ħ';
		conversions['h']  = 'ĥ|ħ';
		conversions['I']  = 'Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ';
		conversions['i']  = 'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı';
		conversions['J']  = 'Ĵ';
		conversions['j']  = 'ĵ';
		conversions['K']  = 'Ķ';
		conversions['k']  = 'ķ';
		conversions['L']  = 'Ĺ|Ļ|Ľ|Ŀ|Ł';
		conversions['l']  = 'ĺ|ļ|ľ|ŀ|ł';
		conversions['N']  = 'Ñ|Ń|Ņ|Ň';
		conversions['n']  = 'ñ|ń|ņ|ň|ŉ';
		conversions['O']  = 'Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ';
		conversions['o']  = 'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º';
		conversions['R']  = 'Ŕ|Ŗ|Ř';
		conversions['r']  = 'ŕ|ŗ|ř';
		conversions['S']  = 'Ś|Ŝ|Ş|Š';
		conversions['s']  = 'ś|ŝ|ş|š|ſ';
		conversions['T']  = 'Ţ|Ť|Ŧ';
		conversions['t']  = 'ţ|ť|ŧ';
		conversions['U']  = 'Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ';
		conversions['u']  = 'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ';
		conversions['Y']  = 'Ý|Ÿ|Ŷ';
		conversions['y']  = 'ý|ÿ|ŷ';
		conversions['W']  = 'Ŵ';
		conversions['w']  = 'ŵ';
		conversions['Z']  = 'Ź|Ż|Ž';
		conversions['z']  = 'ź|ż|ž';
		conversions['AE'] = 'Æ|Ǽ';
		conversions['ss'] = 'ß';
		conversions['IJ'] = 'Ĳ';
		conversions['ij'] = 'ĳ';
		conversions['OE'] = 'Œ';
		conversions['f']  = 'ƒ';
		for (var i in conversions) {
			var re = new RegExp(conversions[i], "g");
			str    = str.replace(re, i);
		}
		return str;
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
		if (!moment(value || null).isValid()) return '';
		return moment(value).format(format);
	}

	export function dateISO(value:any) {
		if (!moment(value || null).isValid()) return null;
		return moment(value).toISOString();
	}

	export function dateGMT(value:any) {
		if (!moment(value || null).isValid()) return null;
		return moment(value).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	}

	export function dateOracle(value:any) {
		if (!moment(value || null).isValid()) return null;
		return moment(value).utc().format('DD-MMM-YYYY hh:mm:ss');
	}

	export function dateSql(value:any) {
		if (!moment(value || null).isValid()) return null;
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


export function watch(defaultValue?:any) {
	let observer:BindingEngine = Utils.lazy(BindingEngine);
	return function (viewModel, key) {
		if (!viewModel._subscriptions) viewModel._subscriptions = [];
		let v          = sessionStorage.getItem(`${viewModel.constructor.name}:${key}`);
		viewModel[key] = v || defaultValue;
		viewModel._subscriptions.push(observer.propertyObserver(viewModel, key)
			.subscribe(()=> {
				sessionStorage.setItem(`${viewModel.constructor.name}:${key}`, viewModel[key]);
			}));
		let _unbindHook  = viewModel.unbind;
		viewModel.unbind = (()=> {
			while (viewModel._subscriptions.length) {
				viewModel._subscriptions.pop().dispose();
			}
			if (_.isFunction(_unbindHook)) _unbindHook.call(viewModel);
		});
	}
}
