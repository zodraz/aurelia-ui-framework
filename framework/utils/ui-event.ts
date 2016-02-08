/**
 *    UI Utils: Custom Event
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {Utils} from "./ui-utils";
import {BindingEngine} from "aurelia-framework";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";

export class UIEvent extends CustomEvent {
	private _value:any = null;

	get value() {
		return this._value;
	}

	set value(any) {
		this._value = any;
	}

	static fireEvent(event:string, element:EventTarget, data?:any, source?:Element):any {
		try {
			let e        = new Event(event, {bubbles: true, cancelable: true}) as UIEvent;
			e.detail     = data;
			e.srcElement = source; // UNABLE TO SET SOURCE ELEMENT
			return element.dispatchEvent(e);
		} catch (e) {
			var evt = document.createEvent('CustomEvent') as UIEvent;
			evt.initCustomEvent(event, true, true, data);
			return element.dispatchEvent(evt);
		}
	}


	static ea;
	static ob;

	static observe(object, prop) {
		if (!UIEvent.ob) UIEvent.ob = Utils.lazy(BindingEngine);
		return UIEvent.ob.propertyObserver(object, prop);
	}

	static broadcast(evt, data) {
		if (!UIEvent.ea) UIEvent.ea = Utils.lazy(EventAggregator);
		UIEvent.ea.publish(evt, data);
	}

	static subscribe(evt, fn):Subscription {
		if (!UIEvent.ea) UIEvent.ea = Utils.lazy(EventAggregator);
		return UIEvent.ea.subscribe(evt, fn);
	}
}
