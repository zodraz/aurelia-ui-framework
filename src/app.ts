import {UIViewportOptions, UIUtils, UIEvent} from "aurelia-ui-framework";
import {Router} from "aurelia-router";

export class App {
	private appOptions = new UIViewportOptions({
		title    : 'Aurelia UI Framework',
		subtitle : 'Version 2',
		copyright: `Adarsh Pastakia 2015-${new Date().getFullYear()}`
	});

	private router:Router;
	private evtLogout;

	configureRouter(config, router:Router) {
		this.router                    = router;
		config.title                   = this.appOptions.title;
		config.options.showLogo        = true;
		config.options.isAuthenticated = true;
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
			settings: {sectionTitle: 'Aurelia UI Framework', icon: 'fi-metrize-video-viewport-in-a-circle'},
			title   : 'Framework Elements',
			nav     : true,
			auth    : false,
			name    : 'home'
		}, {
			route   : 'core',
			moduleId: './core/view',
			settings: {icon: 'fi-metrize-atom-in-circular-button'},
			title   : 'Core Elements',
			nav     : true,
			auth    : false,
			name    : 'core'
		},{
			route   : 'components',
			moduleId: './components/view',
			settings: {icon: 'fi-metrize-layers-in-circular-button'},
			title   : 'Components',
			nav     : true,
			auth    : false,
			name    : 'core'
		},{
			route   : 'inputs',
			moduleId: './inputs/view',
			settings: {icon: 'fi-metrize-marker-with-three-dots-circular-button'},
			title   : 'Input Elements',
			nav     : true,
			auth    : false,
			name    : 'inputs'
		}, {
			route: '', redirect: 'home'
		}]);
	}

	constructor() {
	}

	attached() {
		this.evtLogout = UIEvent.subscribe('logout', this.logout);
	}

	detached() {
		this.evtLogout.dispose();
	}

	toggleDir() {
		document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
	}

	toggleTheme() {
		let css  = document.getElementById('baseStyle') as HTMLLinkElement;
		css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
	}

	logout() {
		console.log('Logout');
	}
}