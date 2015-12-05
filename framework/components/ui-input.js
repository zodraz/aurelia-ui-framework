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
    var UIInput = (function () {
        function UIInput(element) {
            this.element = element;
            this._value1 = '';
            this._value2 = '';
            this._placeholder1 = '';
            this._placeholder2 = '';
            this._type = 'text';
            this._area = false;
            this._focus = false;
            this._noLabel = false;
            this._double = false;
            this._checkbox = false;
            this._classes = '';
            this._labelClasses = '';
            this._inputClasses = '';
            this.value = '';
            this.checked = false;
            this.phoneCode = '';
            this.phoneNumber = '';
            this.phoneCountry = 'us';
            this.id = '';
            this.dir = 'ltr';
            this.addonIcon = '';
            this.addonText = '';
            this.addonClass = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholder = '';
            this.readonly = false;
            this.disabled = false;
            this.phoneType = PhoneLib.TYPE.MOBILE;
            this._id = "input-" + UIInput._id++;
            if (element.hasAttribute('clear'))
                this._inputClasses += ' ui-clear ';
            if (element.hasAttribute('required'))
                this._labelClasses += ' ui-required ';
            if (element.hasAttribute('readonly'))
                this.readonly = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('area'))
                this._area = true;
            if (element.hasAttribute('nolabel'))
                this._noLabel = true;
            if (element.hasAttribute('double'))
                this._double = true;
            if (element.hasAttribute('checkbox'))
                this._checkbox = true;
            if (element.hasAttribute('label-top'))
                this._classes = 'ui-label-top';
            if (element.hasAttribute('password'))
                this._type = 'password';
            if (element.hasAttribute('email'))
                this._type = 'email';
            if (element.hasAttribute('search'))
                this._type = 'search';
            if (element.hasAttribute('number'))
                this._type = 'number';
            if (element.hasAttribute('decimal'))
                this._type = 'decimal';
            if (element.hasAttribute('name'))
                this._type = 'name';
            if (element.hasAttribute('address'))
                this._type = 'address';
            if (element.hasAttribute('position'))
                this._type = 'position';
            if (element.hasAttribute('phone'))
                this._type = 'phone';
            $(this.element).data('UIInput', this);
        }
        UIInput.prototype.bind = function () {
            if (this._type == 'position') {
                this._double = true;
                this._type = 'decimal';
            }
            if (this.placeholder) {
                _a = this.placeholder.split(','), this._placeholder1 = _a[0], this._placeholder2 = _a[1];
            }
            if (this._checkbox) {
                this.disabled = this.checked !== true;
            }
            if (this._type == 'phone') {
                this.addonText = '+' + PhoneLib.getDialingCode(this.phoneCountry || 'US');
                this._placeholder1 = PhoneLib.getExample(this.phoneCountry || 'US', this.phoneType, true);
                this._value1 = "" + this.phoneCode + this.phoneNumber;
                this._processValue();
            }
            else if (this.value) {
                this._valueChanged(this.value);
                this._processValue();
            }
            var _a;
        };
        UIInput.prototype.attached = function () {
            var _this = this;
            this._input = $(this._inputGroup).find('.ui-input');
            if (this._type == 'password') {
                this._input.attr('type', 'password');
            }
            else if (this._type == 'email') {
                this._input.attr('type', 'email');
            }
            else if (this._type == 'search') {
                this._input.attr('type', 'search');
            }
            else if (this._type == 'phone') {
                this._input.attr('type', 'tel');
            }
            else if (this._type == 'number' || this._type == 'decimal' || this._type == 'position') {
                this._input.attr('type', 'number');
            }
            this._input[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
                .attr(this.readonly !== false ? 'readonly' : 'R', '')
                .attr(this.disabled !== false ? 'disabled' : 'D', '')
                .on('input', function (e) {
                if (!_this.readonly && !_this.disabled) {
                    var el = $(e.target);
                    el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
                }
                _this._processValue();
            })
                .on('mousemove', function (e) {
                if ($(e.target).hasClass('x'))
                    $(e.target)[(e.target.offsetWidth - 18 < e.clientX - e.target.getBoundingClientRect().left) ? 'addClass' : 'removeClass']('onX');
            })
                .on('touchstart mousedown', function (e) {
                if (e.button == 0 && $(e.target).hasClass('onX')) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    $(e.target).removeClass('x onX').val('').trigger('change');
                }
            })
                .keypress(function (e) {
                if (e.ctrlKey || e.altKey || e.metaKey)
                    return true;
                if (_this._type == 'name') {
                    return (/\w*/)
                        .test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'address') {
                    return (/\w*/)
                        .test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'number') {
                    return (/[0-9\-]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'decimal' || _this._type == 'position') {
                    return (/[0-9\-\.]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'email') {
                    return (/[A-Za-z0-9\-\.@_\+]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'phone') {
                    return /[0-9]/.test(String.fromCharCode(e.charCode));
                }
                if (e.keyCode == 13) {
                    $(e.target).trigger('change', e);
                    return false;
                }
                return true;
            })
                .change(function (e) {
                var val = $(e.target).val().replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
                val = _this._format(val);
                $(e.target).val(val);
                if (_this._double && $(e.target).hasClass('ui-secondary'))
                    _this._value2 = val;
                else
                    _this._value1 = val;
                _this._processValue();
            });
        };
        UIInput.prototype.disabledChanged = function (newValue) {
            this._input
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(newValue !== false ? 'disabled' : 'D', '');
        };
        UIInput.prototype.readonlyChanged = function (newValue) {
            this._input
                .removeAttr('R')
                .removeAttr('readonly')
                .attr(newValue !== false ? 'readonly' : 'R', '');
        };
        UIInput.prototype._checkedChanged = function (newValue) {
            if (this._checkbox) {
                this.disabled = newValue !== true;
            }
        };
        UIInput.prototype._valueChanged = function (newValue) {
            if (this._type == 'phone') {
            }
            else {
                _a = (newValue || '').split(','), this._value1 = _a[0], this._value2 = _a[1];
                this._value1 = this._format(this._value1 || '');
                this._value2 = this._format(this._value2 || '');
            }
            $(this._inputGroup).find('input.ui-primary')[this._value1 !== '' ? 'addClass' : 'removeClass']('x');
            $(this._inputGroup).find('input.ui-secondary')[this._value2 !== '' ? 'addClass' : 'removeClass']('x');
            var _a;
        };
        UIInput.prototype._countryChanged = function (newValue) {
            this.addonText = '+' + PhoneLib.getDialingCode(newValue || 'US');
            this._placeholder1 = PhoneLib.getExample(newValue || 'US', this.phoneType, true);
            this._value1 = PhoneLib.formatInput(this._value1 || '', newValue || 'US')
                .replace(/[\(\)\s\-]+$/, '');
            this._processValue();
        };
        UIInput.prototype._processValue = function () {
            this.value = this._double ? this._value1 + "," + this._value2 : this._value1;
            if (this._type == 'phone') {
                this._value1 = PhoneLib.formatInput(this._value1, this.phoneCountry || 'us');
                this.value = PhoneLib.format(this._value1, this.phoneCountry || 'us', PhoneLib.FORMAT.FULL);
                this._updatePhone();
            }
        };
        UIInput.prototype._format = function (val) {
            if (this._type == 'name') {
                val = val.replace(new RegExp('[' + 'A-Za-z' + ']+(?=[\'\\.\\-&\\s]*)', 'g'), function (txt) {
                    if (/^[ivxlcm]+$/.test(txt.toLowerCase()))
                        return txt.toUpperCase();
                    if (txt.toLowerCase().indexOf("mc") == 0)
                        return txt.substr(0, 1).toUpperCase() + txt.substr(1, 1).toLowerCase() + txt.substr(2, 1).toUpperCase() + txt.substr(3);
                    if (txt.toLowerCase().indexOf("mac") == 0)
                        return txt.substr(0, 1).toUpperCase() + txt.substr(1, 2).toLowerCase() + txt.substr(3, 1).toUpperCase() + txt.substr(4);
                    return txt.charAt(0).toUpperCase() + txt.substr(1);
                });
            }
            else if (this._type == 'email') {
                val = val.toLowerCase();
            }
            else if (this._type == 'phone') {
                val = PhoneLib.formatInput(val || '', this.phoneCountry || 'US')
                    .replace(/[\(\)\s\-]+$/, '');
            }
            return val;
        };
        UIInput.prototype._updatePhone = function () {
            try {
                var info = PhoneLib.getNumberInfo(this._value1 || '', this.phoneCountry || 'US');
                this.phoneCode = info.areaCode;
                this.phoneNumber = isNaN(info.phone) ? '' : info.phone + '';
            }
            catch (e) {
                this.phoneCode = '';
                this.phoneNumber = '';
            }
        };
        UIInput.prototype._buttonClick = function ($event) {
            $event.cancelBubble = true;
            ui_event_1.UIEvent.fireEvent('click', this.element, this, this._input);
        };
        UIInput._id = 0;
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "dir");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "addonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "addonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "addonClass");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "buttonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "buttonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "placeholder");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIInput.prototype, "readonly");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIInput.prototype, "disabled");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], UIInput.prototype, "phoneType");
        UIInput = __decorate([
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
                name: 'phoneCode',
                attribute: 'phone-code',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.bindable({
                name: 'phoneNumber',
                attribute: 'phone-number',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.bindable({
                name: 'phoneCountry',
                attribute: 'phone-country',
                changeHandler: '_countryChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: 'us'
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-input'), 
            __metadata('design:paramtypes', [Element])
        ], UIInput);
        return UIInput;
    })();
    exports.UIInput = UIInput;
});
