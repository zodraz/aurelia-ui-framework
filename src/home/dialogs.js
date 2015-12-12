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
define(["require", "exports", "aurelia-framework", "../../framework/utils/ui-app-state", "../../framework/utils/ui-dialog-service", "./my-dialog"], function (require, exports, aurelia_framework_1, ui_app_state_1, ui_dialog_service_1, my_dialog_1) {
    var HomeDialogs = (function () {
        function HomeDialogs(appState, dialogService) {
            this.appState = appState;
            this.dialogService = dialogService;
        }
        HomeDialogs.prototype.confirm = function () {
            this.dialogService.show(my_dialog_1.MyDialog);
        };
        HomeDialogs.prototype.modal = function () {
            this.dialogService.show(my_dialog_1.MyDialog, { modal: true });
        };
        HomeDialogs = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [ui_app_state_1.UIApplicationState, ui_dialog_service_1.UIDialogService])
        ], HomeDialogs);
        return HomeDialogs;
    })();
    exports.HomeDialogs = HomeDialogs;
});
