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
define(["require", "exports", "aurelia-framework", "../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_event_1) {
    var UISwitch = (function () {
        function UISwitch(element) {
            this.element = element;
            this.id = '';
            this.labelOn = 'On';
            this.labelOff = 'Off';
            this.theme = 'default';
            this.disabled = false;
            if (element.hasAttribute('check'))
                this.checked = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('primary'))
                this.theme = 'primary';
            if (element.hasAttribute('info'))
                this.theme = 'info';
            if (element.hasAttribute('danger'))
                this.theme = 'danger';
            if (element.hasAttribute('success'))
                this.theme = 'success';
            if (element.hasAttribute('warning'))
                this.theme = 'warning';
            if (element.hasAttribute('ampm'))
                this.theme = 'ampm';
            if (element.hasAttribute('gender'))
                this.theme = 'gender';
            if (element.hasAttribute('priority'))
                this.theme = 'priority';
            this.element.UIElement = this;
        }
        UISwitch.prototype.attached = function () {
            $(this._switch)
                .find('input')
                .attr(this.disabled !== false ? 'disabled' : 'D', '');
            $(this._switch).find('label').last()
                .attr(this.disabled !== false ? 'disabled' : 'D', '');
        };
        UISwitch.prototype.disabledChanged = function (newValue) {
            $(this._switch).find('input')
                .removeAttr('D')
                .attr(newValue !== false ? 'disabled' : 'D', '');
            $(this._switch).find('label').last()
                .removeAttr('D')
                .attr(this.disabled !== false ? 'disabled' : 'D', '');
        };
        UISwitch.prototype._valueChanged = function (newValue) {
            ui_event_1.UIEvent.fireEvent('change', this.element, newValue, this._switch);
        };
        UISwitch.prototype._focus = function () {
            $(this._switch).children().first().addClass('ui-focus');
        };
        UISwitch.prototype._blur = function () {
            $(this._switch).children().first().removeClass('ui-focus');
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UISwitch.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UISwitch.prototype, "labelOn");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UISwitch.prototype, "labelOff");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UISwitch.prototype, "theme");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UISwitch.prototype, "disabled");
        UISwitch = __decorate([
            aurelia_framework_1.bindable({
                name: 'checked',
                attribute: 'checked',
                changeHandler: '_valueChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: false
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-switch'), 
            __metadata('design:paramtypes', [Element])
        ], UISwitch);
        return UISwitch;
    })();
    exports.UISwitch = UISwitch;
});
