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
    var HomeButtons = (function () {
        function HomeButtons(appState, dialogService) {
            this.appState = appState;
            this.dialogService = dialogService;
            this.t1 = 0;
            this.t2 = '1,3';
            this.disabled = false;
            this.menu1 = [{
                    id: 0, title: 'Link 0'
                }, {
                    id: 1, title: 'Link 1'
                }, {
                    id: 2, title: 'Link 2'
                }, '-', 'Section', {
                    id: 3, title: 'Link 3'
                }, {
                    id: 4, title: 'Link 4'
                }, {
                    id: 5, title: 'Link 5'
                }, '-', {
                    id: 6, title: 'Link 6'
                }, {
                    id: 7, title: 'Link 7'
                }, {
                    id: 8, title: 'Link 8'
                }, {
                    id: 9, title: 'Link 9'
                }];
        }
        HomeButtons.prototype.confirm = function () {
            this.dialogService.show(my_dialog_1.MyDialog);
        };
        HomeButtons.prototype.buttonclick = function ($event) {
            var data;
            if ($($event.target).closest('ui-button').length == 0)
                return;
            if (data = $event.detail) {
                var msg = 'OOPS! You clicked the wrong button';
                if (data._theme == 'primary')
                    msg = 'YIPEE! Im the primary color';
                if (data._theme == 'info')
                    msg = 'HOUSTON! We have lift-off';
                if (data._theme == 'success')
                    msg = 'HOUSTON! The eagle has landed';
                if (data._theme == 'danger')
                    msg = 'EXTERMINATE! EXTERMINATE!';
                if (data._theme == 'warning')
                    msg = 'HOUSTON! We have a problem';
                if (data._theme != 'secondary') {
                    $.notify(msg, {
                        style: 'ui',
                        className: data._theme,
                        autoHide: false
                    });
                }
                else {
                    $('.ui-page-title').notify('Error contacting web-service. Please try again later.', {
                        style: 'ui',
                        elementPosition: 'b c',
                        arrowShow: false,
                        className: 'danger'
                    });
                }
            }
        };
        HomeButtons.prototype.menuclicked = function ($event) {
            $.notify("You clicked " + $event.detail.title, {
                style: 'ui',
                className: 'primary',
                autoHide: true
            });
        };
        HomeButtons = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [ui_app_state_1.UIApplicationState, ui_dialog_service_1.UIDialogService])
        ], HomeButtons);
        return HomeButtons;
    })();
    exports.HomeButtons = HomeButtons;
});
