import {UIViewportOptions, UIUtils, UIEvent} from "../framework/index";
import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class App {
	private appOptions = new UIViewportOptions({});
	private router:Router;

	configureRouter(config, router:Router) {
		this.router                       = router;
		config.title                      = 'Aurelia UI Framework';
		config.options.showLogo           = true;
		config.options.showAuthentication = true;
		config.map([{
			route   : 'home',
			moduleId: './home/view',
			settings: {sectionTitle: 'Aurelia UI Framework', icon: 'fi-material-window-with-different-sections'},
			title   : 'Framework Elements',
			nav     : true,
			auth    : false,
			name    : 'home'
		}, {
			route   : 'colors',
			moduleId: './home/colors',
			settings: {icon: 'fi-material-painter-palette'},
			title   : 'Copic Colors',
			nav     : true,
			auth    : false,
			name    : 'colors'
		}, {
			route   : 'core',
			moduleId: './core/view',
			settings: {icon: 'fi-vaadin-viewpoint', sectionStart: true},
			title   : 'Core Elements',
			nav     : true,
			auth    : false,
			name    : 'core'
		}, {
			route   : 'components',
			moduleId: './components/view',
			settings: {icon: 'fi-vaadin-modal-list'},
			title   : 'Components',
			nav     : true,
			auth    : false,
			name    : 'components'
		}, {
			route   : 'inputs',
			moduleId: './inputs/view',
			settings: {icon: 'fi-vaadin-input'},
			title   : 'Input Elements',
			nav     : true,
			auth    : false,
			name    : 'inputs'
		}, {
			route   : 'utils',
			moduleId: './utils/view',
			settings: {icon: 'fi-vaadin-tools'},
			title   : 'Utility Classes',
			nav     : true,
			auth    : false,
			name    : 'utils'
		}, {
			route: '', redirect: 'home'
		}]);
	}


	toggleDir() {
		document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
	}
}