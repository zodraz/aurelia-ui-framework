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
define(["require", "exports", "aurelia-framework", "../utils/ui-utils", "./ui-input"], function (require, exports, aurelia_framework_1, ui_utils_1, ui_input_1) {
    var UIDate = (function () {
        function UIDate(element) {
            this.element = element;
            this._clear = false;
            this._focus = false;
            this._noLabel = false;
            this._checkbox = false;
            this._multiple = false;
            this._classes = '';
            this._labelClasses = '';
            this._inputClasses = '';
            this.dt = '';
            this.value = '';
            this.checked = false;
            this.minDate = null;
            this.maxDate = null;
            this.range = false;
            this.inline = false;
            this.format = 'DD/MM/YYYY';
            this.id = '';
            this.helpText = '';
            this.addonText = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholder = '';
            this.options = {};
            this.disabled = false;
            this._id = "date-" + ui_input_1.UIInput._id++;
            if (element.hasAttribute('required'))
                this._labelClasses += ' ui-required ';
            if (element.hasAttribute('nolabel'))
                this._noLabel = true;
            if (element.hasAttribute('clear'))
                this._clear = true;
            if (element.hasAttribute('range')) {
                this.range = true;
                this.inline = false;
                this.format = 'DD/MM/YYYY';
            }
            else if (element.hasAttribute('inline')) {
                this.inline = true;
                this._noLabel = true;
                this.range = false;
            }
            if (element.hasAttribute('checkbox'))
                this._checkbox = true;
            if (element.hasAttribute('label-top'))
                this._classes = 'ui-label-top';
            this.dt = ui_utils_1.moment().format('DD');
        }
        UIDate.prototype.bind = function () {
            if (this.element.hasAttribute('disabled'))
                this.disabled = true;
        };
        UIDate.prototype.attached = function () {
            if (this.inline && (this._inputStart = this._inputInline))
                $(this._date).parent().remove();
            else
                $(this._inputInline).remove();
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
            if (this.range) {
                var optStart = ui_utils_1._.merge({}, opts);
                var optEnd = ui_utils_1._.merge({}, opts);
                if (this.minDate)
                    optStart.minDate = ui_utils_1.moment(this.minDate);
                if (this.maxDate)
                    optStart.maxDate = ui_utils_1.moment(this.maxDate);
                if (this.minDate)
                    optEnd.minDate = ui_utils_1.moment(this.minDate);
                if (this.maxDate)
                    optEnd.maxDate = ui_utils_1.moment(this.maxDate);
                if (this.value && this.value.start && this.value.end) {
                    optStart.date = ui_utils_1.moment(this.value.start);
                    optEnd.date = ui_utils_1.moment(this.value.end);
                    optStart.maxDate = optEnd.date;
                    optEnd.minDate = optStart.date;
                }
                this._initPicker(this._inputStart, optStart, true);
                this._initPicker(this._inputEnd, optEnd, false);
            }
            else {
                if (this.minDate)
                    opts.minDate = ui_utils_1.moment(this.minDate);
                if (this.maxDate)
                    opts.maxDate = ui_utils_1.moment(this.maxDate);
                if (this.value)
                    opts.date = ui_utils_1.moment(this.value);
                this._initPicker(this._inputStart, opts);
            }
            if (this._checkbox) {
                this._checkedChanged(this.checked === true);
            }
        };
        UIDate.prototype._initPicker = function (el, options, primary) {
            var _this = this;
            $(el).datetimepicker(options)
                .on('dp.change', function (e) {
                if (_this.range) {
                    if (primary) {
                        _this.value.start = e.date.toISOString();
                        $(_this._inputEnd).data('DateTimePicker').minDate(e.date);
                    }
                    if (!primary) {
                        _this.value.end = e.date.toISOString();
                        $(_this._inputStart).data('DateTimePicker').maxDate(e.date);
                    }
                }
                else {
                    _this.value = e.date.toISOString();
                }
            });
        };
        UIDate.prototype.disabledChanged = function (newValue) {
            this.disabled = newValue === 'true' || newValue === true;
            this.makeBusy(newValue);
        };
        UIDate.prototype.makeBusy = function (isBusy) {
            $(this._inputStart)
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
            if (this._inputEnd) {
                $(this._inputEnd)
                    .removeAttr('D')
                    .removeAttr('disabled')
                    .attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
            }
            $(this._optionInput)
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(isBusy === true || this.disabled === true ? 'disabled' : 'D', '');
        };
        UIDate.prototype._valueChanged = function (newValue) {
            if ($(this._inputStart).data('DateTimePicker')) {
                if (this.range) {
                    $(this._inputStart).data('DateTimePicker').date(newValue.start || null);
                    $(this._inputEnd).data('DateTimePicker').date(newValue.end || null);
                }
                else if (!this.range) {
                    $(this._inputStart).data('DateTimePicker').date(newValue || null);
                }
            }
        };
        UIDate.prototype._checkedChanged = function (newValue) {
            if (this._checkbox) {
                $(this._inputStart)
                    .removeAttr('D')
                    .removeAttr('disabled')
                    .attr(newValue === false ? 'disabled' : 'D', '');
                if (this._inputEnd) {
                    $(this._inputEnd)
                        .removeAttr('D')
                        .removeAttr('disabled')
                        .attr(newValue === false ? 'disabled' : 'D', '');
                }
            }
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
        ], UIDate.prototype, "helpText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDate.prototype, "addonText");
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
            __metadata('design:type', Object)
        ], UIDate.prototype, "disabled");
        UIDate = __decorate([
            aurelia_framework_1.bindable({
                name: 'value',
                attribute: 'value',
                changeHandler: '_valueChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay
            }),
            aurelia_framework_1.bindable({
                name: 'checked',
                attribute: 'checked',
                changeHandler: '_checkedChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: false
            }),
            aurelia_framework_1.bindable({
                name: 'minDate',
                attribute: 'date-min',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: null
            }),
            aurelia_framework_1.bindable({
                name: 'maxDate',
                attribute: 'date-max',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: null
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-date'), 
            __metadata('design:paramtypes', [Element])
        ], UIDate);
        return UIDate;
    })();
    exports.UIDate = UIDate;
});
