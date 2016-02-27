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
	// UIVIewport
	export class UIViewportOptions {
		// App Logo - Relative Path | URL
		logo:string;
		// App Title
		title:string;
		// App Subtitle
		subtitle:string;
		// Footer Copyright
		copyright:string;

		// Show app side menu
		showMenu:boolean;
		// Show Taskbar multiple dialogs
		showTaskbar:boolean;

		constructor(obj);
	}
}

/** UTILS **/
declare module "aurelia-ui-framework" {
	import {Container, PropertyObserver} from "aurelia-framework";
	import {Subscription} from "aurelia-event-aggregator";

	export module UIUtils {
		export function container(container:Container);

		export function lazy(T:any):any;

		export function getAscii(str):string;
	}
	// Event Utility
	export module UIEvent {
		export function fireEvent(event:string,
								  element:EventTarget,
								  data?:any,
								  source?:Element):any;

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
declare var seed;

declare function isTrue(b:any):boolean;

interface Window {
	isTrue;
	seed:number;
}

