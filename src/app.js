var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-ui-framework", "aurelia-framework", "../framework/utils/ui-application"], function (require, exports, aurelia_ui_framework_1, aurelia_framework_1, ui_application_1) {
    var App = (function () {
        function App(appState) {
            this.appState = appState;
            this.appOptions = new aurelia_ui_framework_1.UIViewportOptions({
                title: 'Aurelia UI Framework',
                subtitle: 'Version 2',
                copyright: "Adarsh Pastakia 2015-" + new Date().getFullYear()
            });
            this.appState.IsAuthenticated = true;
            this.appState.Username = 'user@clubhotel.com';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = this.appOptions.title;
            config.options.showLogo = true;
            config.options.showAuthentication = true;
            config.map([{
                    route: 'login',
                    moduleId: './login/view',
                    title: 'Login',
                    name: 'login',
                    isLogin: true
                }, {
                    route: 'home',
                    moduleId: './home/view',
                    settings: { sectionTitle: 'Aurelia UI Framework', icon: 'fi-metrize-video-viewport-in-a-circle' },
                    title: 'Framework Elements',
                    nav: true,
                    auth: false,
                    name: 'home'
                }, {
                    route: 'core',
                    moduleId: './core/view',
                    settings: { icon: 'fi-metrize-atom-in-circular-button' },
                    title: 'Core Elements',
                    nav: true,
                    auth: false,
                    name: 'core'
                }, {
                    route: 'components',
                    moduleId: './components/view',
                    settings: { icon: 'fi-metrize-layers-in-circular-button' },
                    title: 'Components',
                    nav: true,
                    auth: false,
                    name: 'core'
                }, {
                    route: 'inputs',
                    moduleId: './inputs/view',
                    settings: { icon: 'fi-metrize-marker-with-three-dots-circular-button' },
                    title: 'Input Elements',
                    nav: true,
                    auth: false,
                    name: 'inputs'
                }, {
                    route: '', redirect: 'home'
                }]);
        };
        App.prototype.attached = function () {
            this.evtLogout = aurelia_ui_framework_1.UIEvent.subscribe('logout', this.logout);
        };
        App.prototype.detached = function () {
            this.evtLogout.dispose();
        };
        App.prototype.toggleDir = function () {
            document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
        };
        App.prototype.toggleTheme = function () {
            var css = document.getElementById('baseStyle');
            css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
        };
        App.prototype.logout = function () {
            console.log('Logout');
        };
        App = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [ui_application_1.UIApplication])
        ], App);
        return App;
    })();
    exports.App = App;
});
