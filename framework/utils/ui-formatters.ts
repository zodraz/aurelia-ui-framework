/**
 *    UI Utils      Formatters
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {_, moment, numeral} from "aurelia-ui-framework";

export module UIFormat {
	export function toHTML(md) {
		return marked(md);
	}

	// Dates
	export function date(dt:any, ft:string = 'DD MMM YYYY hh:mm A') {
		let x;
		return dt === null || !(x = moment(dt)).isValid() ? null : x.format(ft);
	}

	export function dateToISO(dt) {
		let x;
		return dt === null || !(x = moment(dt)).isValid() ? null : x.toISOString();
	}

	export function dateToGMT(dt) {
		return UIFormat.date(dt, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	}

	export function fromNow(dt:any):string {
		let x;
		return dt === null || !(x = moment(dt)).isValid() ? '' : x.fromNow(false);
	}

	// Numbers
	export function number(nm:any, fm:string = '0[.]00'):string {
		return nm === null || isNaN(nm) ? '' :
			numeral(nm)
				.format(fm)
				.replace(/[^\d\.]+/g, (txt)=> {
					return `<small>${txt.toUpperCase()}</small>`;
				});
	}

	export function currency(nm:any, sy:string = '$', fm:string = '$ 0[.]00'):string {
		return nm === null || isNaN(nm) ? '' :
			numeral(nm)
				.format(fm)
				.replace('$', sy)
				.replace(/[^\d\.]+/g, (txt)=> {
					return `<small>${txt.toUpperCase()}</small>`;
				});
	}

	export function percent(nm:any, fm:string = '0.00 %'):string {
		return nm === null || isNaN(nm) ? '' :
			numeral(nm > 1 ? nm / 100 : nm)
				.format(fm)
				.replace(/[^\d\.%]+/g, (txt)=> {
					return `<small>${txt.toUpperCase()}</small>`;
				});
	}
}