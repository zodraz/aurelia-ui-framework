import 'jquery';
import 'lodash';
import 'moment';
import 'numeral';
import 'aurelia-ui-framework';
import {Aurelia} from "aurelia-framework";
import {UIValidation} from "aurelia-ui-framework";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature('framework')
		.plugin('aurelia-validation', (config) => {
			config.useViewStrategy(new UIValidation());
		});

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
