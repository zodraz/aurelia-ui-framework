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
define(["require", "exports", "aurelia-framework", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, ui_utils_1) {
    var JsonPart = (function () {
        function JsonPart(element) {
            this.element = element;
            this.parent = null;
            this._collapsed = true;
        }
        JsonPart.prototype.bind = function () {
            this._collapsed = this.parent != null;
        };
        JsonPart.prototype.toggle = function () {
            this._collapsed = !this._collapsed;
        };
        JsonPart.prototype.isObject = function (v) {
            return ui_utils_1._.isObject(v);
        };
        JsonPart.prototype.isArray = function (v) {
            return ui_utils_1._.isArray(v);
        };
        JsonPart.prototype.isBoolean = function (v) {
            return ui_utils_1._.isBoolean(v);
        };
        JsonPart.prototype.isSingleline = function (v) {
            return ui_utils_1._.isString(v) && v.indexOf('\n') == -1 && v.indexOf('<br') == -1;
        };
        JsonPart.prototype.isMultiline = function (v) {
            return ui_utils_1._.isString(v) && (v.indexOf('\n') > -1 || v.indexOf('<br') > -1);
        };
        JsonPart.prototype.isNumber = function (v) {
            return ui_utils_1._.isNumber(v);
        };
        JsonPart.prototype.getType = function () {
            if (ui_utils_1._.isArray(this.json))
                return 'array';
            if (ui_utils_1._.isObject(this.json))
                return 'object';
            return '';
        };
        JsonPart.prototype.removeJson = function () {
            delete this.parent[this.key];
            $(this.element).remove();
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], JsonPart.prototype, "parent");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], JsonPart.prototype, "json");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], JsonPart.prototype, "key");
        JsonPart = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [Element])
        ], JsonPart);
        return JsonPart;
    })();
    exports.JsonPart = JsonPart;
});
