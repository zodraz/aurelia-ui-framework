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
define(["require", "exports", "aurelia-framework", "../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_event_1) {
    var UIHeader = (function () {
        function UIHeader(element) {
            this.element = element;
            this.close = false;
            this.collapse = false;
            this.__theme = 'ui-default';
            if (element.hasAttribute('primary')) {
                this.__theme = 'ui-primary';
            }
            if (element.hasAttribute('secondary')) {
                this.__theme = 'ui-secondary';
            }
        }
        UIHeader.prototype.closeChanged = function (newValue) {
            this.close = (newValue !== false);
        };
        UIHeader.prototype.collapseChanged = function (newValue) {
            this.collapse = (newValue !== false);
        };
        UIHeader.prototype.fireClose = function () {
            ui_event_1.UIEvent.fireEvent('close', this.element);
        };
        UIHeader.prototype.fireCollapse = function () {
            ui_event_1.UIEvent.fireEvent('collapse', this.element);
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIHeader.prototype, "close");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIHeader.prototype, "collapse");
        UIHeader = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement("ui-header"), 
            __metadata('design:paramtypes', [Element])
        ], UIHeader);
        return UIHeader;
    })();
    exports.UIHeader = UIHeader;
});
