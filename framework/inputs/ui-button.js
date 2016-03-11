var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_event_1) {
    var UIButton = (function () {
        function UIButton(element) {
            this.element = element;
            this.__size = 'normal';
            this.__theme = 'default';
            this.label = '';
            this.value = '';
            this.icon = '';
            this.disabled = false;
        }
        UIButton.prototype.bind = function () {
            if (this.element.hasAttribute('primary'))
                this.__theme = 'primary';
            if (this.element.hasAttribute('secondary'))
                this.__theme = 'secondary';
            if (this.element.hasAttribute('info'))
                this.__theme = 'info';
            if (this.element.hasAttribute('danger'))
                this.__theme = 'danger';
            if (this.element.hasAttribute('success'))
                this.__theme = 'success';
            if (this.element.hasAttribute('warning'))
                this.__theme = 'warning';
            if (this.element.hasAttribute('small'))
                this.__size = 'small';
            if (this.element.hasAttribute('large'))
                this.__size = 'large';
            this.disabled = isTrue(this.disabled);
        };
        UIButton.prototype.attached = function () {
            if (this.element.hasAttribute('top'))
                this.__button.classList.add('ui-icon-top');
            if (this.element.hasAttribute('round'))
                this.__button.classList.add('ui-button-round');
            this.__button.classList.add("ui-button-" + this.__size);
            this.__button.classList.add("ui-button-" + this.__theme);
            this.disable();
        };
        UIButton.prototype.disable = function (disabled) {
            if (this.__button.attributes.getNamedItem('disabled') !== null) {
                this.__button.attributes.removeNamedItem('disabled');
            }
            if (disabled === true || this.disabled === true) {
                this.__button.attributes.setNamedItem(document.createAttribute('disabled'));
            }
        };
        UIButton.prototype.disabledChanged = function (newValue) {
            this.disabled = isTrue(newValue);
            this.disable();
        };
        UIButton.prototype.fireClick = function ($event) {
            if (this.disabled === true)
                return false;
            $event.cancelBubble = true;
            ui_event_1.UIEvent.fireEvent('click', this.element, this);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIButton.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIButton.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIButton.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UIButton.prototype, "disabled", void 0);
        UIButton = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-button'), 
            __metadata('design:paramtypes', [Element])
        ], UIButton);
        return UIButton;
    })();
    exports.UIButton = UIButton;
});
