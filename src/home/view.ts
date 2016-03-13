import {Validation} from "aurelia-validation";
import {autoinject} from "aurelia-framework";
import {UIApplication} from "../../framework/utils/ui-application";
import {UITreeOptions} from "../../framework/utils/ui-tree-models";
import {_} from "../../framework/utils/ui-utils";

@autoinject()
export class Home {
	optVal  = 2;
	enabled = true;

	model = {
		email: '', lat: null, long: null
	};

	__page;
	__content;
	__bgToggle;

	md = `
# Hello World

##### I _Love_ ~~HTML~~ __Markdown__!

---

I can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!

Look at me I'm a list

* Item
* Item
* Item

And I'm numbered

1. Item
2. Item
3. Item

I can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com

![Image](images/heart.png) Dont you just love images!


`;

	validation;
	__tree;
	checked;
	treeModel;
	treeOpts = new UITreeOptions({
		showCheckbox  : true,
		selectionLevel: 0
	});

	constructor(_validation:Validation, public appState:UIApplication) {
		this.validation = _validation
			.on(this, null)
			.ensure('model.email')
			.isNotEmpty()
			.ensure('model.lat')
			.isNumber()
			.isBetween(-90, 90)
			.ensure('model.long')
			.isNumber()
			.isBetween(-180, 180);

		var ct = [];
		_.forEach(_.groupBy(window.countries, 'continent'), (v:any, k:string)=> {
			let c = {
				id      : _.camelCase(k),
				name    : k,
				expanded: k == 'Asia',
				children: []
			}
			_.forEach(v, (o:any)=> {
				c.children.push({
									id       : o.iso3,
									name     : o.name,
									leaf     : true,
									checked  : (o.iso3 == 'UAE' || o.iso3 == 'IND'),
									iconGlyph: `ui-flag ${o.iso3}`
								})
			});
			ct.push(c);
		});
		this.treeModel = ct;
	}

	onSubmit() {
		this.validation.validate()
			.then(()=> {

			})
			.catch(()=> {

			});
	}

	attached() {
		this.checked = this.__tree.getChecked();
		setTimeout(()=>this.__content.scrollTop = 0, 20);
	}

	change($event) {
		console.log($event.target, $event.detail);
	}

	changeTheme($event) {
		let theme                 = $event.detail.label.toLowerCase();
		this.__bgToggle.className = `ui-button-group ui-button-group-${theme}`;
	}

	toastMe(pos, theme) {
		if (pos == 'page') {
			this.__page.toast({
								  icon    : 'fi-vaadin-bell',
								  autoHide: false,
								  theme   : 'danger',
								  message : 'Toasted message for the page'
							  });
		}
		else {
			this.appState.toast({theme: theme, icon: 'fi-vaadin-bell', message: 'Toasted message'});
		}
	}
}