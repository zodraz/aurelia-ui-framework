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
define(["require", "exports", "aurelia-framework", "../utils/ui-event", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, ui_event_1, ui_utils_1) {
    var UIInputDual = (function () {
        function UIInputDual(element) {
            this.element = element;
            this._type = 'text';
            this._intype = 'text';
            this._focus = false;
            this._noLabel = false;
            this._checkbox = false;
            this._classes = '';
            this._labelClasses = '';
            this._inputClasses = '';
            this._valueLeft = '';
            this._valueRight = '';
            this.valueLeft = '';
            this.valueRight = '';
            this.checked = false;
            this.id = '';
            this.dir = '';
            this.helpText = '';
            this.prefixIcon = '';
            this.prefixText = '';
            this.prefixClass = '';
            this.suffixIcon = '';
            this.suffixText = '';
            this.suffixClass = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholderLeft = '';
            this.placeholderRight = '';
            this.readonly = false;
            this.disabled = false;
            this.ALPHA = "\\u0041-\\u005a\\u0061-\\u007a\\u00aa\\u00c0-\\u02af\\u0370-\\u0481\\u048a-\\u05ea\\u0621-\\u065e\\u066e-\\u06ef\\u0710-\\u072f\\u074d-\\u07a5\\u07ca-\\u07ea\\u0800-\\u082c\\u0900-\\u0964"
                + "\\u0981-\\u09e3\\u0a01-\\u0a5e\\u0a81-\\u0ae3\\u0b01-\\u0b63\\u0b82-\\u0bd7\\u0c01-\\u0c63\\u0c82-\\u0ce3\\u0d63\\u0d7a-\\u0e4f\\u0e5a-\\u0ecd\\u0f00-\\u0f1f\\u0f34-\\u103f\\u104c-\\u108f\\u109a-\\u1368"
                + "\\u1380-\\u17dd\\u17f0-\\u180e\\u1820-\\u1940\\u1950-\\u19c9\\u19e0-\\u1a7f\\u1aa0-\\u1b4b\\u1b80-\\u1baf\\u1c00-\\u1c3f\\u1c5a-\\u1dbf\\u1dd3-\\u1ffe\\u2c00-\\u2dff\\u3041-\\u3243\\ua000-\\ua827"
                + "\\ua840-\\ua8cf\\ua90a-\\ua9cf\\uaa00-\\uaa4d\\uaa60-\\ufdfb\\ufe70-\\ufefc\\u3400-\\u4db5\\u4e00-\\u9fa5";
            this.DIGIT = "\\u0030-\\u0039\\u0660-\\u0669\\u06f0-\\u06f9\\u07c0-\\u07c9\\u0966-\\u096f\\u09e6-\\u09ef\\u0a66-\\u0a6f\\u0ae6-\\u0aef\\u0b66-\\u0b6f\\u0be6-\\u0bef\\u0c66-\\u0c6f\\u0ce6-\\u0cef\\u0d66-\\u0d6f"
                + "\\u0e50-\\u0e59\\u0ed0-\\u0ed9\\u0f20-\\u0f33\\u1040-\\u1049\\u1090-\\u1099\\u1369-\\u137c\\u17e0-\\u17e9\\u1810-\\u1819\\u1946-\\u194f\\u19d0-\\u19d9\\u1a80-\\u1a99\\u1b50-\\u1b59\\u1bb0-\\u1bb9\\u1c40-\\u1c49"
                + "\\u1c50-\\u1c59\\ua620-\\ua629\\ua8d0-\\ua8d9\\ua900-\\ua909\\ua9d0-\\ua9d9\\uaa50-\\uaa59\\uabf0-\\uabf9";
            this._id = "input-" + UIInputDual._id++;
            if (element.hasAttribute('clear'))
                this._inputClasses += ' ui-clear ';
            if (element.hasAttribute('required'))
                this._labelClasses += ' ui-required ';
            if (element.hasAttribute('nolabel'))
                this._noLabel = true;
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
            if (element.hasAttribute('location'))
                this._type = 'location';
            if (this._type == 'email')
                this._intype = 'email';
            if (this._type == 'location' || this._type == 'number' || this._type == 'decimal')
                this._intype = 'number';
        }
        UIInputDual.prototype.bind = function () {
            if (this.element.hasAttribute('readonly'))
                this.readonly = true;
            if (this.element.hasAttribute('disabled'))
                this.disabled = true;
            if (!ui_utils_1._.isEmpty(this.valueLeft)) {
                this._valueLeftChanged(this.valueLeft);
            }
            if (!ui_utils_1._.isEmpty(this.valueRight)) {
                this._valueRightChanged(this.valueRight);
            }
        };
        UIInputDual.prototype.attached = function () {
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
            this._input
                .attr(this.readonly === true ? 'readonly' : 'R', '')
                .attr(this.disabled === true ? 'disabled' : 'D', '')
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
                if (_this._type == 'name') {
                    return (new RegExp('[' + _this.ALPHA + '\'\\.\\-&\\s]', 'g'))
                        .test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'number') {
                    return (/[0-9\-]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'decimal' || _this._type == 'location') {
                    return (/[0-9\-\.]/).test(String.fromCharCode(e.charCode));
                }
                else if (_this._type == 'email') {
                    return (/[A-Za-z0-9\-\.@_\+]/).test(String.fromCharCode(e.charCode));
                }
                if ((e.which || e.keyCode) == 13) {
                    $(e.target).trigger('change', e);
                    return false;
                }
                return true;
            });
            $(this._inputLeft)[(this.valueLeft || '') !== '' ? 'addClass' : 'removeClass']('x')
                .on('input', function (e) {
                var el = $(e.target);
                if (!_this.readonly && !_this.disabled) {
                    el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
                }
                _this.valueLeft = el.val();
            })
                .change(function (e) {
                var val = $(e.target).val();
                val = val.replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
                val = _this._format(val);
                $(e.target).val(val);
                _this.valueLeft = val;
            });
            $(this._inputRight)[(this.valueRight || '') !== '' ? 'addClass' : 'removeClass']('x')
                .on('input', function (e) {
                var el = $(e.target);
                if (!_this.readonly && !_this.disabled) {
                    el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
                }
                _this.valueRight = el.val();
            })
                .change(function (e) {
                var val = $(e.target).val();
                val = val.replace(/^[\s]+/, "").replace(/[\s]+$/, "").replace(/[\s]{2,}/gi, " ");
                val = _this._format(val);
                $(e.target).val(val);
                _this.valueRight = val;
            });
            if (this._checkbox) {
                this._checkedChanged(this.checked === true);
            }
        };
        UIInputDual.prototype.disabledChanged = function (newValue) {
            this.disabled = newValue === 'true' || newValue === true;
            this.makeBusy(newValue);
        };
        UIInputDual.prototype.readonlyChanged = function (newValue) {
            if (!this._input)
                return;
            this._input
                .removeAttr('R')
                .removeAttr('readonly')
                .attr(newValue === true ? 'readonly' : 'R', '');
            $(this._optionInput)
                .removeAttr('R')
                .removeAttr('readonly')
                .attr(newValue === true ? 'readonly' : 'R', '');
        };
        UIInputDual.prototype.makeBusy = function (isBusy) {
            if (!this._input)
                return;
            this._input
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(isBusy === true || this.disabled === true || (this._checkbox && !this.checked) ? 'disabled' : 'D', '');
            $(this._optionInput)
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(isBusy === true || this.disabled === true ? 'disabled' : 'D', '');
        };
        UIInputDual.prototype._checkedChanged = function (newValue) {
            if (this._checkbox) {
                this._input
                    .removeAttr('D')
                    .removeAttr('disabled')
                    .attr(newValue === false ? 'disabled' : 'D', '');
            }
        };
        UIInputDual.prototype._valueLeftChanged = function (newValue) {
            this.valueLeft = this._valueLeft = this._format(ui_utils_1._.isEmpty(newValue) ? '' : newValue);
            $(this._inputLeft)[this.valueLeft !== '' ? 'addClass' : 'removeClass']('x');
        };
        UIInputDual.prototype._valueRightChanged = function (newValue) {
            this.valueRight = this._valueRight = this._format(ui_utils_1._.isEmpty(newValue) ? '' : newValue);
            $(this._inputRight)[this._valueRight !== '' ? 'addClass' : 'removeClass']('x');
        };
        UIInputDual.prototype._format = function (val) {
            if (this._type == 'name') {
                val = val.replace(new RegExp('[' + this.ALPHA + '\']+(?=[\\.\\-&\\s]*)', 'g'), function (txt) {
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
            return val;
        };
        UIInputDual.prototype._buttonClick = function ($event) {
            $event.cancelBubble = true;
            ui_event_1.UIEvent.fireEvent('click', this.element, this, this._input);
        };
        UIInputDual._id = 0;
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "dir");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "helpText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "prefixIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "prefixText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "prefixClass");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "suffixIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "suffixText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "suffixClass");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "buttonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "buttonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "placeholderLeft");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIInputDual.prototype, "placeholderRight");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIInputDual.prototype, "readonly");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIInputDual.prototype, "disabled");
        UIInputDual = __decorate([
            aurelia_framework_1.bindable({
                name: 'valueLeft',
                attribute: 'value-left',
                changeHandler: '_valueLeftChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.bindable({
                name: 'valueRight',
                attribute: 'value-right',
                changeHandler: '_valueRightChanged',
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
            aurelia_framework_1.customElement('ui-input-dual'), 
            __metadata('design:paramtypes', [Element])
        ], UIInputDual);
        return UIInputDual;
    })();
    exports.UIInputDual = UIInputDual;
});
