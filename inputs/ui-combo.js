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
define(["require", "exports", "aurelia-framework", "./ui-input-group", "../utils/ui-utils", "../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_input_group_1, ui_utils_1, ui_event_1) {
    "use strict";
    var UIComboBox = (function (_super) {
        __extends(UIComboBox, _super);
        function UIComboBox(element) {
            _super.call(this, element);
            this.__noResult = false;
            this.__reverse = false;
            this.__hilight = null;
            this.value = '';
            this.checked = false;
            this.disabled = false;
            this.readonly = false;
            this.placeholder = '';
            this.dir = '';
            this.options = [];
            this.valueProperty = 'id';
            this.displayProperty = 'name';
            this.iconProperty = '';
            this.iconClass = '';
            this.emptyText = 'No Results Found...';
        }
        UIComboBox.prototype.bind = function () {
            _super.prototype.bind.call(this);
            this.optionsChanged(this.options);
        };
        UIComboBox.prototype.attached = function () {
            var _this = this;
            _super.prototype.attached.call(this);
            setTimeout(function () { return _this.valueChanged(_this.value); }, 500);
        };
        UIComboBox.prototype.detached = function () {
        };
        UIComboBox.prototype.valueChanged = function (newValue) {
            if (!isEmpty(newValue)) {
                var v = ui_utils_1._['findDeep'](this.options, this.valueProperty, newValue);
                this.__searchText = v ? v[this.displayProperty] : '';
                if (v === null)
                    this.value = null;
                ui_event_1.UIEvent.fireEvent('select', this.element, v);
            }
            else {
                this.value = this.__searchText = '';
                ui_event_1.UIEvent.fireEvent('select', this.element, null);
            }
        };
        UIComboBox.prototype.optionsChanged = function (newValue) {
            var _this = this;
            this.__noResult = isEmpty(newValue);
            this.options = newValue;
            this.__isFiltered = false;
            this.__isGrouped = !ui_utils_1._.isArray(newValue);
            this.__options = ui_utils_1._.cloneDeep(this.options || []);
            setTimeout(function () { return _this.valueChanged(_this.value); }, 500);
        };
        UIComboBox.prototype.__select = function (item) {
            if (item !== null) {
                this.value = item.dataset['value'];
                this.__searchText = item.model[this.displayProperty];
            }
            else {
                this.value = this.__searchText = '';
            }
            if (this.__isFiltered) {
                this.__isFiltered = false;
                this.__options = ui_utils_1._.cloneDeep(this.options);
                this.__noResult = isEmpty(this.__options);
            }
            this.__focus = false;
        };
        UIComboBox.prototype.__clicked = function ($event) {
            var o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
            if (o !== null) {
                this.__select(this.__hilight = o);
            }
        };
        UIComboBox.prototype.__gotFocus = function () {
            var _this = this;
            this.__hilight = this.__list.querySelector("[data-value=\"" + this.value + "\"]");
            this.__focus = true;
            var el = this.element;
            if (el.offsetParent.scrollTop + el.offsetParent['offsetHeight'] < el.offsetHeight + el.offsetTop + 50) {
                this.__reverse = true;
                this.__list.style.bottom = el.offsetHeight + 'px';
            }
            else {
                this.__reverse = false;
                this.__list.style.bottom = "auto";
            }
            setTimeout(function () {
                _this.__input.select();
                _this.__scrollIntoView();
            }, 20);
        };
        UIComboBox.prototype.__lostFocus = function () {
            this.__select(this.__hilight);
            this.__focus = false;
        };
        UIComboBox.prototype.keyDown = function (evt) {
            if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0)
                return true;
            var code = (evt.keyCode || evt.which);
            if (code == 13 && this.__focus) {
                this.__select(this.__hilight);
                this.__focus = false;
                return false;
            }
            else if (code == 13 && !this.__focus) {
                return ui_event_1.UIEvent.fireEvent('enterpressed', this.element, this);
            }
            if (this.__noResult)
                return true;
            this.__focus = true;
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
            return true;
        };
        UIComboBox.prototype.keyPress = function (evt) {
            if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0)
                return true;
            var code = (evt.keyCode || evt.which);
        };
        UIComboBox.prototype.formatter = function () {
            return this.value;
        };
        UIComboBox.prototype.__scrollIntoView = function () {
            this.__list.scrollTop = (this.__hilight !== null ? this.__hilight.offsetTop - (this.__list.offsetHeight / 2) : 0);
        };
        UIComboBox.prototype.__searchTextChanged = function () {
            var _this = this;
            if (ui_utils_1._.isEmpty(this.__searchText)) {
                this.__options = ui_utils_1._.cloneDeep(this.options);
                this.__noResult = isEmpty(this.__options);
                this.__isFiltered = false;
                return;
            }
            var opts = ui_utils_1._.cloneDeep(this.options);
            var rx = new RegExp(ui_utils_1.UIUtils.getAscii(this.__searchText), 'i');
            if (this.__isGrouped) {
                this.__options = ui_utils_1._.forEach(opts, function (v, k) {
                    opts[k] = ui_utils_1._.filter(v, function (n) {
                        var lbl = n;
                        if (!isEmpty(n[_this.displayProperty])) {
                            lbl = n[_this.displayProperty];
                        }
                        lbl = lbl + '';
                        var asc = ui_utils_1.UIUtils.getAscii(lbl);
                        if (rx.test(asc)) {
                            if (n.hasOwnProperty(_this.displayProperty)) {
                                var start = asc.search(rx);
                                lbl = lbl.substr(0, start + _this.__searchText.length) + '</u>' +
                                    lbl.substr(start + _this.__searchText.length);
                                lbl = lbl.substr(0, start) + '<u>' + lbl.substr(start);
                                n['__display'] = lbl;
                            }
                            return true;
                        }
                        return false;
                    });
                    if (opts[k].length === 0)
                        delete opts[k];
                });
            }
            if (!this.__isGrouped) {
                this.__options = ui_utils_1._.filter(opts, function (n) {
                    var lbl = n;
                    if (!isEmpty(n[_this.displayProperty])) {
                        lbl = n[_this.displayProperty];
                    }
                    lbl = lbl + '';
                    var asc = ui_utils_1.UIUtils.getAscii(lbl);
                    if (rx.test(asc)) {
                        if (n.hasOwnProperty(_this.displayProperty)) {
                            var start = asc.search(rx);
                            lbl = lbl.substr(0, start + _this.__searchText.length) + '</u>' +
                                lbl.substr(start + _this.__searchText.length);
                            lbl = lbl.substr(0, start) + '<u>' + lbl.substr(start);
                            n['__display'] = lbl;
                        }
                        return true;
                    }
                    return false;
                });
            }
            this.__isFiltered = true;
            this.__noResult = isEmpty(this.__options);
            setTimeout(function () { return _this.__hilight = _this.__list.querySelector(".ui-list-item") || _this.__hilight; }, 100);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Boolean)
        ], UIComboBox.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UIComboBox.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UIComboBox.prototype, "readonly", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "prefixIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "prefixText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "suffixIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "suffixText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "buttonIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "buttonText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "helpText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "dir", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIComboBox.prototype, "options", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UIComboBox.prototype, "valueProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIComboBox.prototype, "displayProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIComboBox.prototype, "iconProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIComboBox.prototype, "iconClass", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIComboBox.prototype, "emptyText", void 0);
        UIComboBox = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customElement('ui-combo'), 
            __metadata('design:paramtypes', [Element])
        ], UIComboBox);
        return UIComboBox;
    }(ui_input_group_1.UIInputGroup));
    exports.UIComboBox = UIComboBox;
});
