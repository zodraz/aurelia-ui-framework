var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/index"], function (require, exports, index_1) {
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
                .text('./example.md')
                .then(function (resp) { return _this.md = resp; });
        };
        MyDialog.i = 1;
        return MyDialog;
    }(index_1.UIDialog));
    exports.MyDialog = MyDialog;
});
