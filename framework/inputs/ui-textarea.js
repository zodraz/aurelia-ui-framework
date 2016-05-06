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
define(["require", "exports", "aurelia-framework", "./ui-input-group"], function (require, exports, aurelia_framework_1, ui_input_group_1) {
    "use strict";
    var UITextArea = (function (_super) {
        __extends(UITextArea, _super);
        function UITextArea(element) {
            _super.call(this, element);
            this.value = '';
            this.checked = false;
            this.disabled = false;
            this.readonly = false;
            this.placeholder = '';
            this.rows = '5';
            this.dir = '';
        }
        UITextArea.prototype.attached = function () {
            var _this = this;
            _super.prototype.attached.call(this);
            if (!isEmpty(this.autoComplete))
                this.__input.onkeydown = function (evt) { return _this.showList(evt); };
        };
        UITextArea.prototype.showList = function (evt) {
            var code = (evt.keyCode || evt.which);
            console.log(this.getTextFromHeadToCaret());
        };
        UITextArea.prototype.getTextFromHeadToCaret = function () {
            var range = window.getSelection().getRangeAt(0);
            var selection = range.cloneRange();
            selection.selectNodeContents(range.startContainer);
            return selection.toString().substring(0, range.startOffset);
        };
        UITextArea.prototype.keyPress = function (evt) {
            if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0)
                return true;
            var code = (evt.keyCode || evt.which);
            if (code == 13 && this.__focus) {
                this.__focus = false;
                return false;
            }
            if (code === 38) {
                var h = this.__list.querySelector('.ui-list-item.hilight');
                if (h === null)
                    h = this.__list.querySelector('.ui-list-item.selected');
                if (h != null) {
                    h = h.previousElementSibling;
                    if (h.tagName === 'P')
                        h = h.previousElementSibling;
                    if (h !== null) {
                        if (this.__hilight != null)
                            this.__hilight.classList.remove('hilight');
                        (this.__hilight = h).classList.add('hilight');
                        this.__scrollIntoView();
                    }
                }
                return false;
            }
            else if (code === 40) {
                var h = this.__list.querySelector('.ui-list-item.hilight');
                if (h === null)
                    h = this.__list.querySelector('.ui-list-item.selected');
                if (h !== null)
                    h = h.nextElementSibling;
                if (h === null)
                    h = this.__list.querySelector('.ui-list-item');
                if (h.tagName === 'P')
                    h = h.nextElementSibling;
                if (h !== null) {
                    if (this.__hilight != null)
                        this.__hilight.classList.remove('hilight');
                    (this.__hilight = h).classList.add('hilight');
                    this.__scrollIntoView();
                }
                return false;
            }
            return _super.prototype.keyPress.call(this, evt);
        };
        UITextArea.prototype.__clicked = function ($event) {
            var o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
            if (o !== null) {
            }
        };
        UITextArea.prototype.__scrollIntoView = function () {
            this.__list.scrollTop = (this.__hilight !== null ? this.__hilight.offsetTop - (this.__list.offsetHeight / 2) : 0);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Boolean)
        ], UITextArea.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UITextArea.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UITextArea.prototype, "readonly", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "prefixIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "prefixText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "suffixIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "suffixText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "buttonIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "buttonText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "helpText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "rows", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITextArea.prototype, "dir", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UITextArea.prototype, "autoComplete", void 0);
        UITextArea = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-textarea'), 
            __metadata('design:paramtypes', [Element])
        ], UITextArea);
        return UITextArea;
    }(ui_input_group_1.UIInputGroup));
    exports.UITextArea = UITextArea;
});
