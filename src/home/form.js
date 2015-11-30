define(["require", "exports", "../../framework/utils/ui-utils", "../../framework/utils/ui-converters"], function (require, exports, ui_utils_1, ui_converters_1) {
    exports.KeysValueConverter = ui_converters_1.KeysValueConverter;
    exports.DateValueConverter = ui_converters_1.DateValueConverter;
    var HomeForm = (function () {
        function HomeForm() {
            this.opts = 3;
            this.hasLoc = true;
            this.fname = 'adarsh';
            this.lname = 'pastakia';
            this.email = 'adarshpastakia@outlook.com';
            this.pos = '25.4,76.5';
            this.phoneCode = '055';
            this.phoneNumber = '6347342';
            this.phoneCountry = 'ae';
            this.list = '4';
            this.date = null;
            this.range = { start: null, end: null };
            this.countries = ui_utils_1._.groupBy(window.countries, 'continent');
            this.md = "\n# Hello World\n\n##### I _Love_ ~~HTML~~ __Markdown__!\n\n---\n\nI can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!\n\nLook at me I'm a list\n\n* Item\n* Item\n* Item\n\nAnd I'm numbered\n\n1. Item\n2. Item\n3. Item\n\nI can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com\n\n![Image](images/heart.png) Dont you just love images!\n\n\n";
        }
        return HomeForm;
    })();
    exports.HomeForm = HomeForm;
});
