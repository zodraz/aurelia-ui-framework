/**
 *    UI Utils: Application State and Authorization Interceptor
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, singleton} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import {getLogger} from "aurelia-logging";
import {EventAggregator} from "aurelia-event-aggregator";
import {Logger} from "aurelia-logging";

@singleton()
@autoinject()
export class UIApplicationState {
	public IsAuthenticated:boolean = false;
	public IsHttpInUse:boolean     = false;
	public AllowAuthHeader:boolean = false;

	// Application Settings
	public AppKey:string    = 'AUF';
	public Version:string   = "0.0.1";
	public StartYear:string = '2015';
	public Copyright:string = 'Adarsh Pastakia';

	public Username:string;

	// Api Connections
	public BaseUrl:string = '';
	public AuthUser:string;
	public AuthToken:string;

	// Mosaic/Voila
	public IpAddress:string = '';
	public AppSource:number = 0;
	public UserGroup:string;

	private _keyObjects = {};

	private _logger:Logger;

	constructor(public router:Router, public eventAggregator:EventAggregator) {
		this._logger = getLogger('UIApplicationState');
		this._logger.debug('Initialized');

		this.eventAggregator.subscribe('Unauthorized', () => {
			this._logger.debug('Unauthorized');
			this.Username        = null;
			this.IsAuthenticated = false;
			this.navigateTo('login', {message: '401 Unauthorized'});
		});
		this.eventAggregator.subscribe('Logout', () => {
			this._logger.debug('Logout');
			this.Username        = null;
			this.IsAuthenticated = false;
			this.navigateTo('login');
		});

		$.notify.defaults({
			style: 'ui',
			className: 'danger'
		});
	}

	get(key) {
		return this._keyObjects[key];
	}

	set(key, value) {
		this._keyObjects[key] = value;
		return value;
	}

	navigateTo(route:string, params:any = {}) {
		this._logger.debug(`navigateTo::${route}`);
		this.router.navigateToRoute(route, params, {});
	}

	// Notifications
	notifyError(msg) {
		this._logger.debug(`notify::${msg}`);
		$.notify(msg);
	}

	notifyPageError(msg) {
		this._logger.debug(`notifyPage::${msg}`);
		$('.ui-page-title').notify(msg, {
			elementPosition: 'b c',
			arrowShow: false
		});
	}

	// Local Storage
	getLocal(key:string):string {
		return JSON.parse(window.localStorage.getItem(`${this.AppKey}_${key}`));
	}

	saveLocal(key:string, value:string = null) {
		if (value)
			window.localStorage.setItem(`${this.AppKey}_${key}`, JSON.stringify(value));
		else
			window.localStorage.removeItem(`${this.AppKey}_${key}`);
	}

	// Session Storage
	getState(key:string):string {
		return JSON.parse(window.sessionStorage.getItem(`${this.AppKey}_${key}`));
	}

	saveState(key:string, value:string = null) {
		if (value)
			window.sessionStorage.setItem(`${this.AppKey}_${key}`, JSON.stringify(value));
		else
			window.sessionStorage.removeItem(`${this.AppKey}_${key}`);
	}
}

@autoinject()
export class AuthInterceptor {
	private logger:Logger;

	constructor(public appState:UIApplicationState) {
		this.logger = getLogger('AuthInterceptor');
		this.logger.debug('Initialized');
	}

	run(routingContext, next) {
		// Check if the route has an "auth" key
		// The reason for using `nextInstructions` is because this includes child routes.
		if (routingContext.config.auth) {
			if (!this.appState.IsAuthenticated) {
				this.logger.debug('Not authenticated');
				let url                       = routingContext.router.generate('login', {message: '401 Unauthorized'});
				this.appState.IsAuthenticated = false;
				return next.cancel(new Redirect(url));
			}
		}
		// Check if route is not login then check if the user group is allowed to access the route
		if (!routingContext.config.isLogin && !this.isAllowed(routingContext.config.group)) {
			this.logger.debug(`Access denied [${routingContext.config.group}]`);
			$.notify('Access Denied');
			return next.cancel();
		}

		return next();
	}

	// Test user group against permitted route groups
	isAllowed(groups) {
		if (groups && this.appState.UserGroup !== null) {
			var rx = groups.replace(/(\!+\d+)/g, function (x) {
				return x.replace('!', '[^') + ']';
			});
			return new RegExp(`^(${rx})$`).test(this.appState.UserGroup);
		}

		return true;
	}
}