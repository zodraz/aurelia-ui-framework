define(["require", "exports"], function (require, exports) {
    "use strict";
    var Core = (function () {
        function Core() {
        }
        Core.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Core Elements';
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
        return Core;
    }());
    exports.Core = Core;
});
