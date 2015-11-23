import {Router} from "aurelia-router";

export class Home {
	router:Router;
	private title = "Framework Elements";

	private configureRouter(config, router:Router) {
		this.router = router;
		config.map([{
			route: 'buttons',
			moduleId: './buttons',
			settings: {
				sectionTitle: 'Components',
				navIcon: 'fi-elegant-selected'
			},
			title: 'Buttons',
			nav: true,
			name: 'buttons'
		}, {
			route: 'grid',
			moduleId: './grid',
			settings: {
				sectionTitle: 'Containers',
				sectionStart: true,
				navIcon: 'fi-elegant-3x3'
			},
			title: 'Grid',
			nav: true,
			name: 'grid'
		}, {
			route: 'form',
			moduleId: './form',
			settings: {
				navIcon: 'fi-elegant-interface19'
			},
			title: 'Forms',
			nav: true,
			name: 'form'
		}, {
			route: 'page',
			moduleId: './page',
			settings: {
				navIcon: 'fi-elegant-document9'
			},
			title: 'Page Elements',
			nav: true,
			name: 'page'
		}, {
			route: '', redirect: 'buttons'
		}]);
	}
}