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
define(["require", "exports", "aurelia-framework", "../utils/ui-event", "./ui-input"], function (require, exports, aurelia_framework_1, ui_event_1, ui_input_1) {
    var UIChosen = (function () {
        function UIChosen(element) {
            this.element = element;
            this._clear = false;
            this._focus = false;
            this._noLabel = false;
            this._checkbox = false;
            this._multiple = false;
            this._classes = '';
            this._labelClasses = '';
            this._inputClasses = '';
            this.value = '';
            this.checked = false;
            this.id = '';
            this.label = '';
            this.helpText = '';
            this.prefixIcon = '';
            this.prefixText = '';
            this.prefixClass = '';
            this.suffixIcon = '';
            this.suffixText = '';
            this.suffixClass = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholder = '';
            this.readonly = false;
            this.disabled = false;
            this.options = [];
            this.valueProperty = 'id';
            this.displayProperty = 'name';
            this._id = "chosen-" + ui_input_1.UIInput._id++;
            if (element.hasAttribute('required'))
                this._labelClasses += ' ui-required ';
            if (element.hasAttribute('clear'))
                this._clear = true;
            if (element.hasAttribute('nolabel'))
                this._noLabel = true;
            if (element.hasAttribute('readonly'))
                this.readonly = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('checkbox'))
                this._checkbox = true;
            if (element.hasAttribute('multiple'))
                this._multiple = true;
            if (element.hasAttribute('label-top'))
                this._classes = 'ui-label-top';
        }
        UIChosen.prototype.bind = function () {
            if (this.value) {
                this._valueChanged(this.value);
            }
            if (this._checkbox) {
                this.disabled = this.checked !== true;
            }
            else {
                this.disabled = this.disabled === true;
            }
        };
        UIChosen.prototype.attached = function () {
            var _this = this;
            $(this._select)
                .append($(this._options).children())
                .val(this.value)
                .attr(this._multiple ? 'multiple' : 'single', '')
                .chosen({
                width: '100%',
                search_contains: true,
                disable_search_threshold: 10,
                allow_single_deselect: this._clear,
                placeholder_text_single: this.placeholder,
                placeholder_text_multiple: this.placeholder
            })
                .change(function () {
                var v = $(_this._select).val();
                _this.value = (_this._multiple ? (v || ['']).join(',') : v);
                var model = _this.value;
                if (!_this._multiple) {
                    try {
                        model = _this._select.options[_this._select.selectedIndex].model || model;
                    }
                    catch (e) { }
                }
                ui_event_1.UIEvent.fireEvent('change', _this.element, model);
            });
            $(this._options).remove();
        };
        UIChosen.prototype.optionsChanged = function (newValue) {
            var _this = this;
            setTimeout(function () {
                $(_this._select)
                    .val(_this.value)
                    .chosen({
                    width: '100%',
                    search_contains: true,
                    disable_search_threshold: 10,
                    allow_single_deselect: _this._clear,
                    placeholder_text_single: _this.placeholder,
                    placeholder_text_multiple: _this.placeholder
                })
                    .change(function () {
                    var v = $(_this._select).val();
                    _this.value = (_this._multiple ? (v || ['']).join(',') : v);
                    var model = _this.value;
                    if (!_this._multiple) {
                        try {
                            model = _this._select.options[_this._select.selectedIndex].model || model;
                        }
                        catch (e) { }
                    }
                    ui_event_1.UIEvent.fireEvent('change', _this.element, model);
                })
                    .trigger('chosen:updated');
            }, 500);
        };
        UIChosen.prototype.disabledChanged = function (newValue) {
            $(this._select)
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(newValue !== false || (this._checkbox && !this.checked) ? 'disabled' : 'D', '')
                .trigger('chosen:updated');
            $(this._chosen).find('.ui-option-input')
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(newValue !== false ? 'disabled' : 'D', '');
        };
        UIChosen.prototype.readonlyChanged = function (newValue) {
            $(this._select)
                .removeAttr('R')
                .removeAttr('readonly')
                .attr(newValue !== false ? 'readonly' : 'R', '')
                .trigger('chosen:updated');
            $(this._chosen).find('.ui-option-input')
                .removeAttr('R')
                .removeAttr('readonly')
                .attr(newValue !== false ? 'readonly' : 'R', '');
        };
        UIChosen.prototype._checkedChanged = function (newValue) {
            if (this._checkbox) {
                $(this._select)
                    .removeAttr('D')
                    .removeAttr('disabled')
                    .attr(newValue === false ? 'disabled' : 'D', '')
                    .trigger('chosen:updated');
            }
        };
        UIChosen.prototype._valueChanged = function (newValue) {
            var _this = this;
            if (this._multiple)
                newValue = (newValue || '').split(',');
            setTimeout(function () {
                $(_this._select)
                    .val(newValue)
                    .trigger('chosen:updated');
            }, 200);
        };
        UIChosen.prototype._buttonClick = function ($event) {
            ui_event_1.UIEvent.fireEvent('click', this.element, this, this._select);
            return false;
        };
        UIChosen.prototype._keyup = function ($event) {
            if ($event.keyCode == 13) {
                $event.cancelBubble = true;
                $event.preventDefault();
                return false;
            }
            return true;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "label");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "helpText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "prefixIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "prefixText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "prefixClass");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "suffixIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "suffixText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "suffixClass");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "buttonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "buttonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIChosen.prototype, "placeholder");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIChosen.prototype, "readonly");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIChosen.prototype, "disabled");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIChosen.prototype, "options");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIChosen.prototype, "valueProperty");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIChosen.prototype, "displayProperty");
        UIChosen = __decorate([
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
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-chosen'), 
            __metadata('design:paramtypes', [Element])
        ], UIChosen);
        return UIChosen;
    })();
    exports.UIChosen = UIChosen;
});
