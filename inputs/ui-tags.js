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
    var UITags = (function (_super) {
        __extends(UITags, _super);
        function UITags(element) {
            _super.call(this, element);
            this.__noResult = false;
            this.__tags = [];
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
        UITags.prototype.bind = function () {
            _super.prototype.bind.call(this);
            this.optionsChanged(this.options);
            this.__noList = this.element.hasAttribute('no-list');
        };
        UITags.prototype.attached = function () {
            var _this = this;
            _super.prototype.attached.call(this);
            setTimeout(function () { return _this.valueChanged(_this.value); }, 500);
        };
        UITags.prototype.detached = function () {
        };
        UITags.prototype.valueChanged = function (newValue) {
            var v = newValue || [];
            if (!ui_utils_1._.isArray(v))
                v = v.split(',');
            if (this.__noList) {
                this.__tags = v;
            }
            else {
                this.__options = this.__available = ui_utils_1._.cloneDeep(this.options);
                this.__tags = ui_utils_1._['removeByValues'](this.__available, this.valueProperty, v);
            }
        };
        UITags.prototype.optionsChanged = function (newValue) {
            this.__noResult = isEmpty(newValue);
            this.options = newValue;
            this.__isFiltered = false;
            this.__isGrouped = !ui_utils_1._.isArray(newValue);
            this.__options = this.__available = ui_utils_1._.cloneDeep(this.options);
        };
        UITags.prototype.readonlyChanged = function () {
            _super.prototype.readonlyChanged.call(this);
            if (isTrue(this.readonly))
                this.__tagInput.classList.add('ui-readonly');
            else
                this.__tagInput.classList.remove('ui-readonly');
        };
        UITags.prototype.disable = function (disabled) {
            _super.prototype.disable.call(this, disabled);
            if (disabled === true || this.disabled === true || this.checked === false)
                this.__tagInput.classList.add('ui-disabled');
            else
                this.__tagInput.classList.remove('ui-disabled');
        };
        UITags.prototype.__select = function (item) {
            if (this.__noList) {
                var v = ui_utils_1._.trim(this.__searchText);
                if (!isEmpty(v) && this.__tags.indexOf(v) == -1)
                    this.__tags.push(v);
                this.value = this.__tags.join(',');
                this.__searchText = '';
                this.__focus = true;
            }
            else if (item) {
                this.__searchText = '';
                this.__tags.push(item['model']);
                this.value = ui_utils_1._.map(this.__tags, this.valueProperty).join(',');
            }
        };
        UITags.prototype.__deselect = function (item) {
            if (isEmpty(item))
                return;
            ui_utils_1._.remove(this.__tags, [this.valueProperty, item[this.valueProperty]]);
            this.value = ui_utils_1._.map(this.__tags, this.valueProperty).join(',');
        };
        UITags.prototype.__clicked = function ($event) {
            var o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
            if (o !== null) {
                this.__select(o);
            }
        };
        UITags.prototype.__gotFocus = function () {
            var _this = this;
            this.__focus = true;
            setTimeout(function () {
                _this.__input.select();
                _this.__scrollIntoView();
            }, 20);
            this.__tagInput.classList.add('ui-focus');
        };
        UITags.prototype.__lostFocus = function () {
            this.__focus = false;
            this.__tagInput.classList.remove('ui-focus');
        };
        UITags.prototype.inputClicked = function (evt) {
            var b = getParentByClass(evt.target, 'ui-tag', 'ui-input');
            if (b !== null)
                this.__deselect(b['model']);
        };
        UITags.prototype.keyDown = function (evt) {
            if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0)
                return true;
            var code = (evt.keyCode || evt.which);
            if (code == 13 && this.__focus) {
                this.__focus = false;
                this.__select(this.__hilight);
                return false;
            }
            else if (code == 13 && !this.__focus) {
                return ui_event_1.UIEvent.fireEvent('enterpressed', this.element, this);
            }
            if (this.__noResult)
                return true;
            this.__focus = true;
            if (code === 8 && isEmpty(this.__searchText)) {
                this.__deselect(this.__tags.pop());
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
            return true;
        };
        UITags.prototype.keyPress = function (evt) {
            if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0)
                return true;
            var code = (evt.keyCode || evt.which);
        };
        UITags.prototype.formatter = function () {
            return this.value;
        };
        UITags.prototype.__scrollIntoView = function () {
        };
        UITags.prototype.__searchTextChanged = function () {
            var _this = this;
            if (this.__noList)
                return;
            if (ui_utils_1._.isEmpty(this.__searchText)) {
                this.__options = ui_utils_1._.cloneDeep(this.options);
                this.__noResult = isEmpty(this.__options);
                this.__isFiltered = false;
                return;
            }
            var opts = ui_utils_1._.cloneDeep(this.__available);
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
            setTimeout(function () { return _this.__hilight = _this.__list.querySelector(".ui-list-item") || null; }, 100);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', String)
        ], UITags.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Boolean)
        ], UITags.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UITags.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UITags.prototype, "readonly", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "prefixIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "prefixText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "suffixIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "suffixText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "buttonIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "buttonText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "helpText", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "dir", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UITags.prototype, "options", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', String)
        ], UITags.prototype, "valueProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UITags.prototype, "displayProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UITags.prototype, "iconProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UITags.prototype, "iconClass", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UITags.prototype, "emptyText", void 0);
        UITags = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customElement('ui-tags'), 
            __metadata('design:paramtypes', [Element])
        ], UITags);
        return UITags;
    }(ui_input_group_1.UIInputGroup));
    exports.UITags = UITags;
});
