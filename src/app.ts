import {UIViewportOptions} from "aurelia-ui-framework";
import {Router} from "aurelia-router";
export class App {
	private appOptions = new UIViewportOptions({
		title    : 'Aurelia UI Framework',
		subtitle : 'Version 2',
		logo     : 'images/logo.png',
		copyright: `Adarsh Pastakia 2015-${new Date().getFullYear()}`
	});

	private router:Router;

	private configureRouter(config, router:Router) {
		this.router                    = router;
		config.title                   = this.appOptions.title;
		config.options.isAuthenticated = false;
		config.options.showLogo        = true;
		//config.addPipelineStep('authorize', AuthInterceptor);
		config.map([{
			route   : 'login',
			moduleId: './login/view',
			title   : 'Login',
			name    : 'login',
			isLogin : true
		}, {
			route   : 'home',
			moduleId: './home/view',
			settings: {sectionTitle: 'Aurelia UI Framework', navIcon: 'fi-elegant-desktop1'},
			title   : 'Framework Elements',
			nav     : true,
			auth    : false,
			name    : 'home'
		}, {
			route: '', redirect: 'home'
		}]);
	}

	private toggleDir() {
		document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
	}

	private toggleTheme() {
		let css  = document.getElementById('baseStyle') as HTMLLinkElement;
		css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
	}
}