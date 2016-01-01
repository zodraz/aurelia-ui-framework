import {Aurelia} from "aurelia-framework";
import {UIValidationStrategy} from "./framework/utils/ui-validations";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		//.developmentLogging()
		.feature('framework')
		.plugin('aurelia-validation', (config) => {
			config.useViewStrategy(new UIValidationStrategy());
		});

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
