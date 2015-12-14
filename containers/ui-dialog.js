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
            this.active = true;
            this.minimized = false;
            this.width = 'auto';
            this.height = 'auto';
            this.modal = false;
            this._zindex = 50;
            this._original = {};
            this._current = {
                top: (UIDialog._x += 10),
                left: (UIDialog._x += 10),
                height: '', width: ''
            };
            if (element.hasAttribute('modal'))
                this.modal = true;
            this.id = "win-" + UIDialog._id++;
            this.element.UIElement = this;
        }
        UIDialog.prototype.bind = function () {
            this._current.width = this.width;
            this._current.height = this.height;
        };
        UIDialog.prototype.attached = function () {
            var d = $(this._dialog);
            this._current.width = d.outerWidth();
            this._current.height = d.outerHeight();
            if (this.modal) {
                var pw = $(this.dialogService.dialogContainer).outerWidth();
                var ph = $(this.dialogService.dialogContainer).outerHeight();
                this._current.top = (ph - this._current.height) / 2;
                this._current.left = (pw - this._current.width) / 2;
            }
            else {
                this._taskButton = document.createElement('button');
                this._taskButton.classList.add('ui-win-button');
                this._taskButton.classList.add('ui-active');
                this._taskButton.innerHTML = this.dataTitle;
                this._taskButton.window = this;
                this.dialogService.addTaskButton(this._taskButton);
            }
            $(this.element).css('z-index', 49).removeClass('ui-hidden');
            Object.assign(this._original, this._current);
        };
        UIDialog.prototype.remove = function () {
            $(this._taskButton).remove();
            $(this.element).remove();
        };
        UIDialog.prototype.activeChanged = function (newValue) {
            if (newValue !== false) {
                this._zindex = 50;
                $(this._taskButton).addClass('ui-active');
            }
            else {
                this._zindex = 1;
                $(this._taskButton).removeClass('ui-active');
            }
        };
        UIDialog.prototype.minimizedChanged = function (newValue) {
            var _this = this;
            if (newValue !== false) {
                var tp = $(this._taskButton).offset();
                var tw = $(this._taskButton).outerWidth();
                var th = $(this._taskButton).outerHeight();
                Object.assign(this._original, this._current);
                $(this._dialog).addClass('ui-minimize');
                this._current.top = tp.top;
                this._current.left = tp.left;
                this._current.width = tw;
                this._current.height = th;
                $(this._taskButton).removeClass('ui-active');
                setTimeout(function () { return $(_this._dialog).addClass('ui-hide'); }, 500);
            }
            else {
                $(this._dialog).removeClass('ui-hide');
                Object.assign(this._current, this._original);
                setTimeout(function () { return $(_this._dialog).removeClass('ui-minimize'); }, 500);
                $(this._taskButton).addClass('ui-active');
            }
        };
        UIDialog._id = 0;
        UIDialog._x = 10;
        UIDialog._y = 10;
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDialog.prototype, "dataTitle");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDialog.prototype, "active");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDialog.prototype, "minimized");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDialog.prototype, "width");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDialog.prototype, "height");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIDialog.prototype, "modal");
        UIDialog = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-dialog'), 
            __metadata('design:paramtypes', [Element, ui_dialog_service_1.UIDialogService])
        ], UIDialog);
        return UIDialog;
    })();
    exports.UIDialog = UIDialog;
});
