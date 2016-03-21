var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-router", "../utils/ui-event", "../utils/ui-utils", "../utils/ui-application"], function (require, exports, aurelia_framework_1, aurelia_router_1, ui_event_1, ui_utils_1, ui_application_1) {
    "use strict";
    var UIViewport = (function () {
        function UIViewport(element, appState, container) {
            this.element = element;
            this.appState = appState;
            this.subtitle = '';
            this.copyright = '';
            this.showMenu = true;
            this.showTaskbar = true;
            ui_utils_1.UIUtils.container(container);
            this.appState.info(this.constructor.name, "UIViewport Created");
        }
        UIViewport.prototype.__showMenu = function ($event) {
            $event.stopPropagation();
            this.element.classList.add('show-menu');
            this.appState.info(this.constructor.name, "showMenu");
        };
        UIViewport.prototype.__hideMenu = function ($event) {
            if (this.element.classList.contains('show-menu')) {
                this.appState.info(this.constructor.name, "hideMenu");
                this.element.classList.remove('show-menu');
            }
            return true;
        };
        UIViewport.prototype.logout = function () {
            this.appState.info(this.constructor.name, "fire logout event");
            ui_event_1.UIEvent.fireEvent('logout', this.element);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', aurelia_router_1.Router)
        ], UIViewport.prototype, "router", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIViewport.prototype, "subtitle", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIViewport.prototype, "copyright", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UIViewport.prototype, "showMenu", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UIViewport.prototype, "showTaskbar", void 0);
        UIViewport = __decorate([
            aurelia_framework_1.customElement('ui-viewport'), 
            __metadata('design:paramtypes', [Element, ui_application_1.UIApplication, aurelia_framework_1.Container])
        ], UIViewport);
        return UIViewport;
    }());
    exports.UIViewport = UIViewport;
});
