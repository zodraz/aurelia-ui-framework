import 'jquery';
import 'lodash';
import 'moment';
import 'numeral';
import 'aurelia-ui-framework';
import {Aurelia} from "aurelia-framework";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature('framework')
		.plugin('aurelia-validation');

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
