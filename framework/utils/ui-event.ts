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
	static fireEvent(
		event:string,
		element:EventTarget,
		data?:any,
		source?:Element):any {
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


	static __ea;
	static __ob;

	static observe(
		object,
		prop) {
		if (!UIEvent.__ob) {
			UIEvent.__ob = Utils.lazy(BindingEngine);
		}
		return UIEvent.__ob.propertyObserver(object, prop);
	}

	static broadcast(
		evt,
		data) {
		if (!UIEvent.__ea) {
			UIEvent.__ea = Utils.lazy(EventAggregator);
		}
		UIEvent.__ea.publish(evt, data);
	}

	static subscribe(
		evt,
		fn):Subscription {
		if (!UIEvent.__ea) {
			UIEvent.__ea = Utils.lazy(EventAggregator);
		}
		return UIEvent.__ea.subscribe(evt, fn);
	}
}
