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
    var UIRibbon = (function () {
        function UIRibbon(element) {
            this.element = element;
            this.theme = 'default';
            this.posH = 'r';
            this.posV = 't';
            if (element.hasAttribute('primary'))
                this.theme = 'primary';
            if (element.hasAttribute('secondary'))
                this.theme = 'secondary';
            if (element.hasAttribute('info'))
                this.theme = 'info';
            if (element.hasAttribute('danger'))
                this.theme = 'danger';
            if (element.hasAttribute('success'))
                this.theme = 'success';
            if (element.hasAttribute('warning'))
                this.theme = 'warning';
            if (element.hasAttribute('top'))
                this.posV = 't';
            if (element.hasAttribute('bottom'))
                this.posV = 'b';
            if (element.hasAttribute('left'))
                this.posH = 'l';
            if (element.hasAttribute('right'))
                this.posH = 'r';
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIRibbon.prototype, "class");
        UIRibbon = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-ribbon'), 
            __metadata('design:paramtypes', [Element])
        ], UIRibbon);
        return UIRibbon;
    })();
    exports.UIRibbon = UIRibbon;
});
