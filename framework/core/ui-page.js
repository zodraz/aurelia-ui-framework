var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, ui_utils_1) {
    "use strict";
    var UIPage = (function () {
        function UIPage(element) {
            this.element = element;
        }
        UIPage.prototype.toast = function (config) {
            if (typeof config === 'string')
                config = { message: config };
            config.extraClass = 'ui-page-toast';
            ui_utils_1.UIUtils.showToast(this.__body, config);
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIPage.prototype, "pageTitle", void 0);
        UIPage = __decorate([
            aurelia_framework_1.customElement('ui-page'), 
            __metadata('design:paramtypes', [Element])
        ], UIPage);
        return UIPage;
    }());
    exports.UIPage = UIPage;
    var UISection = (function () {
        function UISection(element) {
            this.element = element;
        }
        UISection.prototype.bind = function () {
            if (this.element.hasAttribute('column')) {
                this.element.classList.add('ui-section-column');
            }
            else {
                this.element.classList.add('ui-section-row');
            }
        };
        UISection = __decorate([
            aurelia_framework_1.customElement('ui-section'),
            aurelia_framework_1.inlineView('<template class="ui-section"><content></content></template>'), 
            __metadata('design:paramtypes', [Element])
        ], UISection);
        return UISection;
    }());
    exports.UISection = UISection;
    var UIContent = (function () {
        function UIContent(element) {
            this.element = element;
        }
        UIContent.prototype.bind = function () {
            if (this.element.hasAttribute('auto')) {
                this.element.classList.add('ui-auto-fit');
            }
            else if (this.element.hasAttribute('scroll')) {
                this.element.classList.add('ui-scroll');
            }
            if (this.element.hasAttribute('padded'))
                this.element.classList.add('ui-pad-all');
        };
        UIContent = __decorate([
            aurelia_framework_1.customElement('ui-content'),
            aurelia_framework_1.inlineView('<template class="ui-content"><content></content></template>'), 
            __metadata('design:paramtypes', [Element])
        ], UIContent);
        return UIContent;
    }());
    exports.UIContent = UIContent;
    var UISidebar = (function () {
        function UISidebar(element) {
            this.element = element;
            this.collapsible = false;
            this.width = '220px';
        }
        UISidebar.prototype.bind = function () {
            this.collapsible = this.element.hasAttribute('collapsible');
            if (this.element.hasAttribute('scroll'))
                this.element.classList.add('ui-scroll');
            if (this.element.hasAttribute('padded'))
                this.element.classList.add('ui-pad-all');
        };
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UISidebar.prototype, "width", void 0);
        UISidebar = __decorate([
            aurelia_framework_1.customElement('ui-sidebar'),
            aurelia_framework_1.inlineView("<template class=\"ui-sidebar\" role=\"sidebar\" css.bind=\"{'flex-basis':width}\"><content></content></template>"), 
            __metadata('design:paramtypes', [Element])
        ], UISidebar);
        return UISidebar;
    }());
    exports.UISidebar = UISidebar;
    var UIDivider = (function () {
        function UIDivider() {
        }
        UIDivider = __decorate([
            aurelia_framework_1.customElement('ui-divider'),
            aurelia_framework_1.inlineView('<template class="ui-divider" role="separator"></template>'), 
            __metadata('design:paramtypes', [])
        ], UIDivider);
        return UIDivider;
    }());
    exports.UIDivider = UIDivider;
    var UIToolbar = (function () {
        function UIToolbar() {
        }
        UIToolbar = __decorate([
            aurelia_framework_1.customElement('ui-toolbar'),
            aurelia_framework_1.inlineView("<template class=\"ui-toolbar ui-button-bar\" role=\"toolbar\"><content></content></template>"), 
            __metadata('design:paramtypes', [])
        ], UIToolbar);
        return UIToolbar;
    }());
    exports.UIToolbar = UIToolbar;
    var UIStatsbar = (function () {
        function UIStatsbar() {
        }
        UIStatsbar = __decorate([
            aurelia_framework_1.customElement('ui-statsbar'),
            aurelia_framework_1.inlineView("<template class=\"ui-statsbar\"><content></content></template>"), 
            __metadata('design:paramtypes', [])
        ], UIStatsbar);
        return UIStatsbar;
    }());
    exports.UIStatsbar = UIStatsbar;
    var UIStat = (function () {
        function UIStat() {
        }
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIStat.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIStat.prototype, "icon", void 0);
        UIStat = __decorate([
            aurelia_framework_1.customElement('ui-stat'),
            aurelia_framework_1.inlineView('<template class="ui-stat"><span class="${icon}" if.bind="icon"></span><div><h1>${value}</h1><h6><content></content></h6></div></template>'), 
            __metadata('design:paramtypes', [])
        ], UIStat);
        return UIStat;
    }());
    exports.UIStat = UIStat;
});
