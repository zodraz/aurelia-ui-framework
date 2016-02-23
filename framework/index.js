define(["require", "exports", 'lodash', 'moment', 'numeral', './libs/marked', './libs/phonelib', './data/countries', './data/currencies'], function (require, exports) {
    function configure(aurelia) {
        aurelia.globalResources('./core/ui-viewport');
    }
    exports.configure = configure;
});
