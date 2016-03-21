define(["require", "exports"], function (require, exports) {
    "use strict";
    var Inputs = (function () {
        function Inputs() {
        }
        Inputs.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Input Elements';
            config.map([{
                    route: 'readme',
                    moduleId: './readme',
                    settings: { icon: 'fi-vaadin-open-book' },
                    title: 'ReadMe',
                    nav: true,
                    auth: false,
                    name: 'readme'
                }, {
                    route: 'buttons',
                    moduleId: './buttons',
                    settings: { icon: 'fi-vaadin-button', sectionStart: true },
                    title: 'Buttons',
                    nav: true,
                    auth: false,
                    name: 'buttons'
                }, {
                    route: 'input',
                    moduleId: './input',
                    settings: { icon: 'fi-vaadin-input' },
                    title: 'Input',
                    nav: true,
                    auth: false,
                    name: 'input'
                }, {
                    route: 'phone',
                    moduleId: './phone',
                    settings: { icon: 'fi-material-telephone-keypad-with-ten-keys' },
                    title: 'Telephone Input',
                    nav: true,
                    auth: false,
                    name: 'phone'
                }, {
                    route: 'date',
                    moduleId: './date',
                    settings: { icon: 'fi-vaadin-date-input' },
                    title: 'Date Input',
                    nav: true,
                    auth: false,
                    name: 'date'
                }, {
                    route: 'combo',
                    moduleId: './combo',
                    settings: { icon: 'fi-vaadin-combo-box' },
                    title: 'ComboBox',
                    nav: true,
                    auth: false,
                    name: 'combo'
                }, {
                    route: 'textarea',
                    moduleId: './textarea',
                    settings: { icon: 'fi-vaadin-text-input' },
                    title: 'Multiline Input',
                    nav: true,
                    auth: false,
                    name: 'textarea'
                }, {
                    route: 'markdown',
                    moduleId: './markdown',
                    settings: { icon: 'fi-vaadin-top-margin-1' },
                    title: 'Markdown Editor',
                    nav: true,
                    auth: false,
                    name: 'markdown'
                }, {
                    route: 'options',
                    moduleId: './options',
                    settings: { icon: 'fi-vaadin-options' },
                    title: 'Checkbox/Radio',
                    nav: true,
                    auth: false,
                    name: 'options'
                }, {
                    route: 'switch',
                    moduleId: './switch',
                    settings: { icon: 'fi-vaadin-slider' },
                    title: 'Toggle Switch',
                    nav: true,
                    auth: false,
                    name: 'switch'
                }, {
                    route: '', redirect: 'readme'
                }]);
        };
        return Inputs;
    }());
    exports.Inputs = Inputs;
});
