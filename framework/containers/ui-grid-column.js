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
    var UIGridColumn = (function () {
        function UIGridColumn(el) {
            this._classes = '';
            this.class = '';
            this.size = 'auto';
            this.width = 'auto';
            this.minWidth = '0';
            if (el.hasAttribute('auto'))
                this.size = 'auto';
            if (el.hasAttribute('fill'))
                this.size = 'fill';
            if (el.hasAttribute('full'))
                this.size = 'full';
            if (el.hasAttribute('pad'))
                this._classes += ' ui-padding ';
            if (el.hasAttribute('row'))
                this._classes += ' ui-row ';
            if (el.hasAttribute('stretch'))
                this._classes += ' ui-flex-stretch ';
            if (el.hasAttribute('middle'))
                this._classes += ' ui-flex-middle ';
            if (el.hasAttribute('bottom'))
                this._classes += ' ui-flex-bottom ';
            if (el.hasAttribute('top'))
                this._classes += ' ui-flex-top ';
        }
        UIGridColumn.prototype.bind = function () {
            for (var _i = 0, _a = this.class.split(' '); _i < _a.length; _i++) {
                var cls = _a[_i];
                this._classes += " " + cls + " ";
            }
            for (var _b = 0, _c = this.size.split(' '); _b < _c.length; _b++) {
                var size = _c[_b];
                this._classes += " ui-col-" + size + " ";
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIGridColumn.prototype, "class");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIGridColumn.prototype, "size");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIGridColumn.prototype, "width");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIGridColumn.prototype, "minWidth");
        UIGridColumn = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-column'), 
            __metadata('design:paramtypes', [Element])
        ], UIGridColumn);
        return UIGridColumn;
    })();
    exports.UIGridColumn = UIGridColumn;
});
