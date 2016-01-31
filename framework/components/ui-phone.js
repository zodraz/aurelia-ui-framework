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
    var UIPhone = (function () {
        function UIPhone(element) {
            this.element = element;
            this._focus = false;
            this._noLabel = false;
            this._checkbox = false;
            this._phoneFull = false;
            this._value = '';
            this._classes = '';
            this._labelClasses = '';
            this._inputClasses = '';
            this.value = '';
            this.checked = false;
            this.addonClass = '';
            this.addonIcon = '';
            this.addonText = '';
            this.phoneCode = '';
            this.phoneNumber = '';
            this.phoneExt = '';
            this.phoneCountry = 'us';
            this.placeholder = '';
            this.id = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.readonly = false;
            this.disabled = false;
            this.phoneType = PhoneLib.TYPE.MOBILE;
            this._id = "phone-" + UIPhone._id++;
            if (element.hasAttribute('clear'))
                this._inputClasses += ' ui-clear ';
            if (element.hasAttribute('required'))
                this._labelClasses += ' ui-required ';
            if (element.hasAttribute('readonly'))
                this.readonly = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('nolabel'))
                this._noLabel = true;
            if (element.hasAttribute('checkbox'))
                this._checkbox = true;
            if (element.hasAttribute('label-top'))
                this._classes = 'ui-label-top';
            if (element.hasAttribute('full')) {
                this._phoneFull = true;
                this.addonClass = 'ui-flag';
            }
        }
        UIPhone.prototype.bind = function () {
            if (!this._phoneFull) {
                this.addonText = '+' + PhoneLib.getDialingCode(this.phoneCountry || 'US');
                this.placeholder = PhoneLib.getExample(this.phoneCountry || 'US', this.phoneType, true);
                this._value = "" + this.phoneCode + this.phoneNumber + this.phoneExt;
            }
            this.processValue();
        };
        UIPhone.prototype.attached = function () {
            var _this = this;
            this._input = $(this._inputGroup).find('.ui-input');
            this._input[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
                .attr(this.readonly !== false ? 'readonly' : 'R', '')
                .attr(this.disabled !== false ? 'disabled' : 'D', '')
                .on('input', function (e) {
                if (!_this.readonly && !_this.disabled) {
                    var el = $(e.target);
                    el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
                }
                _this.processValue();
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
                if (e.ctrlKey || e.altKey || e.metaKey || e.charCode == 0)
                    return true;
                if ((e.which || e.keyCode) == 13) {
                    $(e.target).trigger('change', e);
                    return false;
                }
                return /[0-9]/.test(String.fromCharCode(e.charCode));
            })
                .change(function (e) {
                _this.processValue();
            });
        };
        UIPhone.prototype.disabledChanged = function (newValue) {
            if (!this._input)
                return;
            this._input
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(newValue !== false || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
        };
        UIPhone.prototype.readonlyChanged = function (newValue) {
            if (!this._input)
                return;
            this._input
                .removeAttr('R')
                .removeAttr('readonly')
                .attr(newValue !== false ? 'readonly' : 'R', '');
        };
        UIPhone.prototype._checkedChanged = function (newValue) {
            if (this._checkbox) {
                this.disabled = newValue !== true;
            }
        };
        UIPhone.prototype._countryChanged = function (newValue) {
            this.placeholder = PhoneLib.getExample(newValue, this.phoneType);
        };
        UIPhone.prototype._valueChanged = function (newValue) {
            this.processValue();
            $(this._inputGroup).find('input.ui-primary')[this.value !== '' ? 'addClass' : 'removeClass']('x');
        };
        UIPhone.prototype.processValue = function () {
            if (!this._phoneFull) {
                this._value = PhoneLib.formatInput(this._value, this.phoneCountry || 'us', false, true);
                this.value = PhoneLib.format(this._value, this.phoneCountry || 'us', PhoneLib.FORMAT.FULL);
                this.updatePhone();
            }
            else {
                if (!/^\+/.test(this._value))
                    this._value = '+' + this._value;
                this._value = PhoneLib.formatInput(this._value, '', false, true);
                this.value = PhoneLib.format(this._value, '', PhoneLib.FORMAT.FULL);
                this.addonIcon = PhoneLib.getIso2Code(this.value) || 'US';
            }
        };
        UIPhone.prototype.updatePhone = function () {
            try {
                if (!this._phoneFull) {
                    var info = PhoneLib.getNumberInfo(this._value || '', this.phoneCountry || 'US');
                    this.phoneCode = info.areaCode;
                    this.phoneNumber = isNaN(info.phone) ? '' : info.phone + '';
                    this.phoneExt = info.ext;
                }
            }
            catch (e) {
                this.phoneCode = '';
                this.phoneNumber = '';
                this.phoneExt = '';
            }
        };
        UIPhone._id = 0;
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIPhone.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIPhone.prototype, "buttonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIPhone.prototype, "buttonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIPhone.prototype, "readonly");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIPhone.prototype, "disabled");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], UIPhone.prototype, "phoneType");
        UIPhone = __decorate([
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
                name: 'phoneExt',
                attribute: 'phone-ext',
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
            aurelia_framework_1.customElement('ui-phone'), 
            __metadata('design:paramtypes', [Element])
        ], UIPhone);
        return UIPhone;
    })();
    exports.UIPhone = UIPhone;
});
