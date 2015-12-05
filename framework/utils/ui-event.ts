/**
 *    UI Utils: Custom Event
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
export class UIEvent extends CustomEvent {
	private _value:any;

	get value() {
		return this._value;
	}

	set value(any) {
		this._value = any;
	}

	static fireEvent(event:string, element:EventTarget, data?:any, source?:Element) {
		try {
			let e        = new Event(event, {bubbles: true, cancelable: true}) as UIEvent;
			e.detail     = data;
			e.srcElement = source; // UNABLE TO SET SOURCE ELEMENT
			element.dispatchEvent(e);
			return e;
		} catch (e) {
			var evt = document.createEvent('CustomEvent') as UIEvent;
			evt.initCustomEvent(event, true, true, data);
			element.dispatchEvent(evt);
			return evt;
		}
	}
}
