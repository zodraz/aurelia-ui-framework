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
define(["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    var UIApp = (function () {
        function UIApp() {
            this.thisYear = new Date().getFullYear();
            $.notify.addStyle('ui', {
                html: "<div><div data-notify-html></div></div>"
            });
        }
        UIApp.prototype.showMenu = function ($event) {
            $event.stopPropagation();
            $(this.uiApp).addClass('show-menu');
        };
        UIApp.prototype.hideMenu = function ($event) {
            if (!$($event.target).closest('button').hasClass('ui-app-menu-handle')) {
                $(this.uiApp).removeClass('show-menu');
            }
            $('.ui-dropdown').removeClass('ui-dropdown');
            return true;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIApp.prototype, "title");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIApp.prototype, "subTitle");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', aurelia_router_1.Router)
        ], UIApp.prototype, "router");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIApp.prototype, "authenticated");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIApp.prototype, "startYear");
        UIApp = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement("ui-app"), 
            __metadata('design:paramtypes', [])
        ], UIApp);
        return UIApp;
    })();
    exports.UIApp = UIApp;
});
