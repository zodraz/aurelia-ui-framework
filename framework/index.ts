/**
 *    UI Framework Plugins
 *    @author    Adarsh Pastakia
 *    @company    HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import 'jquery';
import 'lodash';
import 'moment';
import 'numeral';
import './libs/chosen';
import './libs/notify';
import './libs/marked';
import './libs/phonelib';
import './libs/countries';
import './libs/currencies';
import './libs/datepicker';
import './libs/textcomplete';
import {FrameworkConfiguration} from "aurelia-framework";

export function configure(aurelia:FrameworkConfiguration) {
	aurelia.globalResources('./core/ui-app');
	aurelia.globalResources('./core/ui-page');
	aurelia.globalResources('./core/ui-section');
	aurelia.globalResources('./core/ui-content');
	aurelia.globalResources('./core/ui-header');
	aurelia.globalResources('./core/ui-sidebar');
	aurelia.globalResources('./core/ui-toolbar');
	aurelia.globalResources('./core/ui-statsbar');

	aurelia.globalResources('./containers/ui-button-group');
	aurelia.globalResources('./containers/ui-option-group');
	aurelia.globalResources('./containers/ui-grid-row');
	aurelia.globalResources('./containers/ui-grid-column');
	aurelia.globalResources('./containers/ui-datagrid');
	aurelia.globalResources('./containers/ui-menu');
	aurelia.globalResources('./containers/ui-form');
	aurelia.globalResources('./containers/ui-panel');
	aurelia.globalResources('./containers/ui-scroll');
	aurelia.globalResources('./containers/ui-tab');
	aurelia.globalResources('./containers/ui-login');
	aurelia.globalResources('./containers/ui-dialog');

	aurelia.globalResources('./components/ui-button');
	aurelia.globalResources('./components/ui-switch');
	aurelia.globalResources('./components/ui-textarea');
	aurelia.globalResources('./components/ui-phone');
	aurelia.globalResources('./components/ui-input');
	aurelia.globalResources('./components/ui-input-dual');
	aurelia.globalResources('./components/ui-date');
	aurelia.globalResources('./components/ui-list');
	aurelia.globalResources('./components/ui-ribbon');
	aurelia.globalResources('./components/ui-option');
	aurelia.globalResources('./components/ui-chosen');
	aurelia.globalResources('./components/ui-tree');
	aurelia.globalResources('./components/ui-pager');
	aurelia.globalResources('./components/ui-divider');
	aurelia.globalResources('./components/ui-markdown');
	aurelia.globalResources('./components/ui-lang-select');

	aurelia.globalResources('./utils/ui-converters');
}

export {UIApplicationState, AuthInterceptor} from "./utils/ui-app-state";
export {DateValueConverter,NumberValueConverter,CurrencyValueConverter,KeysValueConverter,MarkdownValueConverter,
	SortValueConverter,GroupValueConverter,JsonValueConverter, IsArrayValueConverter, IsObjectValueConverter, IsStringValueConverter} from "./utils/ui-converters";
export {UIEvent} from "./utils/ui-event";
export {UIHttpService} from "./utils/ui-http-service";
export {UIDwrService} from "./utils/ui-dwr-service";
export {UILangSelect} from "./components/ui-lang-select";
export {UIModel} from "./utils/ui-model";
export {UITreeModel,UITreeOptionsModel,UITreePanel} from "./utils/ui-tree-models";
export {_, moment, numeral, Format, Utils, watch} from "./utils/ui-utils";
export {UIValidationStrategy} from "./utils/ui-validations";
export {UIDialogService} from "./utils/ui-dialog-service";
