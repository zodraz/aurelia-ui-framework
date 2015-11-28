/**
 *    UI Utils: Custom Event
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
export class UIEvent extends Event {
	private _data:any;
	private _value:any;

	get data() {
		return this._data;
	}

	set data(any) {
		this._data = any;
	}

	get value() {
		return this._value;
	}

	set value(any) {
		this._value = any;
	}

	static fireEvent(event:string, element:EventTarget, data?:any, source?:Element) {
		let e        = new Event(event, {bubbles: true, cancelable: true}) as UIEvent;
		e.data       = data;
		e.srcElement = source; // UNABLE TO SET SOURCE ELEMENT
		element.dispatchEvent(e);
		return e;
	}
}