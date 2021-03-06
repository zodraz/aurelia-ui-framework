define(["require", "exports", "./framework/index"], function (require, exports, index_1) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('./framework', function (config) {
            config.App.Key = 'App';
            config.App.Title = 'Aurelia UI Framework';
            config.App.Version = '2.00';
            config.Http.BaseUrl = './';
            config.Http.Headers = {
                'X-API-VERSION': '2'
            };
            config.Http.AuthorizationHeader = true;
        })
            .plugin('aurelia-validation', function (config) {
            config.useViewStrategy(new index_1.UIValidationStrategy());
        });
        aurelia.start()
            .then(function (a) {
            return a.setRoot('./src/app.js');
        })
            .then(function () {
            var splash = window.document.querySelector('.ui-splash');
            splash.classList.add('animate');
            setTimeout(function () {
                splash.parentElement.removeChild(splash);
            }, 1000);
        })
            .catch(function (e) {
            console.log(e);
        });
    }
    exports.configure = configure;
});
