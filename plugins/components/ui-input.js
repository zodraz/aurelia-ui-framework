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
            this.double = false;
            this.checkbox = false;
            this.checked = false;
            this.labelClasses = '';
            this.inputClasses = '';
            this.id = '';
            this.addonIcon = '';
            this.addonText = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholder = '';
            this.readonly = false;
            this.disabled = false;
            if (element.hasAttribute('clear'))
                this.inputClasses += ' ui-clear ';
            if (element.hasAttribute('required'))
                this.labelClasses += ' ui-required ';
            if (element.hasAttribute('readonly'))
                this.readonly = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('double'))
                this.double = true;
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
        }
        UIInput.prototype.bind = function () {
            if (this.type == 'position') {
                this.double = true;
                this.type = 'decimal';
            }
            if (this.double && this.placeholder) {
                _a = this.placeholder.split(','), this.placeholder1 = _a[0], this.placeholder2 = _a[1];
            }
            if (this.double && this.value) {
                _b = this.value.split(','), this.value1 = _b[0], this.value2 = _b[1];
            }
            if (this.value)
                this.checked = true;
            if (this.checkbox) {
                this.disabled = this.checked !== true;
            }
            var _a, _b;
        };
        UIInput.prototype.attached = function () {
            var _this = this;
            $(this.inputGroup)
                .data('UIInput', this)
                .find('input.ui-input')[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
                .attr(this.readonly !== false ? 'readonly' : 'D', '')
                .attr(this.disabled !== false ? 'disabled' : 'D', '')
                .on('input', function (e) {
                if (!_this.readonly && !_this.disabled) {
                    var el = $(e.target);
                    el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
                }
                _this.value = _this.double ? _this.value1 + "," + _this.value2 : _this.value1;
            })
                .on('mousemove', function (e) {
                if ($(e.target).hasClass('x'))
                    $(e.target)[(e.target.offsetWidth - 18 < e.clientX - e.target.getBoundingClientRect().left) ? 'addClass' : 'removeClass']('onX');
            })
                .on('touchstart mousedown', function (e) {
                if ($(e.target).hasClass('onX')) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    $(e.target).removeClass('x onX').val('');
                }
            })
                .keypress(function (e) {
                console.log('fff');
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
                if (e.keyCode == 13)
                    $(e.target).trigger('change', e);
                return true;
            })
                .change(function (e) {
                var val = $(e.target).val().replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
                if (_this.type == 'name') {
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
                else if (_this.type == 'email') {
                    val = val.toLowerCase();
                }
                $(e.target).val(val);
                if (_this.double && $(e.target).hasClass('ui-secondary'))
                    _this.value2 = val;
                else
                    _this.value1 = val;
                _this.value = _this.double ? _this.value1 + "," + _this.value2 : _this.value1;
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
                .attr(newValue !== false ? 'readonly' : 'D', '');
        };
        UIInput.prototype.checkedChanged = function (newValue) {
            if (this.checkbox) {
                this.disabled = newValue !== true;
            }
        };
        UIInput.prototype.valueChanged = function (newValue) {
            $(this.inputGroup).find('input.ui-input')[this.value !== '' ? 'addClass' : 'removeClass']('x');
            if (this.double && newValue) {
                _a = newValue.split(','), this.value1 = _a[0], this.value2 = _a[1];
            }
            var _a;
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
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-input'), 
            __metadata('design:paramtypes', [Element])
        ], UIInput);
        return UIInput;
    })();
    exports.UIInput = UIInput;
});
