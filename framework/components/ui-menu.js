"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_router_1 = require("aurelia-router");
var ui_event_1 = require("../utils/ui-event");
var ui_application_1 = require("../utils/ui-application");
var UIMenu = (function () {
    function UIMenu(element, appState) {
        this.element = element;
        this.appState = appState;
        this.menu = [];
    }
    UIMenu.prototype.bind = function () {
        for (var i = 0, c = this.element.children; i < c.length; i++) {
            if (c[i].tagName.toLowerCase() === 'menu') {
                this.menu.push({
                    id: c[i].getAttribute('id'),
                    text: c[i].textContent,
                    icon: c[i].getAttribute('icon'),
                    href: c[i].getAttribute('href') || 'javascript:;',
                });
            }
            if (c[i].tagName.toLowerCase() === 'section')
                this.menu.push(c[i].textContent);
            if (c[i].tagName.toLowerCase() === 'divider')
                this.menu.push('-');
        }
    };
    UIMenu.prototype.isActive = function (route) {
        return route.isActive || route.href == location.hash ||
            location.hash.indexOf(route.config.redirect || 'QWER') > -1;
    };
    UIMenu.prototype.onClick = function ($event) {
        if (this.router)
            return true;
        $event.preventDefault();
        $event.cancelBubble = true;
        var link = getParentByClass($event.target, 'ui-menu-link', 'ui-menu');
        if (link !== null)
            ui_event_1.UIEvent.fireEvent('menu', this.element, link.dataset['id']);
        return false;
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
        __metadata('design:paramtypes', [Element, ui_application_1.UIApplication])
    ], UIMenu);
    return UIMenu;
}());
exports.UIMenu = UIMenu;
