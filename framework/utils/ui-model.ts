/**
 *    UI Utils: Generic Model class
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {Container} from "aurelia-dependency-injection";
import {getLogger, Logger} from "aurelia-logging";
import {Validation,ValidationGroup} from "aurelia-validation";
import {UIHttpService} from "./ui-http-service";
import {_, Utils} from "./ui-utils";

export class UIModel {
	public logger:Logger;
	public httpClient:UIHttpService;
	public validation:ValidationGroup;

	constructor() {
		let _v          = Utils.lazy(Validation);
		this.httpClient = Utils.lazy(UIHttpService);
		this.validation = _v.on(this, null);
		this.logger     = getLogger(this.constructor.name);
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
		_.forEach(json, (v, k)=> {
			if (this.hasOwnProperty(k)) this[k] = v;
		});
	}
	serialize() {
		throw new Error('Not implemented [serialize]');
	}
}