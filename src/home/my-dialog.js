var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../framework/index"], function (require, exports, aurelia_framework_1, index_1) {
    "use strict";
    var MyDialog = (function (_super) {
        __extends(MyDialog, _super);
        function MyDialog(httpClient) {
            _super.call(this);
            this.httpClient = httpClient;
            this.md = '';
            this.modal = false;
            this.icon = 'fi-vaadin-exclamation-circle';
            this.title = "Dialog " + MyDialog.i++;
        }
        MyDialog.prototype.canActivate = function (model) {
            var _this = this;
            this.modal = (model || { modal: false }).modal;
            return this.httpClient
                .text('./src/home/example.md')
                .then(function (resp) { return _this.md = resp; });
        };
        MyDialog.i = 1;
        MyDialog = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [index_1.UIHttpService])
        ], MyDialog);
        return MyDialog;
    }(index_1.UIDialog));
    exports.MyDialog = MyDialog;
});
