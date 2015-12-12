var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../framework/utils/ui-app-state"], function (require, exports, aurelia_framework_1, ui_app_state_1) {
    var App = (function () {
        function App(appState) {
            this.appState = appState;
            this.appTitle = "Aurelia UI Framework";
            this.appState.IsAuthenticated = true;
            this.appState.UserGroup = 'User';
            this.appState.Username = 'user@domain.com';
            this.appState.IpAddress = '192.168.0.1';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = this.appTitle;
            config.options.isAuthenticated = false;
            config.options.showLogo = true;
            config.addPipelineStep('authorize', ui_app_state_1.AuthInterceptor);
            config.map([{
                    route: 'login',
                    moduleId: './login/view',
                    title: 'Login',
                    name: 'login',
                    isLogin: true
                }, {
                    route: 'home',
                    moduleId: './home/view',
                    settings: { sectionTitle: 'Aurelia UI Framework', navIcon: 'fi-elegant-desktop1' },
                    title: 'Framework Elements',
                    nav: true,
                    auth: false,
                    name: 'home'
                }, {
                    route: 'badurl',
                    moduleId: './home/grid',
                    settings: {},
                    title: 'Authenticated URL',
                    nav: true,
                    auth: true,
                    name: 'badurl'
                }, {
                    route: '', redirect: 'home'
                }]);
            $('.ui-splash').addClass('animate');
            setTimeout(function () {
                $('.ui-splash').remove();
            }, 500);
        };
        App.prototype.logout = function () {
            this.appState.IsAuthenticated = false;
            this.appState.Username = null;
            this.appState.navigateTo('login');
        };
        App.prototype.switch = function ($event) {
            $event.preventDefault();
            document.body.dir = document.body.dir == 'ltr' ? 'rtl' : 'ltr';
        };
        App = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [ui_app_state_1.UIApplicationState])
        ], App);
        return App;
    })();
    exports.App = App;
});
