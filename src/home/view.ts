import {Validation} from "aurelia-validation";
import {autoinject} from "aurelia-framework";
import {UIApplication} from "../../framework/utils/ui-application";

@autoinject()
export class Home {
	optVal  = 2;
	enabled = true;

	model = {
		email: '', lat: null, long: null
	};

	__page;
	__content;

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

	}

	onSubmit() {
		this.validation.validate()
			.then(()=> {

			})
			.catch(()=> {

			});
	}

	attached() {
		setTimeout(()=>this.__content.scrollTop = 0, 20);
	}

	change($event) {
		console.log($event.target, $event.detail);
	}

	toastMe(pos, theme) {
		if (pos == 'page') {
			this.__page.toast({icon       : 'fi-vaadin-bell',
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