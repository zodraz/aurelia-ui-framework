import 'jquery';
import 'lodash';
import 'moment';
import 'numeral';
import 'libs/anchor';
import 'libs/chosen';
import 'libs/notify';
import 'libs/marked';
import 'libs/phonelib';
import 'libs/countries';
import {Aurelia} from "aurelia-framework";

export function configure(aurelia:Aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.feature('framework')
		.plugin('aurelia-validation');

	aurelia.start().then(a => a.setRoot('src/app.js'));
}
