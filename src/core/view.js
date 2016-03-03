define(["require", "exports"], function (require, exports) {
    var Core = (function () {
        function Core() {
        }
        Core.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = "Core Elements";
            config.map([{
                    route: 'readme',
                    moduleId: './readme',
                    settings: { icon: 'fi-vaadin-open-book' },
                    title: 'ReadMe',
                    name: 'readme',
                    nav: true
                }, {
                    route: 'page',
                    moduleId: './page',
                    settings: { sectionStart: true, icon: 'fi-vaadin-viewpoint' },
                    title: 'Page',
                    name: 'page',
                    nav: true
                }, {
                    route: 'section',
                    moduleId: './section',
                    settings: { icon: 'fi-vaadin-layout' },
                    title: 'Section',
                    name: 'section',
                    nav: true
                }, {
                    route: 'content',
                    moduleId: './content',
                    settings: { icon: 'fi-vaadin-margin' },
                    title: 'Content',
                    name: 'content',
                    nav: true
                }, {
                    route: 'sidebar',
                    moduleId: './sidebar',
                    settings: { icon: 'fi-vaadin-left-margin-1' },
                    title: 'SideBar',
                    name: 'sidebar',
                    nav: true
                }, {
                    route: 'toolbar',
                    moduleId: './toolbar',
                    settings: { icon: 'fi-vaadin-top-margin-1' },
                    title: 'ToolBar',
                    name: 'toolbar',
                    nav: true
                }, {
                    route: 'statsbar',
                    moduleId: './statsbar',
                    settings: { icon: 'fi-vaadin-top-margin-1' },
                    title: 'StatsBar',
                    name: 'statsbar',
                    nav: true
                }, {
                    route: 'grid',
                    moduleId: './grid',
                    settings: { icon: 'fi-vaadin-grid' },
                    title: 'Grid Layout',
                    name: 'grid',
                    nav: true
                }, {
                    route: '', redirect: 'readme'
                }]);
        };
        return Core;
    })();
    exports.Core = Core;
});
