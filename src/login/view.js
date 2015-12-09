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
define(["require", "exports", "aurelia-framework", "../../framework/utils/ui-app-state"], function (require, exports, aurelia_framework_1, ui_app_state_1) {
    var AppLogin = (function () {
        function AppLogin(appState) {
            this.appState = appState;
        }
        AppLogin.prototype.onLogin = function ($event) {
            this.appState.IsAuthenticated = true;
            this.appState.UserGroup = 'User';
            this.appState.Username = 'user@domain.com';
            this.appState.IpAddress = '192.168.0.1';
            if (this.appState._current) {
                this.appState.router.navigate(this.appState._current.fragment);
            }
            else
                this.appState.navigateTo('home');
        };
        AppLogin = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [ui_app_state_1.UIApplicationState])
        ], AppLogin);
        return AppLogin;
    })();
    exports.AppLogin = AppLogin;
});
