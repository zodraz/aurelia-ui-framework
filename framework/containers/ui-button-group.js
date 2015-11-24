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
    var UIButtonGroup = (function () {
        function UIButtonGroup(element) {
            this.element = element;
            this.classes = '';
            this.toggle = false;
            this.vertical = false;
            if (element.hasAttribute('toggle'))
                this.toggle = element.getAttribute('toggle') || 'single';
            this.vertical = element.hasAttribute('vertical');
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
        UIButtonGroup.prototype.bind = function () {
            if (this.vertical !== false)
                this.classes += "ui-vertical ";
        };
        UIButtonGroup.prototype.attached = function () {
            if (this.size) {
                $(this.buttonGroup).children('.ui-button')
                    .removeClass('ui-button-normal')
                    .addClass("ui-button-" + this.size);
            }
            if (this.toggle === false && this.theme) {
                $(this.buttonGroup).children('.ui-button')
                    .removeClass('ui-button-default')
                    .addClass("ui-button-" + this.theme);
            }
            if (this.toggle !== false) {
                $(this.buttonGroup).children('.ui-button')
                    .removeClass('ui-button-default')
                    .addClass("ui-button-secondary ui-button-toggle");
            }
            if (this.value !== null && this.toggle !== false)
                this.checkChange();
        };
        UIButtonGroup.prototype.valueChanged = function (newValue) {
            this.checkChange();
        };
        UIButtonGroup.prototype.clickHandler = function ($event) {
            if (this.toggle !== false) {
                $event.cancelBubble = true;
                var el = $($event.target.closest('button'));
                if (this.toggle === 'multiple') {
                }
                else {
                    this.value = el.val();
                }
                ui_event_1.UIEvent.fireEvent('change', this.element, this.value, el.get(0));
            }
        };
        UIButtonGroup.prototype.checkChange = function () {
            if (this.toggle === 'multiple') {
            }
            else {
                $(this.buttonGroup).children('.ui-checked').removeClass('ui-checked');
                var el = $(this.buttonGroup).children("[value='" + this.value + "']");
                el.addClass('ui-checked');
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIButtonGroup.prototype, "change");
        UIButtonGroup = __decorate([
            aurelia_framework_1.bindable({
                name: 'value',
                attribute: 'value',
                changeHandler: 'valueChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-button-group'), 
            __metadata('design:paramtypes', [Element])
        ], UIButtonGroup);
        return UIButtonGroup;
    })();
    exports.UIButtonGroup = UIButtonGroup;
});
