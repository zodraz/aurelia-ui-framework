import {UIViewportOptions, UIUtils, UIEvent} from "aurelia-ui-framework";
import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class App {
	private appOptions = new UIViewportOptions({});
	private router:Router;

	configureRouter(config, router:Router) {
		this.router                       = router;
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
			route: '', redirect: 'home'
		}]);
	}


	toggleDir() {
		document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
	}
}