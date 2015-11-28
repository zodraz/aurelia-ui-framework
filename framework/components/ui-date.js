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
    var UIDate = (function () {
        function UIDate(element) {
            this.element = element;
            this._clear = false;
            this._checkbox = false;
            this._multiple = false;
            this._labelClasses = '';
            this._inputClasses = '';
            this.dt = '';
            this.value = '';
            this.checked = false;
            this.minDate = null;
            this.maxDate = null;
            this.format = 'DD/MM/YYYY';
            this.id = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholder = '';
            this.options = {};
            this.inline = false;
            this.disabled = false;
            if (element.hasAttribute('required'))
                this._labelClasses += ' ui-required ';
            if (element.hasAttribute('clear'))
                this._clear = true;
            if (element.hasAttribute('inline'))
                this.inline = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('checkbox'))
                this._checkbox = true;
            this.dt = ui_utils_1.moment().format('DD');
        }
        UIDate.prototype.attached = function () {
            if (this.inline && (this._input = this._inputinline))
                $(this._date).remove();
            else
                $(this._inputinline).remove();
            var opts = ui_utils_1._.merge(this.options, {
                useCurrent: false,
                collapse: false,
                keepOpen: false,
                showTodayButton: true,
                inline: this.inline,
                format: this.format,
                ignoreReadonly: true,
                icons: {
                    previous: 'ui-font-big fi-elegant-arrow85',
                    next: 'ui-font-big fi-elegant-mini7',
                    up: 'ui-font-large fi-elegant-little16',
                    down: 'ui-font-large fi-elegant-little9'
                }
            });
            if (this.minDate)
                opts.minDate = ui_utils_1.moment(this.minDate);
            if (this.maxDate)
                opts.maxDate = ui_utils_1.moment(this.maxDate);
            $(this._input).datetimepicker(opts);
        };
        UIDate.prototype.disabledChanged = function (newValue) {
            this._input
                .removeAttr('disabled')
                .attr(newValue !== false ? 'disabled' : 'D', '');
        };
        UIDate.prototype.inlineChanged = function (newValue) {
            this.inline = newValue !== false;
            if (this.inline)
                this._labelClasses += ' ui-hide ';
        };
        UIDate.prototype._valueChanged = function (newValue) {
        };
        UIDate.prototype._checkedChanged = function (newValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDate.prototype, "format");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDate.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDate.prototype, "buttonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDate.prototype, "buttonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDate.prototype, "placeholder");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDate.prototype, "options");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIDate.prototype, "inline");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIDate.prototype, "disabled");
        UIDate = __decorate([
            aurelia_framework_1.bindable({
                name: 'value',
                attribute: 'value',
                changeHandler: '_valueChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.bindable({
                name: 'checked',
                attribute: 'checked',
                changeHandler: '_checkedChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: false
            }),
            aurelia_framework_1.bindable({
                name: 'data-min',
                attribute: 'minDate',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: null
            }),
            aurelia_framework_1.bindable({
                name: 'data-max',
                attribute: 'maxDate',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: null
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-date'), 
            __metadata('design:paramtypes', [Element])
        ], UIDate);
        return UIDate;
    })();
    exports.UIDate = UIDate;
});
