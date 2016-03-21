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
    var UISidebar = (function () {
        function UISidebar() {
            this.width = '220px';
        }
        UISidebar.prototype.bind = function (context) {
            this.$parent = context;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UISidebar.prototype, "width");
        UISidebar = __decorate([
            aurelia_framework_1.customElement("ui-sidebar"), 
            __metadata('design:paramtypes', [])
        ], UISidebar);
        return UISidebar;
    })();
    exports.UISidebar = UISidebar;
});
