/**
 *    UI Utils: Generic Model class
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, transient, BindingEngine} from "aurelia-framework";
import {getLogger, Logger} from "aurelia-logging";
import {UIHttpService} from "./ui-http-service";
import {Validation,ValidationGroup} from "aurelia-validation";
import {_, Utils} from "./ui-utils";
import {UIApplicationState} from "./ui-app-state";

@transient()
export class UIModel {
	public logger:Logger;
	public observer:BindingEngine;
	public httpClient:UIHttpService;
	public validation:ValidationGroup;

	private _original:any;
	private _isDirty       = false;
	private _subscriptions = [];

	constructor() {
		let _v          = Utils.lazy(Validation);
		this.observer   = Utils.lazy(BindingEngine);
		this.httpClient = Utils.lazy(UIHttpService);
		this.validation = _v.on(this, null);
		this.logger     = getLogger(this.constructor.name);
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

	deserialize(json) {
		this._original = _.clone(json, true);
		_.forEach(json, (v, k)=> {
			this[k] = _.isString(v) ? _.trim(v) : v;
		});
		this.observe();
	}

	serialize() {
		throw new Error('Not implemented [serialize]');
	}

	observe() {
		for (var key of Object.keys(this)) {
			if (key != 'logger' &&
				key != 'observer' &&
				key != 'httpClient' &&
				key != 'validation' &&
				key != '_original' &&
				key != '_isDirty' &&
				key != '_subscriptions') {
				this._subscriptions.push(this.observer
					.propertyObserver(this, key)
					.subscribe(()=>this._isDirty=true));
			}
		}
	}

	dispose() {
		while (this._subscriptions.length) {
			this._subscriptions.pop()();
		}
	}

	isDirty() {
		return this._isDirty;
	}

	saveChanges() {
		_.forEach(this._original, (v, k)=> {
			this._original[k] = this[k];
		});
	}

	discardChanges() {
		_.forEach(this._original, (v, k)=> {
			this[k] = _.isString(v) ? _.trim(v) : v;
		});
	}
}
