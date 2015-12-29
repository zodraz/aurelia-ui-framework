import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIApplicationState, AuthInterceptor} from "../framework/utils/ui-app-state";

@autoinject()
export class App {
	private appTitle:string = "Aurelia UI Framework";

	private router:Router;

	private configureRouter(config, router:Router) {
		this.router                    = router;
		config.title                   = this.appTitle;
		config.options.isAuthenticated = false;
		config.options.showLogo        = true;
		config.addPipelineStep('authorize', AuthInterceptor);
		config.map([{
			route: 'login',
			moduleId: './login/view',
			title: 'Login',
			name: 'login',
			isLogin: true
		}, {
			route: 'home',
			moduleId: './home/view',
			settings: {sectionTitle: 'Aurelia UI Framework', navIcon: 'fi-elegant-desktop1'},
			title: 'Framework Elements',
			nav: true,
			auth: false,
			name: 'home'
		}, {
			route: 'badurl',
			moduleId: './home/grid',
			settings: {},
			title: 'Authenticated URL',
			nav: true,
			auth: true,
			name: 'badurl'
		}, {
			route: '', redirect: 'home'
		}]);

		$('.ui-splash').addClass('animate');
		setTimeout(function () {
			$('.ui-splash').remove();
		}, 500);
	}

	constructor(public appState:UIApplicationState) {
		this.appState.IsAuthenticated = true;
		this.appState.UserGroup       = 'User';
		this.appState.Username        = 'user@domain.com';
		this.appState.IpAddress       = '192.168.0.1';
	}

	logout() {
		this.appState.IsAuthenticated = false;
		this.appState.Username        = null;
		this.appState.navigateTo('login');
	}

	switch($event) {
		$event.preventDefault();
		document.body.dir = document.body.dir == 'ltr' ? 'rtl' : 'ltr';
	}

	theme($event) {
		$event.preventDefault();
		let el:any = document.getElementById('baseStyle');
		el.href    = el.href.indexOf('app.css') > 0 ? 'styles/app-dark.css' : 'styles/app.css';
	}
}