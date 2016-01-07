/**
 *    UI Container: Data Grid
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode, inlineView} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {Format, _} from "../utils/ui-utils";
import {BindingSignaler} from "aurelia-templating-resources";
/**
 * @bindable data array model for grid
 * @type {Array<T>}
 */
@bindable({
	name: 'data',
	attribute: 'data-list',
	defaultValue: [],
	changeHandler: 'dataChanged',
	defaultBindingMode: bindingMode.twoWay
})
/**
 * @bindable show summary row
 * @type {boolean | Array<T>}
 */
@bindable({
	name: 'summaryRow',
	attribute: 'data-summary',
	defaultValue: false,
	defaultBindingMode: bindingMode.twoWay
})

@autoinject()
@customElement('ui-data-grid')
export class UIDataGrid {
	private _grid;
	private _colDefs;
	private _cols;
	private _table;
	private _data;
	private columns = [];

	private data:any;
	private summaryRow:any = false;

	private isProcessing:boolean     = false;
	private currentSortColumn:string = '';
	private currentSortOrder:string  = '';

	@bindable idColumn:string  = 'id';
	@bindable emptyText:string = 'No records found';

	constructor(public element:Element, public signaler:BindingSignaler) {
	}

	bind() {
		if (this.summaryRow === true || this.summaryRow === "true") this.summaryRow = true;
		var cols = [];
		$(this._colDefs).children().each((i, c:any)=> {
			let col       = $(c).data('UIDataColumn');
			col.title     = c.innerText;
			col.columnDef = c;
			cols.push(col);
		});
		this.columns = _.sortByOrder(cols, ['locked'], ['desc']);
	}

	reload() {
		this.signaler.signal('UIDataGrid:Reload');
	}

	private attached() {
		var w = 0;
		_.forEach(this.columns, (c:any)=> {
			c.edge = w;
			w += parseInt(c.width || 250);
		});
		this._table.width = w;

		this._data = this.data;
	}

	private dataChanged(newValue) {
		this._table.style.tableLayout = 'auto';
		this._data                    = newValue;
		this._table.style.tableLayout = 'fixed';
	}

	private isLastLocked(locked, index) {
		return (locked && !(this.columns[index + 1] || {locked: false}).locked);
	}

	private sort($event, column) {
		if (column.sortable !== true) return;

		this.isProcessing      = true;
		this.currentSortColumn = column.dataId;
		this.currentSortOrder  = $($event.target).hasClass('asc') ? 'desc' : 'asc';
		var sibling            = column.dataSort || this.idColumn;
		setTimeout(()=> {
			this.data         = _.sortByOrder(this.data,
				[this.currentSortColumn, sibling],
				[this.currentSortOrder, 'asc']);
			this.isProcessing = false;
		}, 100);
	}

	private highlight($event) {
		if ($($event.target).closest('a,button').length > 0) return true;
		if ($event.shiftKey && $($event.target).closest('tr').hasClass('active')) {
			$($event.target).closest('tr').removeClass('active');
		} else {
			if (!$event.shiftKey)
				$(this._table).find('tbody tr.active').removeClass('active');
			$($event.target).closest('tr').addClass('active');
		}
	}

	private linkClicked($event, id, model) {
		$event.preventDefault();
		try {
			UIEvent.fireEvent('linkclick', this.element, {link: id, model: model})
		}
		catch (e) {
		}
		return false;
	}

	private getAlignment(col) {
		if (col.button || col.dataType == 'date') return 'center';
		if (col.dataType == 'number' || col.dataType == 'currency' || col.dataType == 'exrate') return 'end';
		return 'start';
	}

	private format(value, column, model):string {
		var newValue = value;
		if (column.labels) {
			newValue = column.labels[value];
		}
		let x = UIEvent.fireEvent('datavalue', column.columnDef, {value: value, column: column, model: model});
		if (x.value) return x.value;
		switch (column.dataType) {
			case 'currency':
				return Format.currencyDisplay(newValue, column.dataFormat || '$ 0,0.00', model[column.dataSymbol] || column.dataSymbol || '$');
			case 'number':
				return Format.numberDisplay(newValue, column.dataFormat || '0,0.00');
			case 'date':
				return Format.dateDisplay(newValue, column.dataFormat || 'DD MMM YYYY hh:mm A');
			case 'fromnow':
				return Format.fromNow(newValue);
			case 'exrate':
				return Format.exRate(newValue);
			case 'color':
				return `<span class="color-code color-${value}"></span> ${newValue}`;
			default:
				return newValue;
		}
	}

