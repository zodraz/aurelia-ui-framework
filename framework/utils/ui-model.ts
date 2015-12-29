/**
 *    UI Utils: Generic Model class
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, computedFrom, transient, BindingEngine} from "aurelia-framework";
import {getLogger, Logger} from "aurelia-logging";
import {UIHttpService} from "./ui-http-service";
import {Validation,ValidationGroup} from "aurelia-validation";
import {_, Utils} from "./ui-utils";
import {UIApplicationState} from "./ui-app-state";
import {UIEvent} from "./ui-event";

@transient()
export class UIModel {
	public logger:Logger;
	public httpClient:UIHttpService;
	public validation:ValidationGroup;

	private _original:any;
	private observers = [];

	constructor() {
		let _v = Utils.lazy(Validation);
		Object.defineProperty(this, 'httpClient', {
			value: Utils.lazy(UIHttpService),
			writable: false,
			enumerable: false
		});
		Object.defineProperty(this, 'validation', {
			value: _v.on(this, null),
			writable: false,
			enumerable: false
		});
		Object.defineProperty(this, 'logger', {
			value: getLogger(this.constructor.name),
			writable: false,
			enumerable: false
		});
		Object.defineProperty(this, 'observers', {
			value: [],
			writable: true,
			enumerable: false
		});
		Object.defineProperty(this, '_original', {
			value: {},
			writable: true,
			enumerable: false
		});
		this.logger.debug("Model Initialized");
	}

	get(...rest) {
		throw new Error('Not implemented [get]');
	}

	post(...rest) {
		throw new Error('Not implemented [post]');
	}

	put(...rest) {
		throw new Error('Not implemented [put]');
	}

	delete(...rest) {
		throw new Error('Not implemented [delete]');
	}

	validate() {
		return this.validation.validate();
	}

	dispose() {
		this.logger.debug("Model Disposing");
		while (this.observers && this.observers.length)
			this.observers.pop().dispose();
	}

	deserialize(json) {
		this._original = json;
		Object.keys(this._original)
			.forEach((key) => {
				this[key] = this._original[key];
			});
	}

	serialize() {
		try {
			return this._serializeObject(this);
		}
		catch (e) {
			throw new Error(`Error serializing object [${this.constructor.name}]`);
		}
	}

	_serializeObject(o) {
		let _pojo = {};
		Object.keys(o)
			.forEach((key) => {
				if (key !== 'undefined' && !/^__/.test(key)) {
					if (_.isObject(o[key])) {
						_pojo[key] = this._serializeObject(o[key])
					}
					else {
						_pojo[key] = o[key] || null;
					}
				}
			});
		return _pojo;
	}

	isDirty() {
		return Object.keys(this._original)
			.every((key) => this.hasOwnProperty(key) && (this[key] === this._original[key]));
	}

	saveChanges() {
		Object.keys(this._original)
			.forEach((key) => {
				this._original[key] = this[key];
			});
	}

	discardChanges() {
		Object.keys(this._original)
			.forEach((key) => {
				this[key] = this._original[key];
			});
	}
}
