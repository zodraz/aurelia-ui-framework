var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
define(["require", "exports", "../../framework/utils/ui-utils", "aurelia-framework", "aurelia-validation", "../../framework/utils/ui-model"], function (require, exports, ui_utils_1, aurelia_framework_1, aurelia_validation_1, ui_model_1) {
    var HomeForm = (function () {
        function HomeForm(_validation) {
            this.content = {
                'en': { title: 'Hello World', md: this.md },
                'ar': { title: 'مرحبا بالعالم', md: this.mdAr }
            };
            this.autoComplete = [
                "Abarth", "Fiat", "Lancia", "Alfa Romeo", "Bugatti", "Pagani", "Lamborghini", "Ferrari", "Maseratti", "Aprilia",
                "BMW", "Mercedes Benz", "Opel", "Audi", "Volkswagen", "Porsche", "Renault", "Peugeot", "Citroën", "Ford",
                "Chevrolet", "Chrysler", "Cadillac", "Dodge", "Lincoln", "Buick", "Jeep", "Tesla", "Nisan", "Toyota", "Honda",
                "Subaru", "Mitsubishi", "Daihatsu", "Mazda", "Suzuki", "Yamaha", "KIA", "Hyundai", "Aston Martin", "Jaguar", "MINI",
                "Vauxhall", "Mclaren", "Bentley", "Rolls Royce", "Volvo", "SAAB", "SEAT", "Lotus"
            ];
            this.countries = ui_utils_1._.groupBy(window.countries, 'continent');
            this.md = "\n# Hello World\n\n##### I _Love_ ~~HTML~~ __Markdown__!\n\n---\n\nI can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!\n\nLook at me I'm a list\n\n* Item\n* Item\n* Item\n\nAnd I'm numbered\n\n1. Item\n2. Item\n3. Item\n\nI can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com\n\n![Image](images/heart.png) Dont you just love images!\n\n\n";
            this.mdAr = "\n# \u0645\u0631\u062D\u0628\u0627 \u0628\u0627\u0644\u0639\u0627\u0644\u0645\n\n##### \u0623\u0646\u0627 _\u0623\u062D\u0628_ ~~HTML~~ \u0646 __Markdown__  !\n\n---\n\n\u0623\u0646\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0643\u0648\u0646 __BOLD__\u060C \u0648\u064A\u0645\u0643\u0646 \u0623\u064A\u0636\u0627 \u0623\u0646 \u062A\u0643\u0648\u0646 _ITALIC_\u060C \u0623\u0648 \u064A\u0645\u0643\u0646\u0643 ~~DELETE~~ \u0644\u064A \u0623\u064A\u0636\u0627!\n\n\u0627\u0646\u0638\u0631\u0648\u0627 \u0644\u064A \u0623\u0646\u0627 \u0627\u0644\u0642\u0627\u0626\u0645\u0629\n\n* \u0627\u0644\u0639\u0646\u0635\u0631\n* \u0627\u0644\u0639\u0646\u0635\u0631\n* \u0627\u0644\u0639\u0646\u0635\u0631\n\n\u0648\u0623\u0646\u0627 \u0645\u0631\u0642\u0645\u0629\n\n1. \u0627\u0644\u0628\u0646\u062F\n2. \u0627\u0644\u0628\u0646\u062F\n3. \u0627\u0644\u0628\u0646\u062F\n\n\u064A\u0645\u0643\u0646\u0646\u064A \u0623\u064A\u0636\u0627 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 [\u0625\u0636\u063A\u0637 \u0647\u0646\u0627](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) \u0623\u0648 \u0625\u0638\u0647\u0627\u0631 \u0631\u0627\u0628\u0637 \u0643\u0644\u0647 http://google.com\n\n![\u0635\u0648\u0631\u0629](images/heart.png) \u0644\u0627 \u0623\u0645\u064A\u0644 \u062A\u062D\u0628 \u0641\u0642\u0637 \u0627\u0644\u0635\u0648\u0631!\n\n\t";
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
                'en': { title: 'Hello World', md: this.md },
                'ar': { title: 'مرحبا بالعالم', md: this.mdAr }
            };
            this.model = new FormModel();
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
        HomeForm.prototype.beforeChange = function ($event) {
            return $event.detail.id == 'en';
        };
        HomeForm.prototype.attached = function () {
            this._langSelect
                .addLanguages(Object.keys(this.content))
                .setLanguage(this.lang);
        };
        HomeForm.prototype.deactivate = function () {
            this.model.dispose();
        };
        HomeForm.prototype.unbind = function () {
        };
        HomeForm.prototype.onSubmit = function () {
            this.validation.validate();
        };
        __decorate([
            ui_utils_1.watch('en'), 
            __metadata('design:type', Object)
        ], HomeForm.prototype, "lang");
        __decorate([
            ui_utils_1.watch('rtl'), 
            __metadata('design:type', Object)
        ], HomeForm.prototype, "contentDir");
        HomeForm = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_validation_1.Validation])
        ], HomeForm);
        return HomeForm;
    })();
    exports.HomeForm = HomeForm;
    var FormModel = (function (_super) {
        __extends(FormModel, _super);
        function FormModel() {
            _super.apply(this, arguments);
            this.firstName = 'Adarsh';
            this.lastName = 'Pastakia';
            this.email = 'adarshpastakia@outlook.com';
            this.lat = '25.4';
            this.lon = '76.5';
            this.phoneCode = '';
            this.phoneNumber = '';
            this.phoneCountry = 'ae';
            this.phoneExt = '';
            this.phone = '+971506347342';
            this.phone2 = '+97143901709,123';
            this.list = '4';
            this.opts = 3;
            this.hasLoc = true;
            this.date = '2015-12-25T00:00:00.000Z';
            this.range = { start: '2015-12-25T00:00:00.000Z', end: '2015-12-25T00:00:00.000Z' };
        }
        FormModel = __decorate([
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [])
        ], FormModel);
        return FormModel;
    })(ui_model_1.UIModel);
    exports.FormModel = FormModel;
});
