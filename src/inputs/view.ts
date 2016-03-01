import {Router} from "aurelia-router";

export class Inputs {
	private router:Router;

	configureRouter(config, router:Router) {
		this.router  = router;
		config.title = "Input Elements"
		config.map([{
			route   : 'readme',
			moduleId: './readme',
			settings: {icon: 'fi-vaadin-open-book'},
			title   : 'ReadMe',
			name    : 'readme',
			nav     : true
		}, {
			route   : 'buttons',
			moduleId: './buttons',
			settings: {sectionStart: true, icon: 'fi-vaadin-button'},
			title   : 'Buttons',
			name    : 'buttons',
			nav     : true
		}, {
			route   : 'options',
			moduleId: './options',
			settings: {icon: 'fi-vaadin-options'},
			title   : 'Option Input',
			name    : 'options',
			nav     : true
		}, {
			route   : 'input',
			moduleId: './input',
			settings: {icon: 'fi-vaadin-input'},
			title   : 'Text Input',
			name    : 'input',
			nav     : true
		}, {
			route   : 'select',
			moduleId: './select',
			settings: {icon: 'fi-vaadin-combo-box'},
			title   : 'ComboBox/List',
			name    : 'select',
			nav     : true
		}, {
			route   : 'area',
			moduleId: './area',
			settings: {icon: 'fi-vaadin-text-input'},
			title   : 'Multiline Input',
			name    : 'area',
			nav     : true
		}, {
			route   : 'date',
			moduleId: './date',
			settings: {icon: 'fi-vaadin-date-input'},
			title   : 'Date Input',
			name    : 'date',
			nav     : true
		}, {
			route   : 'tel',
			moduleId: './tel',
			settings: {icon: 'fi-material-telephone-keypad-with-ten-keys'},
			title   : 'Phone Input',
			name    : 'tel',
			nav     : true
		}, {
			route: '', redirect: 'readme'
		}]);
	}
}
