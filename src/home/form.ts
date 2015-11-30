import {_, moment} from "../../framework/utils/ui-utils";
export {KeysValueConverter, DateValueConverter} from "../../framework/utils/ui-converters";

export class HomeForm {
	opts   = 3;
	hasLoc = true;
	fname  = 'adarsh';
	lname  = 'pastakia';
	email  = 'adarshpastakia@outlook.com';

	pos = '25.4,76.5';

	phoneCode    = '055';
	phoneNumber  = '6347342';
	phoneCountry = 'ae';

	list = '4';

	date  = null;
	range = {start: null, end: null};

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