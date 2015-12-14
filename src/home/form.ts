import {_, moment} from "../../framework/utils/ui-utils";
import {autoinject, transient} from "aurelia-framework";
import {activationStrategy} from "aurelia-router";
import {ensure, Validation} from "aurelia-validation";
import {UIModel, watch, observe} from "../../framework/utils/ui-model";

@autoinject()
export class HomeForm {
	model;

	@watch('null')
	lang;
	@watch('ltr')
	contentDir;
	content:any = {
		'EN': {title: 'Hello World', md: this.md},
		'AR': {title: 'مرحبا بالعالم', md: this.mdAr}
	};

	languageChanged($event) {
		this.lang = $event.detail.id + '';
		if (this.lang != 'null' && !this.content[this.lang]) this.content[this.lang] = {title: '', md: ''};
		this.contentDir = $event.detail.rtl ? 'rtl' : 'ltr';
	}

	languageRemoved($event) {
		delete this.content[$event.detail];
	}

	validation;
	_langSelect;

	constructor(_validation:Validation) {
		this.validation = _validation
			.on(this, null)
			.ensure('model.email')
			.isNotEmpty()
			.ensure('model.firstName')
			.isNotEmpty()
			.ensure('model.lastName')
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

		this.model = new FormModel();
	}

	attached() {
		this._langSelect
			.addLanguages(Object.keys(this.content))
			.setLanguage('AR');

		this.model.isDirty = false;
	}

	onSubmit() {
		this.validation.validate();
		this._langSelect
			.errorLanguages('AR,EN');
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

@transient()
export class FormModel extends UIModel {
	@observe()
	firstName = 'Adarsh';
	@observe()
	lastName  = 'Pastakia';
	@observe()
	email     = 'adarshpastakia@outlook.com';

	pos = '25.4,76.5';

	phoneCode    = '055';
	phoneNumber  = '6347342';
	phoneCountry = 'ae';
	phoneExt     = '123';
	phone        = '';

	list   = '4';
	opts   = 3;
	hasLoc = true;
	date   = null;
	range  = {start: null, end: null};
}