/**
 *    UI Framework Plugins
 *    @author    Adarsh Pastakia
 *    @company    HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import 'lodash';
import 'moment';
import 'numeral';
import './libs/marked';
import './libs/phonelib';
import './data/countries';
import './data/currencies';
import {FrameworkConfiguration} from "aurelia-framework";

export function configure(aurelia:FrameworkConfiguration) {
	aurelia.globalResources('./core/ui-viewport');
}

//export {UIApplicationState, AuthInterceptor} from "./utils/ui-app-state";
