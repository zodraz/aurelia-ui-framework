/**
 *    UI Utils      Application
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 *    @description  Application class
 **/
import {singleton, autoinject} from "aurelia-framework";
import {getLogger} from "aurelia-logging";

@singleton()
@autoinject()
export class UIApplication {

	private __logger;

	public BaseUrl                 = './';
	public IsHttpInUse:boolean     = false;
	public SendAuthHeader:boolean  = false;
	public IsAuthenticated:boolean = false;

	constructor() {
		this.__logger = getLogger('UIApplication');
	}

	/** App Constants **/
	private __username;
	private __authUser;
	private __authToken;

	get Username() {
		return this.__username;
	}

	set Username(v) {
		this.__username = v;
	}

	get AuthUser() {
		return this.__authUser;
	}

	set AuthUser(v) {
		this.__authUser = v;
	}

	get AuthToken() {
		return this.__authToken;
	}

	set AuthToken(v) {
		this.__authToken = v;
	}

	/** Session State **/
	session(key, value = '§') {
		if (window.sessionStorage) {
			if (value === '§') {
				return JSON.parse(window.sessionStorage.getItem(key));
			}
			else if (value === null) {
				window.sessionStorage.removeItem(key);
			}
			else {
				window.sessionStorage.setItem(key, JSON.stringify(value));
			}
		}
		return null;
	}

	/** Persistent State **/
	persist(key, value = '§') {
		if (window.localStorage) {
			if (value === '§') {
				return JSON.parse(window.localStorage.getItem(key));
			}
			else if (value === null) {
				window.localStorage.removeItem(key);
			}
			else {
				window.localStorage.setItem(key, JSON.stringify(value));
			}
		}
		return null;
	}

	/** Logger **/
	info(tag, msg, ...rest) {
		this.__logger.info(`${tag}::${msg}`, rest);
	}

	warn(tag, msg, ...rest) {
		this.__logger.warn(`${tag}::${msg}`, rest);
	}

	debug(tag, msg, ...rest) {
		this.__logger.debug(`${tag}::${msg}`, rest);
	}

	error(tag, msg, ...rest) {
		this.__logger.error(`${tag}::${msg}`, rest);
	}
}