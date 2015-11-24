import 'jquery';
import {Aurelia} from "aurelia-framework";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature('framework')
		.plugin('aurelia-validation');

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