	private summary(column):string {
		if (_.isObject(this.summaryRow)) {
			return this.format(this.summaryRow[column.dataId], column, this.summaryRow);
		}
		else if (!_.isEmpty(column.dataSummary)) {
			var v = 0, prefix = '';
			switch (column.dataSummary) {
				case 'sum':
					v = _.sum(this.data, column.dataId);
					break;
				case 'avg':
					prefix = 'avg. ';
					v      = _.sum(this.data, column.dataId) / this.data.length;
					break;
				default:
					return column.dataSummary;
			}
			return `<small>${prefix}</small>${this.format(v, column, {})}`;
		}
		else {
			return ' ';
		}
	}

	/**
	 * column resizing functionality, clicked element must have 'resizer' class
	 */
	private _isResizing = false;
	private _startX     = 0;
	private _index;

	private resizeStart($event:MouseEvent) {
		if (!$($event.target).hasClass('resizer') && !$($event.target).parent().hasClass('resizer'))return;

		var el = $($event.target);
		if (!$($event.target).hasClass('resizer')) el = $($event.target).parent();

		this._index = el.data('index');

		var column = this.columns[this._index];

		if (column.resizeable !== true) return;

		var col = $(this._table).find(`colgroup col[data-index=${this._index}]`);
		col.css('borderRightColor', 'rgba(196,196,196,0.5)');
		this._startX     = $event.x;
		this._isResizing = true;
	}

	private resizeEnd($event) {
		$(this._table).find('colgroup col').css('borderRightColor', 'transparent');
		this._isResizing = false;

		if ((this.columns[this._index + 1] || {locked: false}).locked) {
			var colNext = $(this._table).find(`table td[data-col=${this._index + 1}]`);
			var col     = $(this._table).find(`colgroup col[data-index=${this._index}]`).get(0) as HTMLTableColElement;
			colNext.css('left', parseInt(col.width));
		}
	}

	private resize($event:MouseEvent) {
		var x = $event.x - this._startX;

		if (!this._isResizing) return;

		var column = this.columns[this._index];
		var col    = $(this._table).find(`colgroup col[data-index=${this._index}]`).get(0) as HTMLTableColElement;
		if (x < 0 && col.width <= (column.minWidth || 80)) return;

		this._startX                       = $event.x;
		col.width                          = (parseInt(col.width) + x);
		this._table.width                  = parseInt(this._table.width) + x;
		this.columns[this._index + 1].edge = parseInt(this.columns[this._index + 1].edge) + x;
	}
}

@autoinject()
@customElement('ui-data-column')
@inlineView('<template><content></content></template>')
export class UIDataColumn {
	@bindable dataId:string;
	@bindable dataType:string;
	@bindable dataSort:string;
	@bindable dataAlign:string;
	@bindable dataFormat:string;
	@bindable dataSymbol:string;
	@bindable dataSummary:string;
	@bindable dataLabels:any;

	@bindable buttonTitle:string = '';
	@bindable buttonGlyph:string = '';

	@bindable width:number;
	@bindable minWidth:number;

	private columnDef;
	private title:string       = '';
	private link:boolean       = false;
	private button:boolean     = false;
	private locked:boolean     = false;
	private sortable:boolean   = false;
	private resizeable:boolean = false;

	constructor(public element:Element) {
		if (element.hasAttribute('link'))this.link = true;
		if (element.hasAttribute('button') || element.hasAttribute('button-glyph'))this.button = true;
		if (element.hasAttribute('locked'))this.locked = true;
		if (element.hasAttribute('sortable'))this.sortable = true;
		if (element.hasAttribute('resizeable'))this.resizeable = true;
		$(element).data('UIDataColumn', this);
		this.columnDef = element;
	}

	bind() {
		if (this.buttonGlyph) {
			this.width  = 30;
			this.button = true;
		}
		else if (this.dataType == 'date') this.width = 160;
		else if (this.dataType == 'exrate') this.width = 100;
		else if (this.dataType == 'fromnow') this.width = 120;
		else if (this.dataType == 'number') this.width = 120;
		else if (this.dataType == 'currency') this.width = 120;
		else this.width = this.width || this.minWidth || 250;
	}
}