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
    var UIList = (function () {
        function UIList(element) {
            this.element = element;
            this._clear = false;
            this._focus = false;
            this._noLabel = false;
            this._checkbox = false;
            this._multiple = false;
            this._labelClasses = '';
            this._inputClasses = '';
            this.value = '';
            this.checked = false;
            this.id = '';
            this.label = '';
            this.addonIcon = '';
            this.addonText = '';
            this.addonClass = '';
            this.buttonIcon = '';
            this.buttonText = '';
            this.readonly = false;
            this.disabled = false;
            this._id = "list-" + ui_input_1.UIInput._id++;
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
        }
        UIList.prototype.bind = function () {
            if (this.value) {
                this._valueChanged(this.value);
            }
            if (this._checkbox) {
                this.disabled = this.checked !== true;
            }
        };
        UIList.prototype.attached = function () {
            $(this._select)
                .html(this._getListItems())
                .find("li[value=\"" + this.value + "\"]").addClass('active');
            $(this._options).remove();
        };
        UIList.prototype.disabledChanged = function (newValue) {
            $(this._select)
                .removeAttr('D')
                .removeAttr('disabled')
                .attr(newValue !== false ? 'disabled' : 'D', '');
        };
        UIList.prototype.readonlyChanged = function (newValue) {
            $(this._select)
                .removeAttr('R')
                .removeAttr('readonly')
                .attr(newValue !== false ? 'readonly' : 'R', '');
        };
        UIList.prototype._checkedChanged = function (newValue) {
            if (this._checkbox) {
                this.disabled = newValue !== true;
            }
        };
        UIList.prototype._valueChanged = function (newValue) {
            var _this = this;
            if (this._multiple)
                newValue = (newValue || '').split(',');
            setTimeout(function () {
                if (newValue && newValue != '') {
                    $(_this._select).find('.ui-active').removeClass('ui-active');
                    var s, t = (s = $(_this._select))
                        .find("li[value=\"" + newValue + "\"]")
                        .addClass('ui-active')
                        .offset().top;
                    t -= s.offset().top - s.scrollTop();
                    if (t > s.height() + s.scrollTop())
                        s.scrollTop(t - 30);
                    else if (t - 30 < s.scrollTop())
                        s.scrollTop(t - 30);
                }
            }, 100);
        };
        UIList.prototype._buttonClick = function ($event) {
            $event.cancelBubble = true;
            ui_event_1.UIEvent.fireEvent('click', this.element, this, this._input);
        };
        UIList.prototype._getListItems = function () {
            $(this._input).html($(this._options).html());
            $(this._options).find('option').addClass('ui-list-option');
            $(this._options).find('optgroup').addClass('ui-list-group');
            var html = $(this._options).html();
            return html
                .replace(/<optgroup/gi, '<li')
                .replace(/optgroup>/gi, 'li>')
                .replace(/<option/gi, '<li')
                .replace(/option>/gi, 'li>');
        };
        UIList.prototype._changeSelection = function ($event) {
            if ($event.type == 'click') {
                this._input.focus();
                this.value = $($event.target).closest('li').attr('value');
            }
            if ($event.type == 'change') {
                this.value = $($event.target).val();
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIList.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIList.prototype, "label");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIList.prototype, "addonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIList.prototype, "addonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIList.prototype, "addonClass");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIList.prototype, "buttonIcon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIList.prototype, "buttonText");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIList.prototype, "readonly");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIList.prototype, "disabled");
        UIList = __decorate([
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
            aurelia_framework_1.customElement('ui-list'), 
            __metadata('design:paramtypes', [Element])
        ], UIList);
        return UIList;
    })();
    exports.UIList = UIList;
});
