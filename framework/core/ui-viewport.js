var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    var UIViewport = (function () {
        function UIViewport(element) {
            this.element = element;
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', aurelia_router_1.Router)
        ], UIViewport.prototype, "router", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', UIViewportOptions)
        ], UIViewport.prototype, "options", void 0);
        UIViewport = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-viewport'), 
            __metadata('design:paramtypes', [Element])
        ], UIViewport);
        return UIViewport;
    })();
    exports.UIViewport = UIViewport;
    var UIViewportOptions = (function () {
        function UIViewportOptions(obj) {
            this.showMenu = true;
            this.showTaskbar = true;
            Object.assign(this, obj);
        }
        return UIViewportOptions;
    })();
    exports.UIViewportOptions = UIViewportOptions;
});
