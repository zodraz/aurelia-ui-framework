var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    var UIButton = (function () {
        function UIButton(element) {
            this.element = element;
            this.__size = 'normal';
            this.__theme = 'default';
            this.href = null;
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
        UIButton.prototype.onClick = function ($event) {
            console.log('i got clicked');
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIButton.prototype, "href", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIButton.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
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
    var UIButtonGroup = (function () {
        function UIButtonGroup(element) {
            this.element = element;
            this.__size = 'normal';
            this.__theme = 'default';
        }
        UIButtonGroup.prototype.bind = function () {
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
        };
        UIButtonGroup.prototype.attached = function () {
            if (this.element.hasAttribute('vertical'))
                this.element.classList.add('ui-vertical');
            var children = this.element.getElementsByClassName('ui-button');
            for (var e = 0; e < children.length; e++) {
                children[e].classList.remove('ui-button-default');
                children[e].classList.remove('ui-button-normal');
                children[e].classList.remove('ui-button-large');
                children[e].classList.remove('ui-button-small');
                children[e].classList.add("ui-button-" + this.__theme);
                children[e].classList.add("ui-button-" + this.__size);
            }
        };
        UIButtonGroup = __decorate([
            aurelia_framework_1.customElement('ui-button-group'),
            aurelia_framework_1.inlineView("<template class=\"ui-button-group\"><content></content></template>"), 
            __metadata('design:paramtypes', [Element])
        ], UIButtonGroup);
        return UIButtonGroup;
    })();
    exports.UIButtonGroup = UIButtonGroup;
});
