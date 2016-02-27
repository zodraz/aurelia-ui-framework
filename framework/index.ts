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
	/** Core **/
	aurelia.globalResources('./core/ui-viewport');
	aurelia.globalResources('./core/ui-page');
	aurelia.globalResources('./core/ui-grid');

	/** Inputs **/
	aurelia.globalResources('./inputs/ui-button');
	aurelia.globalResources('./inputs/ui-switch');
	aurelia.globalResources('./inputs/ui-option');

	/** Utils **/
	aurelia.globalResources('./utils/ui-converters');
}

export {UIViewportOptions} from "./core/ui-viewport";

export {UIEvent} from "./utils/ui-event";
export {UIFormat} from "./utils/ui-formatters";
export {UIUtils, _, moment, numeral} from "./utils/ui-utils";
