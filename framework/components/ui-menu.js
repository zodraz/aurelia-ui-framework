var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-router", "aurelia-ui-framework"], function (require, exports, aurelia_framework_1, aurelia_router_1, aurelia_ui_framework_1) {
    var UIMenu = (function () {
        function UIMenu(element, appState) {
            this.element = element;
            this.appState = appState;
        }
        UIMenu.prototype.isActive = function (route) {
            return route.isActive || route.href == location.hash ||
                location.hash.indexOf(route.config.redirect || 'QWER') > -1;
        };
        UIMenu.prototype.onClick = function ($event) {
            if (this.router)
                return true;
        };
        UIMenu.prototype.logout = function () {
            aurelia_ui_framework_1.UIEvent.broadcast('logout', null);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', aurelia_router_1.Router)
        ], UIMenu.prototype, "router", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Array)
        ], UIMenu.prototype, "menu", void 0);
        UIMenu = __decorate([
            aurelia_framework_1.customElement('ui-menu'), 
            __metadata('design:paramtypes', [Element, aurelia_ui_framework_1.UIApplication])
        ], UIMenu);
        return UIMenu;
    })();
    exports.UIMenu = UIMenu;
});
