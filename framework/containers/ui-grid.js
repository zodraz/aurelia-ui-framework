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
    var UIGrid = (function () {
        function UIGrid(el) {
            this.class = '';
            this.classes = '';
            if (el.hasAttribute('nowrap'))
                this.classes += ' ui-nowrap ';
            if (el.hasAttribute('stretch'))
                this.classes += ' ui-stretch ';
            if (el.hasAttribute('center'))
                this.classes += ' ui-center ';
            if (el.hasAttribute('start'))
                this.classes += ' ui-start ';
            if (el.hasAttribute('end'))
                this.classes += ' ui-end ';
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIGrid.prototype, "class");
        UIGrid = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-grid'), 
            __metadata('design:paramtypes', [Element])
        ], UIGrid);
        return UIGrid;
    })();
    exports.UIGrid = UIGrid;
});
