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
define(["require", "exports", "aurelia-framework", "../utils/ui-event", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, ui_event_1, ui_utils_1) {
    var UIDataGrid = (function () {
        function UIDataGrid(element) {
            this.element = element;
            this.columns = [];
            this.summaryRow = false;
            this.isProcessing = false;
            this.currentSortColumn = '';
            this.currentSortOrder = '';
            this.idColumn = 'id';
            this._isResizing = false;
            this._startX = 0;
            $(this.element).data('UIDataGrid', this);
        }
        UIDataGrid.prototype.bind = function () {
            if (this.summaryRow === true || this.summaryRow === "true")
                this.summaryRow = true;
            var cols = [];
            $(this._colDefs).children().each(function (i, c) {
                var col = $(c).data('UIDataColumn');
                col.title = c.innerText;
                col.columnDef = c;
                cols.push(col);
            });
            this.columns = ui_utils_1._.sortByOrder(cols, ['locked'], ['desc']);
        };
        UIDataGrid.prototype.attached = function () {
            var w = 0;
            ui_utils_1._.forEach(this.columns, function (c) {
                c.edge = w;
                w += parseInt(c.width || 250);
            });
            this._table.width = w;
            this._data = this.data;
        };
        UIDataGrid.prototype.dataChanged = function (newValue) {
            this._data = newValue;
        };
        UIDataGrid.prototype.isLastLocked = function (locked, index) {
            return (locked && !(this.columns[index + 1] || { locked: false }).locked);
        };
        UIDataGrid.prototype.sort = function ($event, column) {
            var _this = this;
            if (column.sortable !== true)
                return;
            this.isProcessing = true;
            this.currentSortColumn = column.dataId;
            this.currentSortOrder = $($event.target).hasClass('asc') ? 'desc' : 'asc';
            var sibling = column.dataSort || this.idColumn;
            setTimeout(function () {
                _this.data = ui_utils_1._.sortByOrder(_this.data, [_this.currentSortColumn, sibling], [_this.currentSortOrder, 'asc']);
                _this.isProcessing = false;
            }, 100);
        };
        UIDataGrid.prototype.highlight = function ($event) {
            if ($($event.target).closest('a,button').length > 0)
                return true;
            if ($event.shiftKey && $($event.target).closest('tr').hasClass('active')) {
                $($event.target).closest('tr').removeClass('active');
            }
            else {
                if (!$event.shiftKey)
                    $(this._table).find('tbody tr.active').removeClass('active');
                $($event.target).closest('tr').addClass('active');
            }
        };
        UIDataGrid.prototype.linkClicked = function ($event, id, model) {
            $event.preventDefault();
            try {
                ui_event_1.UIEvent.fireEvent('linkclick', this.element, { link: id, model: model });
            }
            catch (e) {
            }
            return false;
        };
        UIDataGrid.prototype.getAlignment = function (col) {
            if (col.button || col.dataType == 'date')
                return 'center';
            if (col.dataType == 'number' || col.dataType == 'currency' || col.dataType == 'exrate')
                return 'end';
            return 'start';
        };
        UIDataGrid.prototype.format = function (value, column, model) {
            var newValue = value;
            if (column.labels) {
                newValue = column.labels[value];
            }
            var x = ui_event_1.UIEvent.fireEvent('datavalue', column.columnDef, { value: value, column: column, model: model });
            if (x.value)
                return x.value;
            switch (column.dataType) {
                case 'currency':
                    return ui_utils_1.Format.numberDisplay(newValue, column.dataFormat || '$ 0,0.00', model[column.dataSymbol] || column.dataSymbol || '$');
                case 'number':
                    return ui_utils_1.Format.numberDisplay(newValue, column.dataFormat || '0,0.00');
                case 'date':
                    return ui_utils_1.Format.dateDisplay(newValue, column.dataFormat || 'DD MMM YYYY hh:mm A');
                case 'fromnow':
                    return ui_utils_1.Format.fromNow(newValue);
                case 'exrate':
                    return ui_utils_1.Format.exRate(newValue);
                case 'color':
                    return "<span class=\"color-code color-" + value + "\"></span> " + newValue;
                default:
                    return newValue;
            }
        };
        UIDataGrid.prototype.summary = function (column) {
            if (ui_utils_1._.isObject(this.summaryRow)) {
                return this.format(this.summaryRow[column.dataId], column, this.summaryRow);
            }
            else if (!ui_utils_1._.isEmpty(column.dataSummary)) {
                var v = 0, prefix = '';
                switch (column.dataSummary) {
                    case 'sum':
                        v = ui_utils_1._.sum(this.data, column.dataId);
                        break;
                    case 'avg':
                        prefix = 'avg. ';
                        v = ui_utils_1._.sum(this.data, column.dataId) / this.data.length;
                        break;
                    default:
                        return column.dataSummary;
                }
                return "<small>" + prefix + "</small>" + this.format(v, column, {});
            }
            else {
                return ' ';
            }
        };
        UIDataGrid.prototype.resizeStart = function ($event) {
            if (!$($event.target).hasClass('resizer') && !$($event.target).parent().hasClass('resizer'))
                return;
            var el = $($event.target);
            if (!$($event.target).hasClass('resizer'))
                el = $($event.target).parent();
            this._index = el.data('index');
            var column = this.columns[this._index];
            if (column.resizeable !== true)
                return;
            var col = $(this._table).find("colgroup col[data-index=" + this._index + "]");
            col.css('borderRightColor', 'rgba(196,196,196,0.5)');
            this._startX = $event.x;
            this._isResizing = true;
        };
        UIDataGrid.prototype.resizeEnd = function ($event) {
            $(this._table).find('colgroup col').css('borderRightColor', 'transparent');
            this._isResizing = false;
            if ((this.columns[this._index + 1] || { locked: false }).locked) {
                var colNext = $(this._table).find("table td[data-col=" + (this._index + 1) + "]");
                var col = $(this._table).find("colgroup col[data-index=" + this._index + "]").get(0);
                colNext.css('left', parseInt(col.width));
            }
        };
        UIDataGrid.prototype.resize = function ($event) {
            var x = $event.x - this._startX;
            if (!this._isResizing)
                return;
            var column = this.columns[this._index];
            var col = $(this._table).find("colgroup col[data-index=" + this._index + "]").get(0);
            if (x < 0 && col.width <= (column.minWidth || 80))
                return;
            this._startX = $event.x;
            col.width = (parseInt(col.width) + x);
            this._table.width = parseInt(this._table.width) + x;
            this.columns[this._index + 1].edge = parseInt(this.columns[this._index + 1].edge) + x;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataGrid.prototype, "idColumn");
        UIDataGrid = __decorate([
            aurelia_framework_1.bindable({
                name: 'data',
                attribute: 'data-list',
                defaultValue: [],
                changeHandler: 'dataChanged',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay
            }),
            aurelia_framework_1.bindable({
                name: 'summaryRow',
                attribute: 'data-summary',
                defaultValue: false,
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-data-grid'), 
            __metadata('design:paramtypes', [Element])
        ], UIDataGrid);
        return UIDataGrid;
    })();
    exports.UIDataGrid = UIDataGrid;
    var UIDataColumn = (function () {
        function UIDataColumn(element) {
            this.element = element;
            this.buttonGlyph = '';
            this.title = '';
            this.link = false;
            this.button = false;
            this.locked = false;
            this.sortable = false;
            this.resizeable = false;
            if (element.hasAttribute('link'))
                this.link = true;
            if (element.hasAttribute('button') || element.hasAttribute('button-glyph'))
                this.button = true;
            if (element.hasAttribute('locked'))
                this.locked = true;
            if (element.hasAttribute('sortable'))
                this.sortable = true;
            if (element.hasAttribute('resizeable'))
                this.resizeable = true;
            $(element).data('UIDataColumn', this);
            this.columnDef = element;
        }
        UIDataColumn.prototype.bind = function () {
            if (this.buttonGlyph) {
                this.width = 30;
                this.button = true;
            }
            else if (this.dataType == 'date')
                this.width = 150;
            else if (this.dataType == 'exrate')
                this.width = 100;
            else if (this.dataType == 'fromnow')
                this.width = 120;
            else if (this.dataType == 'number')
                this.width = 120;
            else if (this.dataType == 'currency')
                this.width = 120;
            else
                this.width = this.width || this.minWidth || 250;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataId");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataType");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataSort");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataAlign");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataFormat");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataSymbol");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "dataSummary");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], UIDataColumn.prototype, "dataLabels");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIDataColumn.prototype, "buttonGlyph");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], UIDataColumn.prototype, "width");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], UIDataColumn.prototype, "minWidth");
        UIDataColumn = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-data-column'),
            aurelia_framework_1.inlineView('<template><content></content></template>'), 
            __metadata('design:paramtypes', [Element])
        ], UIDataColumn);
        return UIDataColumn;
    })();
    exports.UIDataColumn = UIDataColumn;
});
