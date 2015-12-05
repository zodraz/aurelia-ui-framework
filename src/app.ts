import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {UIApplicationState} from "aurelia-ui-framework";

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

	constructor(public appState:UIApplicationState) {
		appState.Copyright = "Company Name";
		appState.StartYear = '2015';
		appState.Version   = '1.0.0';
	}

	logout() {
		this.appState.IsAuthenticated = false;
		this.appState.Username        = null;
	}
}