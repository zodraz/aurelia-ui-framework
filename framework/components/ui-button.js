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
            this._classes = '';
            this.id = '';
            this.disabled = false;
            this._size = "normal";
            this._theme = "default";
            this._default = false;
            if (element.hasAttribute('default'))
                this._default = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('large'))
                this._size = 'large';
            if (element.hasAttribute('small'))
                this._size = 'small';
            if (element.hasAttribute('primary'))
                this._theme = 'primary';
            if (element.hasAttribute('secondary'))
                this._theme = 'secondary';
            if (element.hasAttribute('info'))
                this._theme = 'info';
            if (element.hasAttribute('danger'))
                this._theme = 'danger';
            if (element.hasAttribute('success'))
                this._theme = 'success';
            if (element.hasAttribute('warning'))
                this._theme = 'warning';
        }
        UIButton.prototype.bind = function () {
            if (this._theme)
                this._classes += "ui-button-" + this._theme + " ";
            if (this._size)
                this._classes += "ui-button-" + this._size + " ";
            if (this._default !== false)
                this._classes += "ui-default ";
            if (this.icon)
                this._attachIcon();
            if (this.menu) {
                $(this._button).append('&nbsp;<i class="ui-caret"></i>');
            }
        };
        UIButton.prototype.attached = function () {
            $(this._button)
                .data('UIButton', this)
                .attr(this.disabled !== false ? 'disabled' : 'x', '');
        };
        UIButton.prototype.disabledChanged = function (newValue) {
            $(this._button)
                .attr(newValue !== false ? 'disabled' : 'x', '');
        };
        UIButton.prototype._attachIcon = function () {
            if (!this._iconEl) {
                this._iconEl = $(this._button).prepend('<i></i>').children('i');
            }
            this._iconEl.attr('class', '').addClass(this.icon);
        };
        UIButton.prototype._clicked = function ($event) {
            if (this.menu) {
                $event.cancelBubble = true;
                $(this._button).toggleClass('ui-dropdown');
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
            __metadata('design:type', String)
        ], UIButton.prototype, "id");
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
