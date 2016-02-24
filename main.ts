import 'jquery';
import {Aurelia} from "aurelia-framework";
import {UIValidationStratergy} from "aurelia-ui-framework";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.plugin('aurelia-ui-framework')
		.plugin('aurelia-validation', (config) => {
			config.useViewStrategy(new UIValidationStratergy());
		});

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
