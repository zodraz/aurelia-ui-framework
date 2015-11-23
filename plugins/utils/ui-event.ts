export class UIEvent extends Event {
	private _data:any;

	get data() {
		return this._data;
	}

	set data(any) {
		this._data = any;
	}

	static fireEvent(event:string, element:EventTarget, data?:any, source?:Element) {
		let e        = new UIEvent(event);
		e.bubbles    = true;
		e.cancelable = true;
		e.target     = element;
		e.data       = data;
		e.srcElement = source;
		element.dispatchEvent(e);
	}
}