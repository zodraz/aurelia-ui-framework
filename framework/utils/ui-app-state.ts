/**
 *    UI Utils: Application State and Authorization Interceptor
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject} from "aurelia-framework";
import {Router, Redirect} from "aurelia-router";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject()
export class UIApplicationState {
	IsAuthenticated:boolean = false;
	IsHttpInUse:boolean     = false;
	AllowAuthHeader:boolean = false;

	BaseUrl:string = '';

	Username:string;
	PassToken:string;
	UserGroup:string;

	constructor(public router:Router, public eventAggregator:EventAggregator) {
		this.eventAggregator.subscribe('Unauthorized', () => {
			this.Username        = null;
			this.IsAuthenticated = false;
			this.navigateTo('login', {message: '401 Unauthorized'});
		});
		this.eventAggregator.subscribe('Logout', () => {
			this.Username        = null;
			this.IsAuthenticated = false;
			this.navigateTo('login');
		});
	}

	navigateTo(route:string, params:any = {}) {
		this.router.navigateToRoute(route, params, {});
	}
}

export class AuthInterceptor {
	constructor(public appState:UIApplicationState) {

	}

	run(routingContext, next) {
		// Check if the route has an "auth" key
		// The reason for using `nextInstructions` is because this includes child routes.
		if (routingContext.config.auth) {
			if (this.appState.Username === null) {
				let url                       = routingContext.router.generate('login', {message: '401 Unauthorized'});
				this.appState.IsAuthenticated = false;
				return next.cancel(new Redirect(url));
			}
		}
		// Check if route is not login then check if the user group is allowed to access the route
		if (!routingContext.config.isLogin && !this.isAllowed(routingContext.config.group)) {
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