var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-event", "aurelia-validation"], function (require, exports, aurelia_framework_1, ui_event_1, aurelia_validation_1) {
    "use strict";
    var UIForm = (function () {
        function UIForm(element) {
            this.element = element;
        }
        UIForm.prototype.attached = function () {
            var _this = this;
            setTimeout(function () {
                var el = _this.__form.querySelector('ui-input input,textarea,ui-phone input');
                if (!isEmpty(el))
                    el.focus();
            }, 10);
            if (this.busy)
                setTimeout(function () { return _this.busyChanged(true); }, 200);
        };
        UIForm.prototype.busyChanged = function (newValue) {
            var els = this.element.querySelectorAll('ui-button,ui-combo,ui-date,ui-input,ui-input-dual,ui-language,ui-markdown,ui-checkbox,ui-radio,ui-phone,ui-switch,ui-tags,ui-textarea');
            _.forEach(els, function (el) {
                try {
                    el.au.controller.viewModel.disable(isTrue(newValue));
                }
                catch (e) {
                }
            });
        };
        UIForm.prototype.fireSubmit = function () {
            ui_event_1.UIEvent.fireEvent('submit', this.element, this);
        };
        UIForm.prototype.getForm = function () {
            return this.__form;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIForm.prototype, "busy", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', aurelia_validation_1.Validation)
        ], UIForm.prototype, "validation", void 0);
        UIForm = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-form'), 
            __metadata('design:paramtypes', [Element])
        ], UIForm);
        return UIForm;
    }());
    exports.UIForm = UIForm;
});
