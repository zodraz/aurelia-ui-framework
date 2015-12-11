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
define(["require", "exports", "aurelia-framework", "../utils/ui-dialog-service"], function (require, exports, aurelia_framework_1, ui_dialog_service_1) {
    var UIDialog = (function () {
        function UIDialog(element, dialogService) {
            this.element = element;
            this.dialogService = dialogService;
            this._modal = false;
            if (element.hasAttribute('modal'))
                this._modal = true;
        }
        UIDialog.prototype.attached = function () {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDialog.prototype, "dataTitle");
        UIDialog = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-dialog'), 
            __metadata('design:paramtypes', [Element, ui_dialog_service_1.UIDialogService])
        ], UIDialog);
        return UIDialog;
    })();
    exports.UIDialog = UIDialog;
});
