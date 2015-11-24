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
    var UIButton = (function () {
        function UIButton(element) {
            this.element = element;
            this.classes = '';
            this.disabled = false;
            this.size = "normal";
            this.theme = "default";
            this.default = false;
            this.default = element.hasAttribute('default');
            if (element.hasAttribute('large'))
                this.size = 'large';
            if (element.hasAttribute('small'))
                this.size = 'small';
            if (element.hasAttribute('primary'))
                this.theme = 'primary';
            if (element.hasAttribute('secondary'))
                this.theme = 'secondary';
            if (element.hasAttribute('info'))
                this.theme = 'info';
            if (element.hasAttribute('danger'))
                this.theme = 'danger';
            if (element.hasAttribute('success'))
                this.theme = 'success';
            if (element.hasAttribute('warning'))
                this.theme = 'warning';
        }
        UIButton.prototype.bind = function () {
            if (this.theme)
                this.classes += "ui-button-" + this.theme + " ";
            if (this.size)
                this.classes += "ui-button-" + this.size + " ";
            if (this.default !== false)
                this.classes += "ui-default ";
            if (this.icon)
                this.attachIcon();
            if (this.menu) {
                $(this.button).append('&nbsp;<i class="ui-caret"></i>');
            }
        };
        UIButton.prototype.attached = function () {
            $(this.button)
                .data('UIButton', this)
                .attr(this.disabled !== false ? 'disabled' : 'x', '');
        };
        UIButton.prototype.disabledChanged = function (newValue) {
            $(this.button)
                .attr(newValue !== false ? 'disabled' : 'x', '');
        };
        UIButton.prototype.attachIcon = function () {
            if (!this.iconEl) {
                this.iconEl = $(this.button).prepend('<i></i>').children('i');
            }
            this.iconEl.attr('class', '').addClass(this.icon);
        };
        UIButton.prototype.clicked = function ($event) {
            if (this.menu) {
                $event.cancelBubble = true;
                $(this.button).toggleClass('ui-dropdown');
            }
            else {
                ui_event_1.UIEvent.fireEvent('click', this.element);
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIButton.prototype, "menu");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIButton.prototype, "value");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIButton.prototype, "icon");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIButton.prototype, "disabled");
        UIButton = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-button'), 
            __metadata('design:paramtypes', [Element])
        ], UIButton);
        return UIButton;
    })();
    exports.UIButton = UIButton;
});
