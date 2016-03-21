import {autoinject, bindable} from "aurelia-framework";
import {_, Utils} from "../utils/ui-utils";

@autoinject()
export class JsonPart {

	@bindable parent = null;
	@bindable json;
	@bindable key;

	private _body;
	private _collapsed = true;

	constructor(public element:Element) {
	}

	bind() {
		this._collapsed = this.parent != null;
	}

	toggle() {
		this._collapsed = !this._collapsed;
	}

	isObject(v) {
		return _.isObject(v);
	}

	isArray(v) {
		return _.isArray(v);
	}

	isBoolean(v) {
		return _.isBoolean(v);
	}

	isSingleline(v) {
		return _.isString(v) && v.indexOf('\n') == -1 && v.indexOf('<br') == -1;
	}

	isMultiline(v) {
		return _.isString(v) && (v.indexOf('\n') > -1 || v.indexOf('<br') > -1);
	}

	isNumber(v) {
		return _.isNumber(v);
	}

	getType() {
		if (_.isArray(this.json))return 'array';
		if (_.isObject(this.json))return 'object';
		return '';
	}

	removeJson() {
		delete this.parent[this.key];
		$(this.element).remove();
	}
}