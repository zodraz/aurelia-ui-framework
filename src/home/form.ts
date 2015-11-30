import {_, moment} from "../../framework/utils/ui-utils";
import {autoinject} from "aurelia-framework";
import {ensure, Validation} from "aurelia-validation";
export {KeysValueConverter, DateValueConverter} from "../../framework/utils/ui-converters";

@autoinject()
export class HomeForm {
	model = {
		opts: 3,
		hasLoc: true,
		fname: 'adarsh',
		lname: 'pastakia',

		email: 'adarshpastakia@outlook.com',
		pos: '25.4,76.5',

		phoneCode: '055',
		phoneNumber: '6347342',
		phoneCountry: 'ae',
		phone: '',

		list: '4',

		date: null,
		range: {start: null, end: null}

	}

	validation;

	constructor(_validation:Validation) {
		this.validation = _validation
			.on(this, null)
			.ensure('model.email')
			.isNotEmpty()
			.ensure('model.fname')
			.isNotEmpty()
			.ensure('model.lname')
			.isNotEmpty()
			.ensure('model.phoneCountry')
			.isNotEmpty()
			.ensure('model.phone')
			.isNotEmpty()
			.isPhone();
	}

	onSubmit() {
		this.validation.validate();
	}


	countries = _.groupBy(window.countries, 'continent');

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
}