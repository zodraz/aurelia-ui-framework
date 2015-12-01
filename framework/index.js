define(["require", "exports", "./utils/ui-app-state", "./utils/ui-converters", "./utils/ui-event", "./utils/ui-http-service", "./utils/ui-model", "./utils/ui-tree-models", "./utils/ui-utils", "./utils/ui-validations"], function (require, exports, ui_app_state_1, ui_converters_1, ui_event_1, ui_http_service_1, ui_model_1, ui_tree_models_1, ui_utils_1, ui_validations_1) {
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function configure(aurelia) {
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
        aurelia.globalResources('./containers/ui-grid-column');
        aurelia.globalResources('./containers/ui-datagrid');
        aurelia.globalResources('./containers/ui-grid');
        aurelia.globalResources('./containers/ui-menu');
        aurelia.globalResources('./containers/ui-form');
        aurelia.globalResources('./containers/ui-panel');
        aurelia.globalResources('./containers/ui-scroll');
        aurelia.globalResources('./containers/ui-tab');
        aurelia.globalResources('./components/ui-button');
        aurelia.globalResources('./components/ui-switch');
        aurelia.globalResources('./components/ui-input');
        aurelia.globalResources('./components/ui-date');
        aurelia.globalResources('./components/ui-list');
        aurelia.globalResources('./components/ui-ribbon');
        aurelia.globalResources('./components/ui-option');
        aurelia.globalResources('./components/ui-chosen');
        aurelia.globalResources('./components/ui-tree');
        aurelia.globalResources('./components/ui-login');
        aurelia.globalResources('./components/ui-markdown');
    }
    exports.configure = configure;
    __export(ui_app_state_1);
    __export(ui_converters_1);
    __export(ui_event_1);
    __export(ui_http_service_1);
    __export(ui_model_1);
    __export(ui_tree_models_1);
    __export(ui_utils_1);
    __export(ui_validations_1);
});
