/**
 *    UI Utils: Custom Event
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
export class UIEvent extends Event {
	private _data:any;

	get data() {
		return this._data;
	}

	set data(any) {
		this._data = any;
	}

	static fireEvent(event:string, element:EventTarget, data?:any, source?:Element) {
		let e        = new Event(event, {bubbles: true, cancelable: true}) as UIEvent;
		e.data       = data;
		e.srcElement = source; // UNABLE TO SET SOURCE ELEMENT
		element.dispatchEvent(e);
	}
}