import 'jquery';
import 'lodash';
import 'moment';
import 'numeral';
import './framework/libs/chosen';
import './framework/libs/notify';
import './framework/libs/marked';
import './framework/libs/phonelib';
import './framework/libs/countries';
import './framework/libs/datepicker';
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
