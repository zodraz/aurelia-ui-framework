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
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    var App = (function () {
        function App() {
            this.appTitle = "Aurelia UI Framework";
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = this.appTitle;
            config.options.isAuthenticated = false;
            config.map([{
                    route: 'login',
                    moduleId: './login/login',
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
                    route: 'data',
                    moduleId: './home/view',
                    settings: { navIcon: 'fi-elegant-little14' },
                    title: 'Data Elements',
                    nav: true,
                    auth: false,
                    name: 'data'
                }, {
                    route: 'badurl',
                    moduleId: './home/view',
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
            this.router['options'].isAuthenticated = !this.router['options'].isAuthenticated;
        };
        App = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [])
        ], App);
        return App;
    })();
    exports.App = App;
});
