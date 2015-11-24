import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class App {
	private appTitle:string = "Aurelia UI Framework";

	private router:Router;

	private configureRouter(config, router:Router) {
		this.router                    = router;
		config.title                   = this.appTitle;
		config.options.isAuthenticated = false;
		//.addPipelineStep('authorize', AuthInterceptor)
		config.map([{
			route: 'login',
			moduleId: './login/login',
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
			route: 'data',
			moduleId: './home/view',
			settings: { navIcon: 'fi-elegant-little14'},
			title: 'Data Elements',
			nav: true,
			auth: false,
			name: 'data'
		}, {
			route: 'badurl',
			moduleId: './home/view',
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

	constructor() {

	}

	logout() {
		this.router['options'].isAuthenticated = !this.router['options'].isAuthenticated;
	}
}