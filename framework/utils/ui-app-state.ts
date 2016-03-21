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
import {Container} from "aurelia-dependency-injection";
import {Utils} from "./ui-utils";

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

	public currentRoute;

	private __keyObjects = {};

	private __logger:Logger;

	constructor(
		public router:Router,
		public container:Container,
		public eventAggregator:EventAggregator) {
		this.__logger = getLogger('UIApplicationState');
		this.__logger.debug('Initialized');

		Utils.__container = container;

		this.eventAggregator.subscribe(
			'Unauthorized', () => {
				this.__logger.debug('Unauthorized');
				this.Username        = null;
				this.IsAuthenticated = false;
				this.navigateTo('login', {message: '401 Unauthorized'});
			});
		this.eventAggregator.subscribe(
			'Logout', () => {
				this.__logger.debug('Logout');
				this.Username        = null;
				this.IsAuthenticated = false;
				this.navigateTo('login');
			});

		$.notify.defaults(
			{
				style: 'ui',
				className: 'danger'
			});
	}

	get(key) {
		return this.__keyObjects[key];
	}

	set(
		key,
		value) {
		this.__keyObjects[key] = value;
		return value;
	}

	navigateTo(
		route:string,
		params:any = {}) {
		this.currentRoute = null;
		this.__logger.debug(`navigateTo::${route}`);
		this.router.navigateToRoute(route, params, {});
	}

	// Logging
	logDebug(
		category:string,
		message:string) {
		getLogger(category)
			.debug(message);
	}

	logInfo(
		category:string,
		message:string) {
		getLogger(category)
			.info(message);
	}

	logWarn(
		category:string,
		message:string) {
		getLogger(category)
			.warn(message);
	}

	// Notifications
	notifyError(msg) {
		this.__logger.debug(`notify::${msg}`);
		$.notify(msg);
	}

	notifyInfo(msg) {
		this.__logger.debug(`notifyInfo::${msg}`);
		$.notify(
			msg, {
				className: 'info'
			});
	}

	notifySuccess(msg) {
		this.__logger.debug(`notifyInfo::${msg}`);
		$.notify(
			msg, {
				className: 'success'
			});
	}

	notifyPageError(msg) {
		this.__logger.debug(`notifyPage::${msg}`);
		$('.ui-app-header')
			.notify(
				msg, {
					elementPosition: 'b c',
					arrowShow: false,
					autoHide: false
				});
	}

	notifyDialogError(
		dlg,
		msg) {
		this.__logger.debug(`notifyDialog::${msg}`);
		$(dlg)
			.find('.ui-header')
			.notify(
				msg, {
					elementPosition: 'b c',
					arrowShow: false,
					autoHide: false
				});
	}

	notifyConfirm(msg) {
		return new Promise(
			(
				resolve,
				reject)=> {
				let _el = $('body')
					.append(
						`
			<div class='ui-notify-confirm'>
				<div class='ui-notify'>
					<div class='title'>${msg}</div>
					<div class='buttons'>
						<button class='ui-button yes'>Yes</button>
						<button class='ui-button no'>No</button>
					</div>
				</div>
			</div>
			`)
					.children('.ui-notify-confirm');
				_el.one(
					'click', '.ui-button', function (e) {
						($(e.target)
							.hasClass('yes')) ? resolve() : reject();
						_el.remove();
					});
			});
	}

	// Local Storage
	getLocal(key:string):string {
		return JSON.parse(window.localStorage.getItem(`${this.AppKey}_${key}`));
	}

	saveLocal(
		key:string,
		value:string = null) {
		if (value) {
			window.localStorage.setItem(`${this.AppKey}_${key}`, JSON.stringify(value));
		}
		else {
			window.localStorage.removeItem(`${this.AppKey}_${key}`);
		}
	}

	// Session Storage
	getState(key:string):string {
		return JSON.parse(window.sessionStorage.getItem(`${this.AppKey}_${key}`));
	}

	saveState(
		key:string,
		value:string = null) {
		if (value) {
			window.sessionStorage.setItem(`${this.AppKey}_${key}`, JSON.stringify(value));
		}
		else {
			window.sessionStorage.removeItem(`${this.AppKey}_${key}`);
		}
	}

	clearState() {
		window.sessionStorage.clear();
	}
}

@autoinject()
export class AuthInterceptor {
	private logger:Logger;

	constructor(public appState:UIApplicationState) {
		this.logger = getLogger('AuthInterceptor');
		this.logger.debug('Initialized');
	}

	run(
		routingContext,
		next) {
		// Check if the route has an "auth" key
		// The reason for using `nextInstructions` is because this includes child routes.
		if (routingContext.getAllInstructions()
						  .some(
							  i => i.config.auth)) {
			if (!this.appState.IsAuthenticated) {
				this.logger.debug('Not authenticated');
				let url                       = routingContext.router.generate('login', {message: '401 Unauthorized'});
				this.appState.IsAuthenticated = false;
				this.appState.currentRoute    = routingContext;
				return next.complete(new Redirect(url));
			}
		}
		if (routingContext.config.isLogin && !this.appState.currentRoute) {
			this.appState.currentRoute = routingContext.router.currentInstruction;
		}
		// Check if route is not login then check if the user group is allowed to access the route
		if (!routingContext.config.isLogin && !this.isAllowed(routingContext.config.group)) {
			this.logger.debug(`Access denied [${routingContext.config.group}]`);
			$.notify('Access Denied');
			return next.reject();
		}

		return next();
	}

	// Test user group against permitted route groups
	isAllowed(groups) {
		if (groups && this.appState.UserGroup !== null) {
			var rx = groups.replace(
				/(\!+\d+)/g, function (x) {
					return x.replace('!', '[^') + ']';
				});
			return new RegExp(`^(${rx})$`).test(this.appState.UserGroup);
		}

		return true;
	}
}