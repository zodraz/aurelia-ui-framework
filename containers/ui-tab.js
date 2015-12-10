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
    var UITabPanel = (function () {
        function UITabPanel(element) {
            this.element = element;
            this.tabs = [];
            this.activeTab = 0;
        }
        UITabPanel.prototype.bind = function () {
            var _this = this;
            $(this._tabs).children().each(function (i, t) {
                _this.tabs.push(t);
            });
        };
        UITabPanel.prototype.attached = function () {
            this.activeTabChanged(this.activeTab);
        };
        UITabPanel.prototype.activeTabChanged = function (newValue) {
            if (this.tabs[newValue]) {
                $(this._tabButtons).children().removeClass('ui-active');
                $(this._tabButtons).children("[data-index=\"" + newValue + "\"]").addClass('ui-active');
                $(this._tabs).children().removeClass('ui-active');
                $(this.tabs[newValue]).addClass('ui-active');
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UITabPanel.prototype, "activeTab");
        UITabPanel = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.useView('./ui-tab-panel.html'),
            aurelia_framework_1.customElement('ui-tab-panel'), 
            __metadata('design:paramtypes', [Element])
        ], UITabPanel);
        return UITabPanel;
    })();
    exports.UITabPanel = UITabPanel;
    var UITab = (function () {
        function UITab(element) {
            this.element = element;
            this.label = '';
            this.iconGlyph = '';
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITab.prototype, "label");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITab.prototype, "iconGlyph");
        UITab = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-tab'), 
            __metadata('design:paramtypes', [Element])
        ], UITab);
        return UITab;
    })();
    exports.UITab = UITab;
});
