declare module "aurelia-ui-framework" {
	import * as _ from "lodash";
	import * as moment from "moment";
	import * as numeral from "numeral";

	export var _:_.LoDashStatic;
	export var moment:moment.MomentStatic;
	export var numeral:numeral.Numeral;
}

/** CORE **/
declare module "aurelia-ui-framework" {
	import {ValidationGroup} from "aurelia-validation";
	import {Logger} from "aurelia-logging";

	export class UIDialog {
		close();
		focus();
		toast(config);
	}

	export class UIModel {
		logger:Logger;
		httpClient:UIHttpService;
		validation:ValidationGroup;
		observers:any;

		get(...rest);

		post(...rest);

		put(...rest);

		delete(...rest);

		deserialize(json:any);

		serialize():any;

		saveChanges();

		discardChanges();

		isDirty():boolean;

		dispose();
	}
	export class UITreeOptions {
		maxLevels:number;

		// show checkboxes
		showCheckbox:boolean;
		// show checkbox only at ? level, -1/null all levels
		checkboxLevel:number;

		showRoot:boolean;
		rootLabel:string;

		selectionLevel:number;

		constructor(obj?);
	}
	export class UIDialogService {
		show<UIDialog>(viewModel:UIDialog, model?:any);
	}

	export class UIForm {
		getForm():HTMLFormElement;
	}

	export class UILanguage {
		static LANGUAGES;
	}
}

/** UTILS **/
declare module "aurelia-ui-framework" {
	import {Container, PropertyObserver} from "aurelia-framework";
	import {Subscription} from "aurelia-event-aggregator";

	// Application State Class
	export class UIApplication {

		static defaults;

		IsHttpInUse:boolean;
		IsAuthenticated:boolean;
		SendAuthHeader:boolean;

		AppConfig:AppConfig;
		HttpConfig:HttpConfig;

		Username:string;
		UserGroup:string;
		UserGroupLabel:string;

		AuthUser:string;
		AuthToken:string;

		navigate(hash):void;

		navigateTo(route, params?):void;

		session(key, value?):any;

		clearSession():void;

		persist(key, value?):any;

		info(tag:string, msg:string, ...rest);

		warn(tag:string, msg:string, ...rest);

		debug(tag:string, msg:string, ...rest);

		error(tag:string, msg:string, ...rest);

		toast(config:any);

		toastError(config:any);

		toastSuccess(config:any);
	}

	export class AuthInterceptor {
	}

	export interface AppConfig {
		// App Key - Relative Path | URL
		Key:string;
		// App Title
		Title:string;
		// App Version
		Version:string;
	}
	export interface HttpConfig {
		BaseUrl:string;
		Headers:Map<string,string>;
		AuthorizationHeader:boolean;
	}

	export class UIHttpService {
		get(slug:string):Promise<any>;

		post(slug:string, body:any):Promise<any>;

		put(slug:string, body:any):Promise<any>;

		delete(slug:string):Promise<any>;

		upload(slug:string, form:HTMLFormElement):Promise<any>;

		reupload(slug:string, form:HTMLFormElement):Promise<any>;
	}

	// Utilities
	export module UIUtils {
		export function container(container:Container);

		export function lazy(T:any):any;

		export function compileView(markup:string, container:Element, vm?);

		export function showToast(container, config);

		export function getAscii(str):string;
	}
	// Event Utility
	export module UIEvent {
		export function fireEvent(event:string,
								  element:EventTarget,
								  data?:any):any;

		export function observe(object, property);

		export function broadcast(event, data?):PropertyObserver;

		export function subscribe(event, callback):Subscription;
	}
	// Formatter
	export module UIFormat {
		export function toHTML(md):string;

		// Dates
		export function date(dt:any, ft?:string):string;

		export function dateToISO(dt):string;

		export function dateToGMT(dt):string;

		export function fromNow(dt):string;

		// Numbers
		export function number(nm:any, fm?:string):string;

		export function currency(nm:any, sy?:string, fm?:string):string;

		export function percent(nm:any):string;
	}
}

// Global methods
declare var __seed;
declare var Constants;

declare function isTrue(b:any):boolean;
declare function isEmpty(a:any):boolean;
declare function isFunction(a:any):boolean;
declare function getParentByTag(element:Element, selector:string):HTMLElement;
declare function getParentByClass(element:Element, selector:string, lastElement?:string):HTMLElement;

declare function escape(v:string):string;
declare function unescape(v:string):string;

interface ICountry {
	continent:string;
	iso3:string;
	iso2:string;
	name:string;
	tld:string;
	currency:string;
	phone:number;
}

interface Window {
	isTrue;
	isEmpty;
	isFunction;
	getParentByTag;
	getParentByClass;

	__seed:number;
	Constants:any;
	FormData:any;

	countries:Array<ICountry>;
	currencies:Map<string,string>;

	escape;
	unescape;
}
interface Element {
	au:any;
}
declare module 'aurelia-validation' {
	export interface ValidationGroup {
		isPhone():any;
	}
}
