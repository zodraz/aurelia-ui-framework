declare module "aurelia-ui-framework" {
	import * as _ from "lodash";
	import * as moment from "moment";
	import * as numeral from "numeral";
	import {Logger} from "aurelia-logging";
	import {ValidationGroup} from "aurelia-validation";

	export var _:_.LoDashStatic;
	export var moment:moment.MomentStatic;
	export var numeral:numeral.Numeral;

	export function watch();
	export function observe(callback?:Function);

	export class UIValidation {}
	export class AuthInterceptor {}
	export class KeysValueConverter {}
	export class SortValueConverter {}
	export class DateValueConverter {}
	export class NumberValueConverter {}
	export class CurrencyValueConverter {}
	export class MarkdownValueConverter {}

	export class UILangSelect {
		static LANGUAGES;
	}

	export class UIEvent {
		data:any;
		value:any;

		static fireEvent(event:string, element:EventTarget, data?:any, source?:Element);

		static broadcast(evt:string, data?:any);

		static subscribe(evt:string, fn:any):any;
	}

	export class UIHttpService {
		get(slug:string);

		post(slug:string, obj:any);

		put(slug:string, obj:any);

		delete(slug:string);
	}

	export class UIDialogService {
		show(dialog:any, model?:any):Promise<any>;
	}

	export class UIDwrService {
		execute(method:string, params:Array<any>, inject?:boolean):Promise<ResponseHandler>;
	}

	export interface ResponseHandler {
		data:any;
		secondaryData:any;
		thirdData:any;
		fourthData:any;
		fifthData:any;

		exitCode:number;
		error:string;
	}

	export class UIModel {
		logger:Logger;
		httpClient:UIHttpService;
		validation:ValidationGroup;

		get();

		post();

		put();

		delete();

		deserialize(json:any);

		serialize():any;

		discardChanges();

		isDirty():boolean;

		dispose();
	}

	export class UIApplicationState {
		IsAuthenticated:boolean;
		IsHttpInUse:boolean;

		// Application Settings
		public AppKey:string;
		public Version:string;
		public StartYear:string;
		public Copyright:string;

		public Username:string;

		// Api Connections
		public BaseUrl:string;
		public AuthUser:string;
		public AuthToken:string;
		public AllowAuthHeader:boolean;

		// Mosaic/Voila
		public IpAddress:string;
		public AppSource:number;
		public UserGroup:string;

		_current;
		router;

		navigateTo(route:string, params?:any);

		get(key:string):any;

		set(key:string, value:any):any;

		// Notifications
		notifyError(msg);

		notifyPageError(msg);

		notifyConfirm(msg):Promise<boolean>;

		// Local Storage
		getLocal(key:string):string;

		saveLocal(key:string, value?:string);

		// Session Storage
		getState(key:string):string;

		saveState(key:string, value?:string);
	}

	export class UITreeModel {
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
		getChecked():any;
	}


	export module Utils {
		export function lazy(T, container);
	}

	// Format
	export module Format {
		export function toHTML(value:string):string;

		// Dates
		export function dateDisplay(value:any, format?:string);

		export function dateISO(value:any);

		export function dateOracle(value:any);

		export function dateSql(value:any);

		export function fromNow(value:any):string ;

		// Numbers
		export function numberDisplay(value:any, format?:string);

		export function currencyDisplay(value:any, format?:string, symbol?:string);

		export function exRate(value);
	}
}