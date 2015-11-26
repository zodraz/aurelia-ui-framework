/**
 *    UI Utils: Utility classes for external libraries
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import * as lodash from "lodash";
import * as moment from "moment";
import * as numeral from "numeral";

// Markdown
export module Markdown {
	export function toHTML(value:string):string {
		return marked(value, {sanitize: true, highlight: (v=>v)});
	}
}