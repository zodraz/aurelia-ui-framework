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
                phone: '',
                list: '4',
                date: null,
                range: { start: null, end: null }
            };
            this.lang = 'null';
            this.content = {
                'null': 'No Language',
                'EN': 'english sentence',
                'VI': 'câu tiếng việt',
                'ES': 'frase española',
                'FR': 'phrase française'
            };
            this.countries = ui_utils_1._.groupBy(window.countries, 'continent');
            this.md = "\n# Hello World\n\n##### I _Love_ ~~HTML~~ __Markdown__!\n\n---\n\nI can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!\n\nLook at me I'm a list\n\n* Item\n* Item\n* Item\n\nAnd I'm numbered\n\n1. Item\n2. Item\n3. Item\n\nI can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com\n\n![Image](images/heart.png) Dont you just love images!\n\n\n";
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
        HomeForm.prototype.languageChanged = function ($event) {
            if (!this.content[$event.data + ''])
                this.content[$event.data + ''] = '';
            this.lang = $event.data + '';
        };
        HomeForm.prototype.languageRemoved = function ($event) {
            delete this.content[$event.data];
        };
        HomeForm.prototype.onSubmit = function () {
            this.validation.validate();
        };
        HomeForm = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_validation_1.Validation])
        ], HomeForm);
        return HomeForm;
    })();
    exports.HomeForm = HomeForm;
});
