import {UITreeOptionsModel} from "../../framework/utils/ui-tree-models";
import {_} from "../../framework/utils/ui-utils";

export class HomeTree {
	options:UITreeOptionsModel  = {
		showCheckbox: true
	}
	options2:UITreeOptionsModel = {}
	countries:any;
	_tree;
	_tree2;

	select2;

	checked;
	selectval;

	constructor() {
		var ct = [];
		_.forEach(_.groupBy(window.countries, 'continent'), (v:any, k:string)=> {
			let c = {
				id: _.camelCase(k),
				name: k,
				expanded: k == 'Asia',
				children: []
			}
			_.forEach(v, (o:any)=> {
				c.children.push({
					id: o.iso3,
					name: o.name,
					leaf: true,
					checked: (o.iso3 == 'UAE' || o.iso3 == 'IND'),
					iconGlyph: `ui-flag ${o.iso3}`
				})
			});
			ct.push(c);
		});
		this.countries = ct;
	}

	attached() {
		this._tree2.select('UAE', 1);
		this.checked = this._tree.getChecked();
	}

	selectChanged($event) {
		this.select2 = $event.detail;
	}

	checkChanged($event) {
		this.checked = $event.detail;
	}
}