define(["require", "exports", "./core/ui-viewport", "./utils/ui-event", "./utils/ui-formatters", "./utils/ui-application", "./utils/ui-utils", 'fetch', 'lodash', 'moment', 'numeral', './libs/marked', './libs/phonelib', './data/countries', './data/currencies'], function (require, exports, ui_viewport_1, ui_event_1, ui_formatters_1, ui_application_1, ui_utils_1) {
    function configure(aurelia) {
        aurelia.globalResources('./core/ui-viewport');
        aurelia.globalResources('./core/ui-page');
        aurelia.globalResources('./core/ui-grid');
        aurelia.globalResources('./inputs/ui-button');
        aurelia.globalResources('./inputs/ui-switch');
        aurelia.globalResources('./inputs/ui-option');
        aurelia.globalResources('./inputs/ui-input');
        aurelia.globalResources('./inputs/ui-phone');
        aurelia.globalResources('./inputs/ui-textarea');
        aurelia.globalResources('./inputs/ui-input-dual');
        aurelia.globalResources('./utils/ui-converters');
    }
    exports.configure = configure;
    exports.UIViewportOptions = ui_viewport_1.UIViewportOptions;
    exports.UIEvent = ui_event_1.UIEvent;
    exports.UIFormat = ui_formatters_1.UIFormat;
    exports.UIApplication = ui_application_1.UIApplication;
    exports.UIUtils = ui_utils_1.UIUtils;
    exports._ = ui_utils_1._;
    exports.moment = ui_utils_1.moment;
    exports.numeral = ui_utils_1.numeral;
});
