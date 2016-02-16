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
    var UITextArea = (function () {
        function UITextArea(element) {
            this.element = element;
            this._focus = false;
            this._noLabel = false;
            this._checkbox = false;
            this._classes = '';
            this._labelClasses = '';
            this._inputClasses = '';
            this.value = '';
            this.checked = false;
            this.id = '';
            this.dir = '';
            this.rows = 5;
            this.helpText = '';
            this.addonIcon = '';
            this.addonText = '';
            this.addonClass = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.placeholder = '';
            this.readonly = false;
            this.disabled = false;
            this.autoComplete = null;
            this._id = "textarea-" + UITextArea._id++;
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
        }
        UITextArea.prototype.bind = function () {
        };
        UITextArea.prototype.attached = function () {
            var _this = this;
            this._input = $(this._inputGroup).find('.ui-input');
            this._input[(this.value || '') !== '' ? 'addClass' : 'removeClass']('x')
                .attr(this.readonly === true ? 'readonly' : 'R', '')
                .attr(this.disabled === true ? 'disabled' : 'D', '')
                .on('input', function (e) {
                if (!_this.readonly && !_this.disabled) {
                    var el = $(e.target);
                    el[el.val() !== '' ? 'addClass' : 'removeClass']('x');
                }
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
                .on('change', function (e) {
                _this.value = _this._input.val();
            });
            if (this.autoComplete) {
                this.autoCompleteChanged(this.autoComplete);
            }
            if (this._checkbox) {
                this._checkedChanged(this.checked === true);
            }
        };
        UITextArea.prototype.autoCompleteChanged = function (newValue) {
            var _this = this;
            if (ui_utils_1._.isString(newValue))
                newValue = newValue.split(',');
            var self = this;
            this._input.textcomplete([{
                    words: newValue,
                    match: /\b(\w{1,})$/,
                    search: function (term, callback) {
                        callback(ui_utils_1._.filter(_this.autoComplete, function (word) {
                            return eval("/" + term + "/gi").test(word);
                        }));
                    },
                    index: 1,
                    replace: function (word) {
                        if (/\-$/.test(word))
                            return word;
                        if (word == 'and')
                            return '&& ';
                        if (word == 'or')
                            return '|| ';
                        if (word == 'not')
                            return '!';
                        return word + ' ';
                    }
                }], { zIndex: 500000, maxCount: 20, debounce: 200 });
        };
        UITextArea.prototype.disabledChanged = function (newValue) {
            this.disabled = newValue === 'true' || newValue === true;
            this.makeBusy(newValue);
        };
        UITextArea.prototype.readonlyChanged = function (newValue) {
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
        UITextArea.prototype.makeBusy = function (isBusy) {
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
        UITextArea.prototype._checkedChanged = function (newValue) {
            if (this._checkbox) {
                this._input
                    .removeAttr('D')
                    .removeAttr('disabled')
                    .attr(newValue === false ? 'disabled' : 'D', '');
            }
        };
        UITextArea.prototype._valueChanged = function (newValue) {
            $(this._inputGroup).find('input.ui-primary')[this.value !== '' ? 'addClass' : 'removeClass']('x');
        };
        UITextArea.prototype._buttonClick = function ($event) {
            $event.cancelBubble = true;
            ui_event_1.UIEvent.fireEvent('click', this.element, this, this._input);
        };
        UITextArea._id = 0;
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "dir");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], UITextArea.prototype, "rows");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "helpText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "addonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "addonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "addonClass");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "buttonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "buttonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UITextArea.prototype, "placeholder");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UITextArea.prototype, "readonly");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UITextArea.prototype, "disabled");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UITextArea.prototype, "autoComplete");
        UITextArea = __decorate([
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
            aurelia_framework_1.customElement('ui-textarea'), 
            __metadata('design:paramtypes', [Element])
        ], UITextArea);
        return UITextArea;
    })();
    exports.UITextArea = UITextArea;
});
