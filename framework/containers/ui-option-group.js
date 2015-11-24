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
    var UIOptionGroup = (function () {
        function UIOptionGroup(element) {
            this.element = element;
            this.value = '';
            this.label = '';
        }
        UIOptionGroup.prototype.attached = function () {
            var _this = this;
            setTimeout(function () {
                $(_this.optionGroup).find(".ui-radio .ui-option-input[value=\"" + _this.value + "\"]").prop('checked', true);
            }, 200);
        };
        UIOptionGroup.prototype.valueChanged = function (newValue) {
            $(this.optionGroup).find(".ui-radio .ui-option-input[value=\"" + newValue + "\"]").prop('checked', true);
        };
        UIOptionGroup.prototype.checkChanged = function ($event) {
            this.value = $event.data;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIOptionGroup.prototype, "label");
        UIOptionGroup = __decorate([
            aurelia_framework_1.bindable({
                name: 'value',
                attribute: 'value',
                changeHandler: 'valueChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-option-group'), 
            __metadata('design:paramtypes', [Element])
        ], UIOptionGroup);
        return UIOptionGroup;
    })();
    exports.UIOptionGroup = UIOptionGroup;
});
