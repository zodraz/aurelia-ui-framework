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
            this._menuItems = [];
            this._size = "normal";
            this._theme = "default";
            this._default = false;
            this._menuRight = false;
            if (element.hasAttribute('default'))
                this._default = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
            if (element.hasAttribute('menu'))
                this.menu = true;
            if (element.hasAttribute('menu-right'))
                this._menuRight = true;
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
            if (this.label) {
                this.menu = true;
            }
            if (this._theme)
                this._classes += "ui-button-" + this._theme + " ";
            if (this._size)
                this._classes += "ui-button-" + this._size + " ";
            if (this._default !== false)
                this._classes += "ui-default ";
            if (this.icon)
                this._attachIcon();
            if (this.menu && this._menuRight) {
                $(this._button).addClass('ui-menu-right');
            }
            if (this.menu) {
                $(this._button).append('&nbsp;<i class="ui-caret"></i>');
            }
        };
        UIButton.prototype.attached = function () {
            var _this = this;
            if (this.menu) {
                $(this._temp).children().each(function (i, c) {
                    c = $(c);
                    if (c.is('divider'))
                        _this._menuItems.push('-');
                    if (c.is('section'))
                        _this._menuItems.push(c.text());
                    if (c.is('menu'))
                        _this._menuItems.push({ id: c.attr('link-id'), icon: c.attr('icon'), title: c.text() });
                });
            }
            else
                this.label = $(this._temp).text();
            $(this._temp).remove();
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
            $event.cancelBubble = true;
            if (this.menu) {
                if ($(this._button).hasClass('ui-dropdown'))
                    return $(this._button).removeClass('ui-dropdown');
                if (!this._menu)
                    this._menu = $(this._button).next('.ui-menu');
                $(this._menu)
                    .offset({ left: -1000, top: -1000 });
                $('.ui-dropdown').removeClass('ui-dropdown');
                $(this._button)
                    .toggleClass('ui-dropdown')
                    .removeClass('ui-menu-reverse');
                var o = $(this._button).offset(), t = o.top, l = o.left, w = $(this._button).outerWidth(), h = $(this._button).outerHeight(), mh = $(this._menu).outerHeight(), ph = $(this._menu).offsetParent().height();
                if (!this._menuRight) {
                    $(this._menu).css('min-width', w);
                    if (o.top + mh > ph) {
                        t -= mh;
                        $(this._button).addClass('ui-menu-reverse');
                    }
                    else {
                        t += h;
                    }
                }
                else {
                    l += w;
                    if (o.top + mh > ph) {
                        t -= (mh - h);
                        $(this._button).addClass('ui-menu-reverse');
                    }
                }
                $(this._menu).offset({ left: l, top: t });
            }
            else {
                ui_event_1.UIEvent.fireEvent('click', this.element, this, this._button);
            }
        };
        UIButton.prototype._menuClicked = function ($event) {
            $event.cancelBubble = true;
            $('.ui-dropdown').removeClass('ui-dropdown');
            ui_event_1.UIEvent.fireEvent('menuclick', this.element, $event.data, this._button);
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIButton.prototype, "menu");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIButton.prototype, "value");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIButton.prototype, "label");
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
