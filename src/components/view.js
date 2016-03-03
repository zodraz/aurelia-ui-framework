define(["require", "exports"], function (require, exports) {
    var Components = (function () {
        function Components() {
        }
        Components.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = "Components";
            config.map([{
                    route: 'readme',
                    moduleId: './readme',
                    settings: { icon: 'fi-vaadin-open-book' },
                    title: 'ReadMe',
                    name: 'readme',
                    nav: true
                }, {
                    route: 'form',
                    moduleId: './form',
                    settings: { sectionStart: true, icon: 'fi-vaadin-form' },
                    title: 'Form',
                    name: 'form',
                    nav: true
                }, {
                    route: 'menus',
                    moduleId: './menus',
                    settings: { icon: 'fi-vaadin-line-list' },
                    title: 'Menus',
                    name: 'menus',
                    nav: true
                }, {
                    route: 'tree',
                    moduleId: './tree',
                    settings: { icon: 'fi-vaadin-file-tree' },
                    title: 'Tree',
                    name: 'tree',
                    nav: true
                }, {
                    route: 'tabs',
                    moduleId: './tabs',
                    settings: { icon: 'fi-vaadin-tabs' },
                    title: 'Tabs',
                    name: 'tabs',
                    nav: true
                }, {
                    route: 'panel',
                    moduleId: './panel',
                    settings: { icon: 'fi-vaadin-browser-1' },
                    title: 'Panel/Dialog',
                    name: 'panel',
                    nav: true
                }, {
                    route: 'datagrid',
                    moduleId: './datagrid',
                    settings: { icon: 'fi-vaadin-table' },
                    title: 'DataGrid',
                    name: 'datagrid',
                    nav: true
                }, {
                    route: 'ribbon',
                    moduleId: './ribbon',
                    settings: { icon: 'fi-vaadin-left-upper-coner' },
                    title: 'Ribbon',
                    name: 'ribbon',
                    nav: true
                }, {
                    route: 'pager',
                    moduleId: './pager',
                    settings: { icon: 'fi-vaadin-plus-and-minus' },
                    title: 'Pager',
                    name: 'pager',
                    nav: true
                }, {
                    route: '', redirect: 'readme'
                }]);
        };
        return Components;
    })();
    exports.Components = Components;
});
