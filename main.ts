import 'jquery';
import 'lodash';
import 'moment';
import 'numeral';
import 'libs/chosen';
import 'libs/notify';
import 'libs/marked';
import 'libs/phonelib';
import 'libs/countries';
import 'libs/datepicker';
import {Aurelia} from "aurelia-framework";
import {TWBootstrapViewStrategy} from "aurelia-validation";
import {UIValidation} from "./framework/utils/ui-validations";

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
