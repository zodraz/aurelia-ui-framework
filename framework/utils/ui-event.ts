/**
 *    UI Utils      Custom Event
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {UIUtils} from "aurelia-ui-framework";
import {BindingEngine, PropertyObserver} from "aurelia-framework";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";

export module UIEvent {
	export function fireEvent(event:string,
							  element:EventTarget,
							  data?:any):any {
		try {
			let e = new CustomEvent(event, {bubbles: true, cancelable: true, detail: data});
			return element.dispatchEvent(e);
		} catch (e) {
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, true, true, data);
			return element.dispatchEvent(evt);
		}
	}


	var __ea;
	var __ob;

	export function broadcast(event, data) {
		if (!__ea) {
			__ea = UIUtils.lazy(EventAggregator);
		}
		__ea.publish(event, data);
	}

	export function observe(object, property):PropertyObserver {
		if (!__ob) {
			__ob = UIUtils.lazy(BindingEngine);
		}
		return __ob.propertyObserver(object, property);
	}

	export function subscribe(event, callback):Subscription {
		if (!__ea) {
			__ea = UIUtils.lazy(EventAggregator);
		}
		return __ea.subscribe(event, callback);
	}
}
