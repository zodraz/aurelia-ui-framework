var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, ui_utils_1) {
    "use strict";
    var UIJsonEditor = (function () {
        function UIJsonEditor(element) {
            this.element = element;
            this.json = {};
            this.schema = {};
            this.key = '';
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UIJsonEditor.prototype, "json", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIJsonEditor.prototype, "schema", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIJsonEditor.prototype, "key", void 0);
        UIJsonEditor = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-json-editor'),
            aurelia_framework_1.inlineView('<template class="ui-json-editor"><ui-json-part schema.bind="schema" json.bind="json" key.bind="key"></ui-json-part></template>'), 
            __metadata('design:paramtypes', [Element])
        ], UIJsonEditor);
        return UIJsonEditor;
    }());
    exports.UIJsonEditor = UIJsonEditor;
    var UIJsonPart = (function () {
        function UIJsonPart(element) {
            this.element = element;
            this.json = {};
            this.parent = null;
            this.schema = {};
            this.key = '';
            this.index = -1;
            this.__collapsed = true;
        }
        UIJsonPart.prototype.bind = function () {
            this.__collapsed = this.parent != null;
        };
        UIJsonPart.prototype.toggle = function () {
            this.__collapsed = !this.__collapsed;
        };
        UIJsonPart.prototype.isObject = function (v) {
            return ui_utils_1._.isObject(v);
        };
        UIJsonPart.prototype.isArray = function (v) {
            return ui_utils_1._.isArray(v);
        };
        UIJsonPart.prototype.isBoolean = function (v) {
            return ui_utils_1._.isBoolean(v);
        };
        UIJsonPart.prototype.isNumber = function (v) {
            return ui_utils_1._.isNumber(v);
        };
        UIJsonPart.prototype.isSingleline = function (v) {
            return ui_utils_1._.isString(v) && v.indexOf('\n') == -1 && v.indexOf('<br') == -1;
        };
        UIJsonPart.prototype.isMultiline = function (v) {
            return ui_utils_1._.isString(v) && (v.indexOf('\n') > -1 || v.indexOf('<br') > -1);
        };
        UIJsonPart.prototype.getType = function (v) {
        };
        UIJsonPart.prototype.addJson = function () {
            if (ui_utils_1._.isArray(this.json)) {
                this.json.push(ui_utils_1._.cloneDeep(this.json[0]));
            }
        };
        UIJsonPart.prototype.removeJson = function () {
            if (ui_utils_1._.isArray(this.parent)) {
                this.parent.splice(this.index, 1);
            }
            else {
                delete this.parent[this.key];
                this.element.remove();
            }
        };
        UIJsonPart.prototype.removeProperty = function (key) {
            if (ui_utils_1._.isArray(this.json))
                this.json.splice(key, 1);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UIJsonPart.prototype, "json", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UIJsonPart.prototype, "parent", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIJsonPart.prototype, "schema", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIJsonPart.prototype, "key", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Number)
        ], UIJsonPart.prototype, "index", void 0);
        UIJsonPart = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-json-part'),
            aurelia_framework_1.useView('./ui-json-part.html'), 
            __metadata('design:paramtypes', [Element])
        ], UIJsonPart);
        return UIJsonPart;
    }());
    exports.UIJsonPart = UIJsonPart;
});
