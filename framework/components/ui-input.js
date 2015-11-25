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
    var UIInput = (function () {
        function UIInput(element) {
            this.element = element;
            this.value = '';
            this.value1 = '';
            this.value2 = '';
            this.placeholder1 = '';
            this.placeholder2 = '';
            this.type = 'text';
            this.area = false;
            this.double = false;
            this.checkbox = false;
            this.checked = false;
            this.labelClasses = '';
            this.inputClasses = '';
            this.phoneCode = '';
            this.phoneNumber = '';
            this.phoneCountry = 'us';
            this.id = '';
            this.addonIcon = '';
            this.addonText = '';
            this.addonClass = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholder = '';
            this.readonly = false;
            this.disabled = false;
            this.phoneType = PhoneLib.TYPE.MOBILE;
            if (element.hasAttribute('clear'))
                this.inputClasses += ' ui-clear ';
            if (element.hasAttribute('required'))
                this.labelClasses += ' ui-required ';
            if (element.hasAttribute('readonly'))
                this.readonly = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('area'))
                this.area = true;
            if (element.hasAttribute('double'))
                this.double = true;
            if (element.hasAttribute('checkbox'))
                this.checkbox = true;
            if (element.hasAttribute('email'))
                this.type = 'email';
            if (element.hasAttribute('search'))
                this.type = 'search';
            if (element.hasAttribute('number'))
                this.type = 'number';
            if (element.hasAttribute('decimal'))
                this.type = 'decimal';
            if (element.hasAttribute('name'))
                this.type = 'name';
            if (element.hasAttribute('address'))
                this.type = 'address';
            if (element.hasAttribute('position'))
                this.type = 'position';
            if (element.hasAttribute('phone'))
                this.type = 'phone';
        }
        UIInput.prototype.bind = function () {
            if (this.type == 'position') {
                this.double = true;
                this.type = 'decimal';
            }
            if (this.placeholder) {
                _a = this.placeholder.split(','), this.placeholder1 = _a[0], this.placeholder2 = _a[1];
            }
            if (this.value) {
                this.valueChanged(this.value);
            }
            if (this.checkbox) {
                this.disabled = this.checked !== true;
            }
            if (this.type == 'phone') {
                this.addonText = '+' + PhoneLib.getDialingCode(this.phoneCountry || 'US');
                this.placeholder1 = PhoneLib.getExample(this.phoneCountry || 'US', this.phoneType, true);
                this.value1 = "" + this.phoneCode + this.phoneNumber;
                this._processValue();
            }
            var _a;
        };
        UIInput.prototype.attached = function () {
            var _this = this;
            $(this.inputGroup)
                .data('UIInput', this)
                .find('input.ui-input')[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
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
                    $(e.target).removeClass('x onX').val('');
                }
            })
                .keypress(function (e) {
                if (e.ctrlKey || e.altKey || e.metaKey)
                    return true;
                if (_this.type == 'name') {
                    return (/\w*/)
                        .test(String.fromCharCode(e.charCode));
                }
                else if (_this.type == 'address') {
                    return (/\w*/)
                        .test(String.fromCharCode(e.charCode));
                }
                else if (_this.type == 'number') {
                    return (/[0-9\-]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this.type == 'decimal') {
                    return (/[0-9\-\.]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this.type == 'email') {
                    return (/[A-Za-z0-9\-\.@_\+]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this.type == 'phone') {
                    return /[0-9]/.test(String.fromCharCode(e.charCode));
                }
                if (e.keyCode == 13)
                    $(e.target).trigger('change', e);
                return true;
            })
                .change(function (e) {
                var val = $(e.target).val().replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
                val = _this._format(val);
                $(e.target).val(val);
                if (_this.double && $(e.target).hasClass('ui-secondary'))
                    _this.value2 = val;
                else
                    _this.value1 = val;
                _this._processValue();
            });
        };
        UIInput.prototype.disabledChanged = function (newValue) {
            $(this.inputGroup).find('input.ui-input')
                .removeAttr('disabled')
                .attr(newValue !== false ? 'disabled' : 'D', '');
        };
        UIInput.prototype.readonlyChanged = function (newValue) {
            $(this.inputGroup).find('input.ui-input')
                .removeAttr('readonly')
                .attr(newValue !== false ? 'readonly' : 'R', '');
        };
        UIInput.prototype.checkedChanged = function (newValue) {
            if (this.checkbox) {
                this.disabled = newValue !== true;
            }
        };
        UIInput.prototype.valueChanged = function (newValue) {
            if (this.type == 'phone') {
            }
            else {
                _a = (newValue || '').split(','), this.value1 = _a[0], this.value2 = _a[1];
                this.value1 = this._format(this.value1 || '');
                this.value2 = this._format(this.value2 || '');
            }
            $(this.inputGroup).find('input.ui-primary')[this.value1 !== '' ? 'addClass' : 'removeClass']('x');
            $(this.inputGroup).find('input.ui-secondary')[this.value2 !== '' ? 'addClass' : 'removeClass']('x');
            var _a;
        };
        UIInput.prototype.countryChanged = function (newValue) {
            this.addonText = '+' + PhoneLib.getDialingCode(newValue || 'US');
            this.placeholder1 = PhoneLib.getExample(newValue || 'US', this.phoneType, true);
            this.value1 = PhoneLib.formatInput(this.value1 || '', newValue || 'US')
                .replace(/[\(\)\s\-]+$/, '');
            this._processValue();
        };
        UIInput.prototype._processValue = function () {
            this.value = this.double ? this.value1 + "," + this.value2 : this.value1;
            if (this.type == 'phone') {
                this.value1 = PhoneLib.formatInput(this.value1, this.phoneCountry || 'us');
                this.value = PhoneLib.format(this.value1, this.phoneCountry || 'us', PhoneLib.FORMAT.FULL);
                this._updatePhone();
            }
        };
        UIInput.prototype._format = function (val) {
            if (this.type == 'name') {
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
            else if (this.type == 'email') {
                val = val.toLowerCase();
            }
            else if (this.type == 'phone') {
                val = PhoneLib.formatInput(val || '', this.phoneCountry || 'US')
                    .replace(/[\(\)\s\-]+$/, '');
            }
            return val;
        };
        UIInput.prototype._updatePhone = function () {
            try {
                var info = PhoneLib.getNumberInfo(this.value1 || '', this.phoneCountry || 'US');
                this.phoneCode = info.areaCode;
                this.phoneNumber = isNaN(info.phone) ? '' : info.phone;
            }
            catch (e) {
                this.phoneCode = '';
                this.phoneNumber = '';
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInput.prototype, "id");
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
                changeHandler: 'valueChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.bindable({
                name: 'checked',
                attribute: 'checked',
                changeHandler: 'checkedChanged',
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
                changeHandler: 'countryChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: 'us'
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-input'), 
            __metadata('design:paramtypes', [Element])
        ], UIInput);
        return UIInput;
    })();
    exports.UIInput = UIInput;
});
