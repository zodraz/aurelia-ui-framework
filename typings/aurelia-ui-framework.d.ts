declare module "aurelia-ui-framework" {
	import * as _ from "lodash";
	import * as moment from "moment";
	import * as numeral from "numeral";
	import {Logger} from "aurelia-logging";
	import {ValidationGroup} from "aurelia-validation";

	export var _:_.LoDashStatic;
	export var moment:moment.Moment;
	export var numeral:numeral.Numeral;

	export class UIValidation {}
	export class AuthInterceptor {}

	export class KeysValueConverter {}
	export class SortValueConverter {}
	export class DateValueConverter {}
	export class MarkdownValueConverter {}

	export class UIEvent {
		data:any;
		value:any;

		static fireEvent(event:string, element:EventTarget, data?:any, source?:Element);
	}

	export interface UIHttpService {
		get(slug:string);
		post(slug:string, obj:any);
		put(slug:string, obj:any);
		delete(slug:string);
	}

	export interface UIModel {
		logger:Logger;
		httpClient:UIHttpService;
		validation:ValidationGroup;
		get();
		post();
		put();
		delete();
	}

	export interface UIApplicationState {
		IsAuthenticated:boolean;
		IsHttpInUse:boolean;

		Username:string;
		PassToken:string;
		UserGroup:string;
		BaseUrl:string;

		navigateTo(route:string, params?:any);
	}

	export interface UITreeModel {
		id:any;
		name:string;
		level:number;

		iconGlyph:string;

		root:boolean;
		leaf:boolean;
		active:boolean;
		expanded:boolean;

		children:Array<UITreeModel>;

		// 0=false, 1=true, 2=partial
		checked:number;

		parent:UITreeModel;

		isvisible:boolean;
	}

	export interface UITreeOptionsModel {
		// show maximum of ? levels
		maxLevels?:number;

		// show checkboxes
		showCheckbox?:boolean;
		// show checkbox only at ? level, -1/null all levels
		checkboxLevel?:number;

		showRoot?:boolean;
		rootLabel?:string;

		selectionLevel?:number;
	}

	export interface UITreePanel {
		select(id:any, level:number);
		expand(id:any, level:number, expand:boolean);
		check(id:any, level:number, check:boolean);
	}


	export interface Utils {
		lazy(T, container);
	}

	// Format
	export interface Format {
		toHTML(value:string):string;
		// Dates
		dateDisplay(value:any, format?:string);

		dateISO(value:any);
		dateOracle(value:any);
		dateSql(value:any);
		fromNow(value:any):string ;

		// Numbers
		numberDisplay(value:any, format?:string, symbol?:string);
		exRate(value);
	}
}