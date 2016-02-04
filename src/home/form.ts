import {_, moment, watch} from "../../framework/utils/ui-utils";
import {autoinject, transient} from "aurelia-framework";
import {activationStrategy} from "aurelia-router";
import {ensure, Validation} from "aurelia-validation";
import {UIModel} from "../../framework/utils/ui-model";

@autoinject()
export class HomeForm {
	model;

	@watch('ar')
	lang;
	@watch('rtl')
	contentDir;

	content:any = {
		'en': {title: 'Hello World', md: this.md},
		'ar': {title: 'مرحبا بالعالم', md: this.mdAr}
	};

	autoComplete = [
		"Abarth", "Fiat", "Lancia", "Alfa Romeo", "Bugatti", "Pagani", "Lamborghini", "Ferrari", "Maseratti", "Aprilia",
		"BMW", "Mercedes Benz", "Opel", "Audi", "Volkswagen", "Porsche", "Renault", "Peugeot", "Citroën", "Ford",
		"Chevrolet", "Chrysler", "Cadillac", "Dodge", "Lincoln", "Buick", "Jeep", "Tesla", "Nisan", "Toyota", "Honda",
		"Subaru", "Mitsubishi", "Daihatsu", "Mazda", "Suzuki", "Yamaha", "KIA", "Hyundai", "Aston Martin", "Jaguar", "MINI",
		"Vauxhall", "Mclaren", "Bentley", "Rolls Royce", "Volvo", "SAAB", "SEAT", "Lotus"
	];

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
			.isEmail()
			.isNotEmpty()
			.ensure('model.firstName')
			.isNotEmpty()
			.ensure('model.lastName')
			.isNotEmpty()
			.ensure('model.phoneCountry')
			.isNotEmpty()
			.ensure('model.phone')
			.isNotEmpty()
			.isPhone()
			.ensure('model.phone2')
			.isNotEmpty()
			.isPhone();

		this.content = {
			'en': {title: 'Hello World', md: this.md},
			'ar': {title: 'مرحبا بالعالم', md: this.mdAr}
		};

		this.model = new FormModel();
	}

	attached() {
		this._langSelect
			.addLanguages(Object.keys(this.content))
			.setLanguage(this.lang);
	}

	deactivate() {
		this.model.dispose();
	}

	unbind() {
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

@transient()
export class FormModel extends UIModel {
	firstName = 'Adarsh';
	lastName  = 'Pastakia';
	email     = 'adarshpastakia@outlook.com';

	pos = '25.4,76.5';

	phoneCode    = '';
	phoneNumber  = '';
	phoneCountry = 'ae';
	phoneExt     = '';
	phone        = '+971506347342';
	phone2       = '+97143901709,123';

	list   = '4';
	opts   = 3;
	hasLoc = true;
	date   = '2015-12-25T00:00:00.000Z';
	range  = {start: '2015-12-25T00:00:00.000Z', end: '2015-12-25T00:00:00.000Z'};
}