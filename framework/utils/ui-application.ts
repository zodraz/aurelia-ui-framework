/**
 *    UI Utils      Application
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 *    @description  Application class
 **/
import {singleton, autoinject} from "aurelia-framework";
import {getLogger} from "aurelia-logging";
import {UIUtils} from "./ui-utils";
import {Redirect, Router} from "aurelia-router";

@singleton()
@autoinject()
export class UIApplication {

	static defaults = {
		App : {
			Key    : 'App',
			Title  : 'Aurelia UI Framework',
			Version: '1.00'
		},
		Http: {
			BaseUrl            : './',
			Headers            : {},
			AuthorizationHeader: false
		}
	};

	private __logger;

	public AppConfig  = UIApplication.defaults.App;
	public HttpConfig = UIApplication.defaults.Http;

	public IsHttpInUse:boolean     = false;
	public IsAuthenticated:boolean = false;

	constructor(public router:Router) {
		this.__logger = getLogger('UIApplication');
		this.__logger.info('Initialized');

		Object.assign(this.AppConfig, UIApplication.defaults.App);
		Object.assign(this.HttpConfig, UIApplication.defaults.Http);
	}

	navigate(hash) {
		this.__logger.info("navigate::" + hash);
		this.router.navigate(hash);
	}

	navigateTo(route, params = {}) {
		this.__logger.info("navigateTo::" + route);
		this.router.navigateToRoute(route, params);
	}

	/** App Constants **/
	private __username;
	private __userGroup;
	private __userGroupLabel;
	private __authUser;
	private __authToken;

	get Username() {
		return this.__username;
	}

	set Username(v) {
		this.__username = v;
	}

	get UserGroup() {
		return this.__userGroup;
	}

	set UserGroup(v) {
		this.__userGroup = v;
	}

	get UserGroupLabel() {
		return this.__userGroupLabel;
	}

	set UserGroupLabel(v) {
		this.__userGroupLabel = v;
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
				return JSON.parse(window.sessionStorage.getItem(this.AppConfig.Key + ':' + key));
			}
			else if (value === null) {
				window.sessionStorage.removeItem(this.AppConfig.Key + ':' + key);
			}
			else {
				window.sessionStorage.setItem(this.AppConfig.Key + ':' + key, JSON.stringify(value));
			}
		}
		return null;
	}

	clearSession() {
		if (window.sessionStorage) window.sessionStorage.clear();
	}

	/** Persistent State **/
	persist(key, value = '§') {
		if (window.localStorage) {
			if (value === '§') {
				return JSON.parse(window.localStorage.getItem(this.AppConfig.Key + ':' + key));
			}
			else if (value === null) {
				window.localStorage.removeItem(this.AppConfig.Key + ':' + key);
			}
			else {
				window.localStorage.setItem(this.AppConfig.Key + ':' + key, JSON.stringify(value));
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

	/** Toast **/
	private __overlayContainer;

	toast(config) {
		if (!this.__overlayContainer) this.__overlayContainer = document.body.querySelector('.ui-viewport .ui-overlay-container');
		UIUtils.showToast(this.__overlayContainer, config);
	}
}


@autoinject()
export class AuthInterceptor {
	private logger;

	constructor(public appState:UIApplication) {
		this.logger = getLogger('AuthInterceptor');
		this.logger.info('Initialized');
	}

	run(routingContext, next) {
		// Check if the route has an "auth" key
		// The reason for using `nextInstructions` is because this includes child routes.
		if (routingContext.getAllInstructions()
						  .some(i => i.config.auth)) {
			if (!this.appState.IsAuthenticated) {
				this.logger.warn('Not authenticated');
				let url                       = routingContext.router.generate('login', {status: 401});
				this.appState.IsAuthenticated = false;
				this.appState.session('AppCurrentRoute', routingContext.fragment);
				return next.complete(new Redirect(url));
			}
		}
		// Check if route is not login then check if the user group is allowed to access the route
		if (!routingContext.config.isLogin && !this.isAllowed(routingContext.config.group)) {
			this.logger.warn(`Access denied [${routingContext.config.group}]`);
			this.appState.toast({message: '⚠︎ Access Denied', theme: 'danger'});
			return next.reject();
		}

		return next();
	}

	// Test user group against permitted route groups
	isAllowed(groups) {
		if (groups && this.appState.UserGroup !== null) {
			return new RegExp(`^(${groups})$`).test(this.appState.UserGroup);
		}

		return true;
	}
}