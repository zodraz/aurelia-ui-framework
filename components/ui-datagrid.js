var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-templating-resources", "../utils/ui-formatters", "../utils/ui-event", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, aurelia_templating_resources_1, ui_formatters_1, ui_event_1, ui_utils_1) {
    "use strict";
    var UIDataGrid = (function () {
        function UIDataGrid(element, signaler) {
            this.element = element;
            this.signaler = signaler;
            this.__isProcessing = false;
            this.columns = [];
            this.defaultSort = 'id';
            this.defaultOrder = 'asc';
            this.dataList = [];
            this.summaryRow = false;
            this.__isResizing = false;
            this.__startX = 0;
            this.__diff = 0;
            this.__id = "UIDataGrid" + UIDataGrid.__id++ + ":Refresh";
        }
        UIDataGrid.prototype.bind = function () {
            var cols = [];
            ui_utils_1._.forEach(this.__columns.children, function (c) {
                cols.push(c['columnDef']);
            });
            this.columns = ui_utils_1._.orderBy(cols, ['locked'], ['desc']);
            this.__sortColumn = this.defaultSort;
            this.__sortOrder = this.defaultOrder;
            this.__doSort(this.dataList);
        };
        UIDataGrid.prototype.attached = function () {
            var w = 0;
            ui_utils_1._.forEach(this.columns, function (c) {
                c.edge = w;
                w += parseInt(c.width || 250);
                return c.__locked;
            });
            this.__table.width = w;
        };
        UIDataGrid.prototype.dataChanged = function (newValue) {
            this.__table.style.tableLayout = 'auto';
            this.__doSort(newValue);
            this.__table.style.tableLayout = 'fixed';
            this.signaler.signal(this.__id);
        };
        UIDataGrid.prototype.isLastLocked = function (locked, index) {
            return (locked && !(this.columns[index + 1] || { __locked: false }).__locked);
        };
        UIDataGrid.prototype.linkClicked = function ($event, id, model) {
            $event.preventDefault();
            if (getParentByClass($event.target, 'ui-button', 'dg-col') === null &&
                getParentByClass($event.target, 'ui-link', 'dg-col') === null) {
                return false;
            }
            try {
                ui_event_1.UIEvent.fireEvent('linkclick', this.element, { dataId: id, model: model });
            }
            catch (e) {
            }
            return false;
        };
        UIDataGrid.prototype.sort = function ($event, column) {
            var _this = this;
            if (column.__sortable !== true)
                return;
            this.__isProcessing = true;
            this.__sortColumn = column.dataId;
            this.__sortOrder = $event.target.classList.contains('asc') ? 'desc' : 'asc';
            setTimeout(function () {
                _this.__doSort(_this.dataList);
                _this.__isProcessing = false;
            }, 100);
        };
        UIDataGrid.prototype.summary = function (column) {
            if (ui_utils_1._.isObject(this.summaryRow)) {
                return this.format(this.summaryRow[column.dataId], column, this.summaryRow);
            }
            else if (!ui_utils_1._.isEmpty(column.summary)) {
                var v = 0, prefix = '';
                switch (column.summary) {
                    case 'sum':
                        v = ui_utils_1._.sumBy(this.__data, column.dataId);
                        break;
                    case 'avg':
                        prefix = 'avg. ';
                        v = ui_utils_1._.sumBy(this.__data, column.dataId) / this.__data.length;
                        break;
                    default:
                        return column.summary;
                }
                return "<small>" + prefix + "</small>" + this.format(v, column, {});
            }
            else {
                return '&nbsp;';
            }
        };
        UIDataGrid.prototype.buildButton = function (value, column, model) {
            var ret = {
                enabled: true, theme: 'default', title: column.buttonTitle, icon: column.buttonGlyph
            };
            if (isFunction(column.button)) {
                Object.assign(ret, column.button({ value: value, column: column, model: model }) || {});
            }
            if (!ret.enabled)
                return '<span>&nbsp;</span>';
            return "<button class=\"ui-button ui-button-" + ret.theme + " ui-button-small\">\n\t\t\t\t\t" + (ret.icon ? '<span class="' + ret.icon + '"></span>' : '') + "\n\t\t\t\t\t" + (ret.title ? '<span>' + ret.title + '</span>' : '') + "\n\t\t\t\t</button>";
        };
        UIDataGrid.prototype.format = function (value, column, model) {
            var retVal = '';
            var newValue = value;
            if (column.labels) {
                newValue = column.labels[value];
            }
            if (isFunction(column.value)) {
                newValue = column.value({ value: value, column: column, model: model });
            }
            if (isFunction(column.display)) {
                retVal = column.display({ value: value, column: column, model: model });
            }
            else {
                switch (column.__type) {
                    case 'currency':
                        retVal = ui_formatters_1.UIFormat.currency(newValue, model[column.symbol] || column.symbol || '$', column.format || '$ 0,0.00');
                        break;
                    case 'number':
                        retVal = ui_formatters_1.UIFormat.number(newValue, column.format || '0,0.00');
                        break;
                    case 'date':
                        retVal = ui_formatters_1.UIFormat.date(newValue, column.format || 'DD MMM YYYY hh:mm A');
                        break;
                    case 'fromnow':
                        retVal = ui_formatters_1.UIFormat.fromNow(newValue);
                        break;
                    case 'exrate':
                        retVal = ui_formatters_1.UIFormat.exRate(newValue);
                        break;
                    case 'color':
                        retVal = "<span class=\"color-code color-" + value + "\"></span> " + newValue;
                        break;
                    default:
                        retVal = newValue;
                }
            }
            return isEmpty(retVal) ? '&nbsp;' : retVal;
        };
        UIDataGrid.prototype.__doSort = function (data) {
            var column = ui_utils_1._.find(this.columns, ['dataId', this.__sortColumn]);
            var columnId = column.dataId || this.defaultSort;
            var siblingId = column.dataSort || this.defaultSort;
            this.__data = ui_utils_1._.orderBy(data, [columnId, siblingId], [this.__sortOrder, this.defaultOrder]);
        };
        UIDataGrid.prototype.resizeStart = function ($event) {
            var _this = this;
            if ($event.button != 0)
                return;
            if (!$event.target.classList.contains('resizer'))
                return;
            this.__index = $event.target.dataset['index'];
            var column = this.columns[this.__index];
            if (column.__resizeable !== true)
                return;
            document.addEventListener('mousemove', function (e) { return _this.resize(e); });
            document.addEventListener('mouseup', function (e) { return _this.resizeEnd(e); });
            this.__column = this.__table.querySelector("colgroup col[data-index=\"" + this.__index + "\"]");
            this.__startX = ($event.x || $event.clientX);
            this.__isResizing = true;
            this.__diff = 0;
            this.__ghost.classList.add('resize');
            this.__ghost.classList.remove('ui-hide');
            this.__ghost.style.left = (this.__column.offsetLeft + parseInt(this.__column.width)) + 'px';
        };
        UIDataGrid.prototype.resize = function ($event) {
            if (!this.__isResizing)
                return;
            var column = this.columns[this.__index];
            var x = ($event.x || $event.clientX) - this.__startX;
            if (x < 0 && (parseInt(this.__column.width) + this.__diff) <= (column.minWidth || 80))
                return;
            if (x > 0 && (parseInt(this.__column.width) + this.__diff) >= (500))
                return;
            this.__startX = ($event.x || $event.clientX);
            this.__diff += x;
            this.__ghost.style.left = (parseInt(this.__ghost.style.left) + x) + 'px';
        };
        UIDataGrid.prototype.resizeEnd = function ($event) {
            var _this = this;
            document.removeEventListener('mousemove', function (e) { return _this.resize(e); });
            document.removeEventListener('mouseup', function (e) { return _this.resizeEnd(e); });
            if (!this.__isResizing)
                return;
            this.__ghost.classList.add('ui-hide');
            this.__ghost.classList.remove('resize');
            var column = this.columns[this.__index];
            this.__isResizing = false;
            this.__column.width = column.width = (parseInt(this.__column.width) + this.__diff);
            this.__table.width = parseInt(this.__table.width) + this.__diff;
            var w = 0;
            ui_utils_1._.forEach(this.columns, function (c) {
                c.edge = w;
                w += parseInt(c.width || 250);
                return c.__locked;
            });
        };
        UIDataGrid.__id = 0;
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIDataGrid.prototype, "defaultSort", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIDataGrid.prototype, "defaultOrder", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIDataGrid.prototype, "dataList", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIDataGrid.prototype, "summaryRow", void 0);
        UIDataGrid = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-datagrid'), 
            __metadata('design:paramtypes', [Element, aurelia_templating_resources_1.BindingSignaler])
        ], UIDataGrid);
        return UIDataGrid;
    }());
    exports.UIDataGrid = UIDataGrid;
    var UIDataColumn = (function () {
        function UIDataColumn(element) {
            this.element = element;
            this.buttonTitle = '';
            this.buttonGlyph = '';
            this.edge = 0;
            this.__title = '';
            this.__type = 'text';
            this.__align = 'start';
            this.__link = false;
            this.__button = false;
            this.__locked = false;
            this.__sortable = false;
            this.__resizeable = false;
            if (this.element.hasAttribute('center'))
                this.__align = 'center';
            if (this.element.hasAttribute('end'))
                this.__align = 'end';
            if (this.element.hasAttribute('number'))
                this.__type = 'number';
            if (this.element.hasAttribute('currency'))
                this.__type = 'currency';
            if (this.element.hasAttribute('date'))
                this.__type = 'date';
            if (this.element.hasAttribute('from-now'))
                this.__type = 'fromnow';
            if (this.element.hasAttribute('exrate'))
                this.__type = 'exrate';
            if (this.element.hasAttribute('color'))
                this.__type = 'color';
            this.__link = this.element.hasAttribute('link');
            this.__locked = this.element.hasAttribute('locked');
            this.__sortable = this.element.hasAttribute('sortable');
            this.__resizeable = this.element.hasAttribute('resizeable');
            this.element['columnDef'] = this;
        }
        UIDataColumn.prototype.bind = function () {
            if (this.element.hasAttribute('view'))
                this.buttonGlyph = 'fi-ui-view';
            if (this.element.hasAttribute('edit'))
                this.buttonGlyph = 'fi-ui-edit';
            if (this.element.hasAttribute('delete'))
                this.buttonGlyph = 'fi-ui-delete';
            this.__title = this.element.textContent;
            if (this.__button = !(isEmpty(this.buttonGlyph) && isEmpty(this.buttonTitle)))
                this.__align = 'center';
            if (!isEmpty(this.buttonGlyph) && isEmpty(this.buttonTitle)) {
                this.width = 36;
            }
            else if (this.__type == 'date') {
                this.width = 160;
                this.__align = 'center';
            }
            else if (this.__type == 'exrate') {
                this.width = 100;
                this.__align = 'end';
            }
            else if (this.__type == 'fromnow') {
                this.width = 120;
            }
            else if (this.__type == 'number') {
                this.width = 120;
                this.__align = 'end';
            }
            else if (this.__type == 'currency') {
                this.width = 120;
                this.__align = 'end';
            }
            else {
                this.width = this.width || this.minWidth || 250;
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataId", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataSort", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "format", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "symbol", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "summary", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDataColumn.prototype, "labels", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDataColumn.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDataColumn.prototype, "button", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDataColumn.prototype, "display", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "buttonTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "buttonGlyph", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], UIDataColumn.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], UIDataColumn.prototype, "minWidth", void 0);
        UIDataColumn = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-data-column'),
            aurelia_framework_1.inlineView('<template><content></content></template>'), 
            __metadata('design:paramtypes', [Element])
        ], UIDataColumn);
        return UIDataColumn;
    }());
    exports.UIDataColumn = UIDataColumn;
    var UIPager = (function () {
        function UIPager(element) {
            this.element = element;
            this.current = 1;
            this.total = 1;
        }
        UIPager.prototype.currentChanged = function (newValue) {
            if (isNaN(parseInt(newValue))) {
                newValue = this.current;
            }
            else {
                if (parseInt(newValue) < 1)
                    newValue = 1;
                if (parseInt(newValue) > this.total)
                    newValue = this.total;
                this.current = parseInt(newValue);
            }
        };
        UIPager.prototype.fireChange = function (n) {
            if (n < 1 && this.current == 1)
                return;
            if (n > 0 && this.current == this.total)
                return;
            if (n === 0)
                this.current = 1;
            if (n === -1)
                this.current--;
            if (n === 1)
                this.current++;
            if (n === 2)
                this.current = this.total;
            ui_event_1.UIEvent.fireEvent('change', this.element, this.current);
        };
        UIPager.prototype.keyCheck = function (evt) {
            if (evt.ctrlKey || evt.altKey || evt.metaKey || evt.charCode === 0)
                return true;
            if ((evt.which || evt.keyCode) === 13) {
                return ui_event_1.UIEvent.fireEvent('change', this.element, this.current);
            }
            return /[0-9]/.test(String.fromCharCode(evt.charCode));
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Number)
        ], UIPager.prototype, "current", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Number)
        ], UIPager.prototype, "total", void 0);
        UIPager = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-pager'),
            aurelia_framework_1.useView('./ui-pager.html'), 
            __metadata('design:paramtypes', [Element])
        ], UIPager);
        return UIPager;
    }());
    exports.UIPager = UIPager;
});
