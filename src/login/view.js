var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../../framework/index", "aurelia-framework"], function (require, exports, index_1, aurelia_framework_1) {
    "use strict";
    var Login = (function () {
        function Login(appState) {
            this.appState = appState;
            this.error = '';
        }
        Login.prototype.activate = function (params) {
            if (params && params.status == 401) {
                this.error = '<span class="fi-ui-error-exclaim"></span> Unauthorized Access';
            }
        };
        Login.prototype.doLogin = function ($event) {
            var route = this.appState.session('AppCurrentRoute') || '/home';
            this.appState.navigate(route);
        };
        Login = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [index_1.UIApplication])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
