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
    var UIForm = (function () {
        function UIForm(element) {
            this.element = element;
        }
        UIForm.prototype.attached = function () {
            var _this = this;
            setTimeout(function () {
                var el = _this.__form.querySelector('input,select,textarea');
                if (!isEmpty(el))
                    el.focus();
            }, 10);
        };
        UIForm.prototype.fireSubmit = function () {
            ui_event_1.UIEvent.fireEvent('submit', this.element, this);
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
    })();
    exports.UIForm = UIForm;
});
