/**
 *    UI Utils: Utility classes for binding converters
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {Markdown} from "./ui-utils";

export class KeyValueConverter {
	toView(object:any) {
		return Object.keys(object);
	}
}

export class MarkdownValueConverter {
	toView(value:string) {
		return Markdown.toHTML(value || '');
	}
}