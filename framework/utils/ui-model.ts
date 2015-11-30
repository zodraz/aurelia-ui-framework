/**
 *    UI Utils: Generic Model class
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {Lazy} from "aurelia-framework";
import {Container} from "aurelia-dependency-injection";
import {getLogger, Logger} from "aurelia-logging";
import {Validation,ValidationGroup} from "aurelia-validation";
import {UIHttpService} from "./ui-http-service";

export class UIModel {
	public logger:Logger;
	public httpClient:UIHttpService;
	public validation:ValidationGroup;

	constructor() {
		let _c          = new Container();
		let _v          = Lazy.of(Validation).get(_c)();
		this.httpClient = Lazy.of(UIHttpService).get(_c)();
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
}