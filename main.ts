import 'jquery';
import {Aurelia} from "aurelia-framework";
import {UIValidation} from "aurelia-ui-framework";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.plugin('aurelia-ui-framework')
		.plugin('aurelia-validation', (config) => {
			config.useViewStrategy(new UIValidation());
		});

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
