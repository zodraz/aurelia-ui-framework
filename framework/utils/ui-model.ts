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

	private __original:any;
	private __observers = [];

	constructor() {
		let _v = Utils.lazy(Validation);
		Object.defineProperties(this, {
			'httpClient': {
				value: Utils.lazy(UIHttpService),
				writable: false,
				enumerable: false
			},
			'validation': {
				value: _v.on(this, null),
				writable: false,
				enumerable: false
			},
			'logger': {
				value: getLogger(this.constructor.name),
				writable: false,
				enumerable: false
			},
			'__observers': {
				value: [],
				writable: true,
				enumerable: false
			},
			'__original': {
				value: {},
				writable: true,
				enumerable: false
			}
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
		while (this.__observers && this.__observers.length)
			this.__observers.pop().dispose();
	}

	deserialize(json) {
		this.__original = _.cloneDeep(json);
		Object.keys(json)
			.forEach((key) => {
				this[key] = json[key];
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
					else if (_.isArray(o[key])) {
						_pojo[key] = o[key].join(',');
					}
					else {
						_pojo[key] = o[key] || null;
					}
				}
			});
		return _pojo;
	}

	isDirty() {
		if (_.isEmpty(this.__original)) {
			Object.keys(this)
				.forEach((key) => {
					if (key !== 'undefined' && !/^__/.test(key))
						this.__original[key] = this[key]
				});
		}
		return this._checkDirty(this.__original, this);
	}

	_checkDirty(o, t) {
		return !Object.keys(o)
			.every((key) => {
				if (t[key] instanceof UIModel) return !t[key].isDirty();
				if (_.isArray(o[key]) && o[key].length != t[key].length) return false;
				if (_.isArray(o[key]) || _.isObject(o[key])) return !this._checkDirty(o[key], t[key]);

				if (t[key] !== o[key])this.logger.debug(key, o[key], t[key], t[key] === o[key]);
				return t.hasOwnProperty(key) && (t[key] === o[key]);
			});
	}

	saveChanges() {
		this.__original = _.cloneDeep(this.serialize());
	}

	discardChanges() {
		Object.keys(_.cloneDeep(this.__original))
			.forEach((key) => {
				this[key] = this.__original[key];
			});
	}
}
