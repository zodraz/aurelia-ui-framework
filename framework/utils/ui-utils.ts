/**
 *    UI Utils: Utility classes for external libraries
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import * as ld from "lodash";
import * as mm from "moment";
import * as nm from "numeral";


export var _       = ld;
export var moment  = mm;
export var numeral = nm;

// Markdown
export module Markdown {
	export function toHTML(value:string):string {
		return marked(value, {sanitize: true, highlight: (v=>v)});
	}
}
