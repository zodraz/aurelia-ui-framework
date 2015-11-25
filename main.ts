import 'jquery';
import 'lodash';
import 'moment';
import 'numeral';
import 'libs/chosen';
import 'libs/notify';
import 'libs/markdown';
import 'libs/phonelib';
import {Aurelia} from "aurelia-framework";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature('framework')
		.plugin('aurelia-validation');

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
