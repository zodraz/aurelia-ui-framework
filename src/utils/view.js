define(["require", "exports"], function (require, exports) {
    "use strict";
    var Utils = (function () {
        function Utils() {
        }
        Utils.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Utility Classes';
            config.map([{
                    route: 'readme',
                    moduleId: './readme',
                    settings: { icon: 'fi-vaadin-open-book' },
                    title: 'ReadMe',
                    nav: true,
                    auth: false,
                    name: 'readme'
                }, {
                    route: '', redirect: 'readme'
                }]);
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
