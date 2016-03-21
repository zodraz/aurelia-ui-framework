var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var UIRow = (function () {
        function UIRow(element) {
            this.element = element;
        }
        UIRow.prototype.bind = function () {
            if (this.element.hasAttribute('column')) {
                this.element.classList.add('ui-column-row');
            }
            else {
                this.element.classList.add('ui-row');
            }
        };
        UIRow = __decorate([
            aurelia_framework_1.customElement('ui-row'),
            aurelia_framework_1.inlineView('<template><content></content></template>'), 
            __metadata('design:paramtypes', [Element])
        ], UIRow);
        return UIRow;
    }());
    exports.UIRow = UIRow;
    var UIColumn = (function () {
        function UIColumn(element) {
            this.element = element;
            this.size = '';
            this.width = 'none';
        }
        UIColumn.prototype.bind = function () {
            if (this.element.hasAttribute('fill')) {
                this.element.classList.add('ui-col-fill');
            }
            else if (this.element.hasAttribute('full')) {
                this.element.classList.add('ui-col-full');
            }
            else if (isEmpty(this.size)) {
                this.element.classList.add('ui-col-auto');
            }
            if (this.element.hasAttribute('padded'))
                this.element.classList.add('ui-pad-all');
            for (var _i = 0, _a = this.size.split(' '); _i < _a.length; _i++) {
                var size = _a[_i];
                this.element.classList.add("ui-col-" + size);
            }
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIColumn.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIColumn.prototype, "width", void 0);
        UIColumn = __decorate([
            aurelia_framework_1.customElement('ui-column'),
            aurelia_framework_1.inlineView("<template class=\"ui-column\" css.bind=\"{'flex-basis': width}\"><content></content></template>"), 
            __metadata('design:paramtypes', [Element])
        ], UIColumn);
        return UIColumn;
    }());
    exports.UIColumn = UIColumn;
});
