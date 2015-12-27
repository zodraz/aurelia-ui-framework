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

@transient()
export class UIModel {
	public logger:Logger;
	public observer:BindingEngine;
	public httpClient:UIHttpService;
	public validation:ValidationGroup;

	private _original:any;
	private _observers;
	private _subscriptions = [];

	isDirty = false;

	constructor() {
		let _v          = Utils.lazy(Validation);
		this.observer   = Utils.lazy(BindingEngine);
		this.httpClient = Utils.lazy(UIHttpService);
		this.validation = _v.on(this, null);
		this.logger     = getLogger(this.constructor.name);
		this.logger.debug("Model Initialized");
		this.isDirty = false;

		if (this._observers) {
			let self = this;
			for (let prop of this._observers) {
				this._subscriptions.push(this.observer.propertyObserver(this, prop)
					.subscribe(()=> {
						self.isDirty = true;
					}));
			}
		}
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
		this.isDirty = false;
	}

	serialize() {
		throw new Error('Not implemented [serialize]');
	}

	addObserver(o) {
		if (!this._observers) this._observers = [];
		this._observers.push(o);
	}

	dispose() {
		while (this._subscriptions && this._subscriptions.length) {
			this._subscriptions.pop().dispose();
		}
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

export function observe() {
	return function (model, key) {
		model.addObserver(key);
	}
}


export function watch(defaultValue?:any) {
	let observer:BindingEngine = Utils.lazy(BindingEngine);
	return function (viewModel, key) {
		if (!viewModel._subscriptions) viewModel._subscriptions = [];
		let v          = sessionStorage.getItem(`${viewModel.constructor.name}:${key}`);
		viewModel[key] = v || defaultValue;
		viewModel._subscriptions.push(observer.propertyObserver(viewModel, key)
			.subscribe(()=> {
				sessionStorage.setItem(`${viewModel.constructor.name}:${key}`, viewModel[key]);
			}));

		viewModel.unbind = (()=> {
			while (viewModel._subscriptions.length) {
				viewModel._subscriptions.pop().dispose();
			}
		});
	}
}
