/**
 *    UI Utils: Utility classes for binding converters
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {_, Format} from "./ui-utils";

export class KeysValueConverter {
	toView(object:any) {
		return Object.keys(object);
	}
}

export class SortValueConverter {
	toView(value:any, property:any) {
		return _.sortBy(value, property);
	}
}

export class MarkdownValueConverter {
	toView(value:string) {
		return Format.toHTML(value || '');
	}
}

export class DateValueConverter {
	toView(value:any, format?:string) {
		return Format.dateDisplay(value, format);
	}
}