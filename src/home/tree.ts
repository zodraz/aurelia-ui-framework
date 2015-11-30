import {_, UITreeOptionsModel} from "aurelia-ui-framework";

export class HomeTree {
	options:UITreeOptionsModel = {
		showCheckbox: true
	}
	countries:any;
	_tree;

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
		console.log(ct);
		this.countries = ct;
	}

	attached() {
		$(this._tree).data('UITree').select('');
	}
}