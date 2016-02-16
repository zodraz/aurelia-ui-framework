define(["require", "exports", "./framework/utils/ui-validations"], function (require, exports, ui_validations_1) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('framework')
            .plugin('aurelia-validation', function (config) {
            config.useViewStrategy(new ui_validations_1.UIValidationStrategy());
        });
        aurelia.start().then(function (a) { return a.setRoot('src/app.js'); });
    }
    exports.configure = configure;
});
