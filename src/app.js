var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-ui-framework", "aurelia-framework"], function (require, exports, aurelia_ui_framework_1, aurelia_framework_1) {
    var App = (function () {
        function App() {
            this.appOptions = new aurelia_ui_framework_1.UIViewportOptions({});
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.options.showLogo = true;
            config.options.showAuthentication = true;
            config.map([{
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
                    route: '', redirect: 'home'
                }]);
        };
        App.prototype.toggleDir = function () {
            document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
        };
        App = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [])
        ], App);
        return App;
    })();
    exports.App = App;
});
