var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../framework/index", "aurelia-framework", './highlight'], function (require, exports, index_1, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App(appState) {
            appState.IsAuthenticated = true;
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia UI Framework';
            config.options.showLogo = true;
            config.options.showAuthentication = true;
            config.addPipelineStep('authorize', index_1.AuthInterceptor);
            config.map([{
                    route: 'login',
                    moduleId: './login/view',
                    nav: false,
                    auth: false,
                    isLogin: true,
                    name: 'login'
                }, {
                    route: 'home',
                    moduleId: './home/view',
                    settings: { sectionTitle: 'Aurelia UI Framework', icon: 'fi-material-window-with-different-sections' },
                    title: 'Framework Elements',
                    nav: true,
                    auth: false,
                    name: 'home'
                }, {
                    route: 'colors',
                    moduleId: './home/colors',
                    settings: { icon: 'fi-material-painter-palette' },
                    title: 'Copic Colors',
                    nav: true,
                    auth: false,
                    name: 'colors'
                }, {
                    route: 'readme',
                    moduleId: './home/readme',
                    settings: { icon: 'fi-vaadin-open-book' },
                    title: 'ReadMe',
                    nav: true,
                    auth: false,
                    name: 'readme'
                }, {
                    route: 'todo',
                    moduleId: './home/todo',
                    settings: { icon: 'fi-vaadin-tasks' },
                    title: 'ToDo',
                    nav: true,
                    auth: false,
                    name: 'todo'
                }, {
                    route: 'core',
                    moduleId: './core/view',
                    settings: { icon: 'fi-vaadin-viewpoint', sectionStart: true },
                    title: 'Core Elements',
                    nav: true,
                    auth: false,
                    name: 'core'
                }, {
                    route: 'components',
                    moduleId: './components/view',
                    settings: { icon: 'fi-vaadin-modal-list' },
                    title: 'Components',
                    nav: true,
                    auth: false,
                    name: 'components'
                }, {
                    route: 'inputs',
                    moduleId: './inputs/view',
                    settings: { icon: 'fi-vaadin-input' },
                    title: 'Input Elements',
                    nav: true,
                    auth: false,
                    name: 'inputs'
                }, {
                    route: 'utils',
                    moduleId: './utils/view',
                    settings: { icon: 'fi-vaadin-tools' },
                    title: 'Utility Classes',
                    nav: true,
                    auth: false,
                    name: 'utils'
                }, {
                    route: '', redirect: 'home'
                }]);
        };
        App.prototype.toggleDir = function () {
            document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
        };
        App.prototype.toggleTheme = function () {
            var css = document.getElementById('baseStyle');
            css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
        };
        App = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [index_1.UIApplication])
        ], App);
        return App;
    }());
    exports.App = App;
});
