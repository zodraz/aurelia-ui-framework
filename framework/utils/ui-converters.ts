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

export class GroupValueConverter {
	toView(object:any, property:any) {
		return _.groupBy(object, property);
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

export class NumberValueConverter {
	toView(value:any, format?:string) {
		return Format.numberDisplay(value, format);
	}
}

export class CurrencyValueConverter {
	toView(value:any, format?:string, symbol?:string) {
		return Format.currencyDisplay(value, format, symbol);
	}
}

export class IsStringValueConverter {
	toView(value:any) {
		return _.isString(value);
	}
}

export class IsArrayValueConverter {
	toView(value:any) {
		return _.isArray(value);
	}
}

export class IsObjectValueConverter {
	toView(value:any) {
		return _.isObject(value);
	}
}
