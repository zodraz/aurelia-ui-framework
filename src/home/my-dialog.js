var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/index"], function (require, exports, index_1) {
    "use strict";
    var MyDialog = (function (_super) {
        __extends(MyDialog, _super);
        function MyDialog() {
            _super.apply(this, arguments);
            this.modal = false;
            this.icon = 'fi-vaadin-exclamation-circle';
            this.title = "Dialog " + MyDialog.i++;
            this.md = "\n# Hello World\n\n##### I _Love_ ~~HTML~~ __Markdown__!\n\n---\n\nI can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!\n\nLook at me I'm a list\n\n* Item\n* Item\n* Item\n\nAnd I'm numbered\n\n1. Item\n2. Item\n3. Item\n\nI can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com\n\n![Image](images/heart.png) Dont you just love images!\n\n\n";
        }
        MyDialog.prototype.canActivate = function (model) {
            this.modal = (model || { modal: false }).modal;
            return true;
        };
        MyDialog.i = 1;
        return MyDialog;
    }(index_1.UIDialog));
    exports.MyDialog = MyDialog;
});
