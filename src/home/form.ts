import {_, moment} from "../../framework/utils/ui-utils";
import {autoinject} from "aurelia-framework";
import {activationStrategy} from "aurelia-router";
import {ensure, Validation} from "aurelia-validation";

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

	lang        = 'null';
	contentDir  = 'ltr';
	content:any = {
		'EN': {title: 'Hello World', md: this.md},
		'AR': {title: 'مرحبا بالعالم', md: this.mdAr}
	};

	languageChanged($event) {
		this.lang = $event.data.id + '';
		if (this.lang != 'null' && !this.content[this.lang]) this.content[this.lang] = {title: '', md: ''};
		this.contentDir = $event.data.rtl ? 'rtl' : 'ltr';
	}

	languageRemoved($event) {
		delete this.content[$event.data];
	}

	validation;
	_langSelect;

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

		this.content = {
			'EN': {title: 'Hello World', md: this.md},
			'AR': {title: 'مرحبا بالعالم', md: this.mdAr}
		};
	}

	attached() {
		$(this._langSelect).data('UILangSelect')
			.addLanguages(Object.keys(this.content))
			.setLanguage('AR');
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

	mdAr = `
# مرحبا بالعالم

##### أنا _أحب_ ~~HTML~~ ن __Markdown__  !

---

أنا يمكن أن يكون __BOLD__، ويمكن أيضا أن تكون _ITALIC_، أو يمكنك ~~DELETE~~ لي أيضا!

انظروا لي أنا القائمة

* العنصر
* العنصر
* العنصر

وأنا مرقمة

1. البند
2. البند
3. البند

يمكنني أيضا أن يكون الرابط [إضغط هنا](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) أو إظهار رابط كله http://google.com

![صورة](images/heart.png) لا أميل تحب فقط الصور!

	`;
}