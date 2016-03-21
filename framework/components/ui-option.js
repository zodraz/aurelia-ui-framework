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
define(["require", "exports", "aurelia-framework", "./ui-input"], function (require, exports, aurelia_framework_1, ui_input_1) {
    var UIOption = (function () {
        function UIOption(element) {
            this.element = element;
            this._type = '';
            this._classes = '';
            this._checkbox = true;
            this.checked = false;
            this.id = '';
            this.name = '';
            this.value = '';
            this.disabled = false;
            this._id = "option-" + ui_input_1.UIInput._id++;
            if (element.hasAttribute('radio'))
                this._checkbox = false;
        }
        UIOption.prototype.bind = function () {
            if (this.element.hasAttribute('disabled'))
                this.disabled = true;
            this._type = this._checkbox ? 'checkbox' : 'radio';
            this._classes = this._checkbox ? 'ui-checkbox' : 'ui-radio';
        };
        UIOption.prototype.attached = function () {
            $(this._option).data('UIOption', this);
            $(this._input).attr(this.disabled === true ? 'disabled' : 'D', '');
        };
        UIOption.prototype.disabledChanged = function (newValue) {
            this.disabled = newValue === 'true' || newValue === true;
            this.makeBusy(newValue);
        };
        UIOption.prototype.makeBusy = function (newValue) {
            $(this._input)
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(newValue === true || this.disabled === true ? 'disabled' : 'D', '');
        };
        UIOption.prototype._checkChanged = function ($event) {
            $event.detail = this.checked;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIOption.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIOption.prototype, "name");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIOption.prototype, "value");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIOption.prototype, "disabled");
        UIOption = __decorate([
            aurelia_framework_1.bindable({
                name: 'checked',
                attribute: 'checked',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: false
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-option'), 
            __metadata('design:paramtypes', [Element])
        ], UIOption);
        return UIOption;
    })();
    exports.UIOption = UIOption;
});
