var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../../framework/utils/ui-utils", "aurelia-framework", "aurelia-validation"], function (require, exports, ui_utils_1, aurelia_framework_1, aurelia_validation_1) {
    var HomeForm = (function () {
        function HomeForm(_validation) {
            this.model = {
                opts: 3,
                hasLoc: true,
                fname: 'adarsh',
                lname: 'pastakia',
                email: 'adarshpastakia@outlook.com',
                pos: '25.4,76.5',
                phoneCode: '055',
                phoneNumber: '6347342',
                phoneCountry: 'ae',
                phoneExt: '',
                phone: '',
                list: '4',
                date: null,
                range: { start: null, end: null }
            };
            this.lang = 'null';
            this.contentDir = 'ltr';
            this.content = {
                'EN': { title: 'Hello World', md: this.md },
                'AR': { title: 'مرحبا بالعالم', md: this.mdAr }
            };
            this.countries = ui_utils_1._.groupBy(window.countries, 'continent');
            this.md = "\n# Hello World\n\n##### I _Love_ ~~HTML~~ __Markdown__!\n\n---\n\nI can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!\n\nLook at me I'm a list\n\n* Item\n* Item\n* Item\n\nAnd I'm numbered\n\n1. Item\n2. Item\n3. Item\n\nI can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com\n\n![Image](images/heart.png) Dont you just love images!\n\n\n";
            this.mdAr = "\n# \u0645\u0631\u062D\u0628\u0627 \u0628\u0627\u0644\u0639\u0627\u0644\u0645\n\n##### \u0623\u0646\u0627 _\u0623\u062D\u0628_ ~~HTML~~ \u0646 __Markdown__  !\n\n---\n\n\u0623\u0646\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0643\u0648\u0646 __BOLD__\u060C \u0648\u064A\u0645\u0643\u0646 \u0623\u064A\u0636\u0627 \u0623\u0646 \u062A\u0643\u0648\u0646 _ITALIC_\u060C \u0623\u0648 \u064A\u0645\u0643\u0646\u0643 ~~DELETE~~ \u0644\u064A \u0623\u064A\u0636\u0627!\n\n\u0627\u0646\u0638\u0631\u0648\u0627 \u0644\u064A \u0623\u0646\u0627 \u0627\u0644\u0642\u0627\u0626\u0645\u0629\n\n* \u0627\u0644\u0639\u0646\u0635\u0631\n* \u0627\u0644\u0639\u0646\u0635\u0631\n* \u0627\u0644\u0639\u0646\u0635\u0631\n\n\u0648\u0623\u0646\u0627 \u0645\u0631\u0642\u0645\u0629\n\n1. \u0627\u0644\u0628\u0646\u062F\n2. \u0627\u0644\u0628\u0646\u062F\n3. \u0627\u0644\u0628\u0646\u062F\n\n\u064A\u0645\u0643\u0646\u0646\u064A \u0623\u064A\u0636\u0627 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 [\u0625\u0636\u063A\u0637 \u0647\u0646\u0627](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) \u0623\u0648 \u0625\u0638\u0647\u0627\u0631 \u0631\u0627\u0628\u0637 \u0643\u0644\u0647 http://google.com\n\n![\u0635\u0648\u0631\u0629](images/heart.png) \u0644\u0627 \u0623\u0645\u064A\u0644 \u062A\u062D\u0628 \u0641\u0642\u0637 \u0627\u0644\u0635\u0648\u0631!\n\n\t";
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
                'EN': { title: 'Hello World', md: this.md },
                'AR': { title: 'مرحبا بالعالم', md: this.mdAr }
            };
        }
        HomeForm.prototype.languageChanged = function ($event) {
            this.lang = $event.detail.id + '';
            if (this.lang != 'null' && !this.content[this.lang])
                this.content[this.lang] = { title: '', md: '' };
            this.contentDir = $event.detail.rtl ? 'rtl' : 'ltr';
        };
        HomeForm.prototype.languageRemoved = function ($event) {
            delete this.content[$event.detail];
        };
        HomeForm.prototype.attached = function () {
            this._langSelect.UIElement
                .addLanguages(Object.keys(this.content))
                .setLanguage('AR');
        };
        HomeForm.prototype.onSubmit = function () {
            this.validation.validate();
            this._langSelect.UIElement
                .errorLanguages('AR,EN');
        };
        HomeForm = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_validation_1.Validation])
        ], HomeForm);
        return HomeForm;
    })();
    exports.HomeForm = HomeForm;
});
