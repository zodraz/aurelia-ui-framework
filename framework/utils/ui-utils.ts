/**
 *    UI Utils      Utility classes
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import * as ld from "lodash";
import * as mm from "moment";
import * as nm from "numeral";
import {Lazy, Container} from "aurelia-framework";

export var _       = ld;
export var moment  = mm;
export var numeral = nm;

window.isTrue  = function (b:any):boolean {
	return (/^(true|yes|1|y|on)$/i).test(b);
};
window.isEmpty = function (a:any):boolean {
	if (typeof a === 'number') return false;
	return a === undefined || a === null || a === '' || Object.keys(a).length == 0 || a.length === 0;
};

window.seed = 1;
Object.defineProperties(window, {
	'seed': {
		writable  : true,
		enumerable: false
	}
});


export module UIUtils {
	var __container:Container;

	export function container(container:Container) {
		__container = container;
	}

	export function lazy(T):any {
		if (!__container) {
			throw new Error('UIUtils.Lazy::Container not set');
		}
		return Lazy.of(T)
				   .get(__container)();
	}

	export function getAscii(str):string {
		if (isEmpty(str)) return '';
		var conversions   = {};
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

	//export function getFloatPosition(
	//	anchor,
	//	floater,
	//	side:boolean = false) {
	//	let _f = $(floater), _a = $(anchor);
	//	_f.offset({left: -1000, top: -1000})
	//	  .css('max-height', side ? '480px' : '320px')
	//	  .css('visibility', 'visible');
	//	let o  = _a.offset(),
	//		aw = _a.outerWidth(),
	//		ah = _a.outerHeight(),
	//		fh = _f.outerHeight(),
	//		fw = _f.outerWidth(),
	//		pw = window.innerWidth,
	//		ph = window.innerHeight;
	//
	//	var _hr = false, _vr = false;
	//	var t   = o.top, l = o.left;
	//
	//	if (!side) {
	//		_f.css('min-width', aw);
	//		if (t + ah + fh > ph) {
	//			t -= fh;
	//			_vr = true;
	//		}
	//		else {
	//			t += ah;
	//		}
	//		if (l + fw > pw) {
	//			l -= (fw - aw);
	//		}
	//	}
	//	else {
	//		if (t + fh > ph) {
	//			t -= (fh - ah);
	//			_vr = true;
	//		}
	//		if (l + aw + fw > pw) {
	//			l -= fw;
	//			_hr = true;
	//		}
	//		else {
	//			l += aw;
	//		}
	//	}
	//	_f.css('max-height', '0')
	//	  .css('visibility', 'hidden');
	//	return {top: t, left: l, hReverse: _hr, vReverse: _vr}
	//}
}