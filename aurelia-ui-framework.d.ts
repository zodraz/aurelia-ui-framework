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

		AppConfig:UIAppConfig;
		HttpConfig:UIHttpConfig;

		Username:string;
		UserGroup:string;

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
	}

	export interface UIAppConfig {
		// App Key - Relative Path | URL
		Key:string;
		// App Title
		Title:string;
		// App Version
		Version:string;
	}
	export interface UIHttpConfig {
		BaseUrl:string;
		Headers:Map<string,string>;
		AuthorizationHeader:boolean;
	}

	// Utilities
	export module UIUtils {
		export function container(container:Container);

		export function lazy(T:any):any;

		export function showToast(container, config);

		export function getAscii(str):string;
	}
	// Event Utility
	export module UIEvent {
		export function fireEvent(event:string,
								  element:EventTarget,
								  data?:any):any;

		export function observe(object, property);

		export function broadcast(event, data):PropertyObserver;

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

interface Window {
	isTrue;
	isEmpty;
	isFunction;
	getParentByTag;
	getParentByClass;

	__seed:number;
	Constants:any;
}
declare module 'aurelia-validation' {
	export interface ValidationGroup {
		isPhone():any;
	}
}
