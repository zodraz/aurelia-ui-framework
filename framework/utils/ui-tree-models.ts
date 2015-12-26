/**
 *    UI Model: Tree Model
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, bindable, bindingMode, computedFrom} from 'aurelia-framework';
import {_} from "./ui-utils";

export class UITreeModel {
	id:any;
	name:string;
	level:number;

	iconGlyph:string;

	root:boolean;
	leaf:boolean;
	active:boolean;
	expanded:boolean;

	children:Array<UITreeModel> = [];

	// 0=false, 1=true, 2=partial
	checked:number;

	parent:UITreeModel = null;

	isvisible:boolean = true;

	private _checkLevel = 0;

	constructor(level:number, maxLevels:number, checkLevel:number, model:any, parent?:UITreeModel) {
		var me = this;
		//(new ObserverLocator()).getObserver(this, 'checked')
		//	.subscribe(v=> {
		//		if (me.parent) me.parent.checked = v == 0 ? 0 : 2;
		//	});

		this.id    = model.id;
		this.name  = model.name || model.text;
		this.level = level;

		this.iconGlyph = model.iconGlyph;

		this.root     = level == -1;
		this.leaf     = (model.children || []).length == 0 || level == maxLevels;
		this.active   = model.active || false;
		this.expanded = model.expanded || false;

		this.checked = model.checked ? 1 : 0;
		this.parent  = parent;

		this._checkLevel = checkLevel;

		if (level < maxLevels && (model.children || []).length > 0) {
			_.each(model.children, (m:any)=> {
				this.children.push(new UITreeModel(level + 1, maxLevels, checkLevel, m, this));
			});
		}
		this.updatePartial();
	}

	set ischecked(v) {
		this.checked = v = v ? 1 : 0;
		_.forEach(this.children, (c:UITreeModel)=> {
			c.updateChild(v);
		});
		if (this.parent && this.level > this._checkLevel) this.parent.updatePartial();
	}

	updateChild(v) {
		this.checked = v;
		_.forEach(this.children, (c:UITreeModel)=> {
			c.updateChild(v);
		});
	}

	updatePartial() {
		if (this.children && this.children.length > 0) {
			var c = _.countBy(this.children, 'checked');
			var v = 2;
			if (!c[1] && !c[2]) v = 0;
			if (!c[0] && !c[2]) v = 1;
			this.checked = v;
		}

		if (this.parent && this.level > this._checkLevel) this.parent.updatePartial();
	}

	@computedFrom('leaf', 'iconGlyph')
	get isleaf() {
		return this.leaf && !this.iconGlyph;
	}
}

export interface UITreeOptionsModel {
	// show maximum of ? levels
	maxLevels?:number;

	// show checkboxes
	showCheckbox?:boolean;
	// show checkbox only at ? level, -1/null all levels
	checkboxLevel?:number;

	showRoot?:boolean;
	rootLabel?:string;

	selectionLevel?:number;
}

export interface UITreePanel {
	select(id:any, level:number);
	expand(id:any, level:number, expand:boolean);
	check(id:any, level:number, check:boolean);
}