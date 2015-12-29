define(["require", "exports", "./framework/utils/ui-validations", 'jquery', 'lodash', 'moment', 'numeral', './framework/libs/chosen', './framework/libs/notify', './framework/libs/marked', './framework/libs/phonelib', './framework/libs/countries', './framework/libs/datepicker'], function (require, exports, ui_validations_1) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('framework')
            .plugin('aurelia-validation', function (config) {
            config.useViewStrategy(new ui_validations_1.UIValidation());
        });
        aurelia.start().then(function (a) { return a.setRoot('src/app.js'); });
    }
    exports.configure = configure;
});
