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
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    var UIForm = (function () {
        function UIForm(element) {
            this.element = element;
            this.id = '';
            this.class = '';
            this.classes = '';
        }
        UIForm.prototype.attached = function () {
            var _this = this;
            setTimeout(function () {
                $(_this.form).data('UIForm', _this)
                    .find('input,textarea').first().focus();
            }, 200);
        };
        UIForm.prototype.keyup = function ($event) {
            if (!$($event.target).is('textarea') && $event.keyCode == 13)
                console.log('Submit');
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIForm.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIForm.prototype, "class");
        UIForm = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-form'), 
            __metadata('design:paramtypes', [Element])
        ], UIForm);
        return UIForm;
    })();
    exports.UIForm = UIForm;
});
