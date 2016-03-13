var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../../framework/utils/ui-application", "../../framework/utils/ui-tree-models", "../../framework/utils/ui-utils"], function (require, exports, aurelia_validation_1, aurelia_framework_1, ui_application_1, ui_tree_models_1, ui_utils_1) {
    var Home = (function () {
        function Home(_validation, appState) {
            this.appState = appState;
            this.optVal = 2;
            this.enabled = true;
            this.model = {
                email: '', lat: null, long: null
            };
            this.md = "\n# Hello World\n\n##### I _Love_ ~~HTML~~ __Markdown__!\n\n---\n\nI can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!\n\nLook at me I'm a list\n\n* Item\n* Item\n* Item\n\nAnd I'm numbered\n\n1. Item\n2. Item\n3. Item\n\nI can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com\n\n![Image](images/heart.png) Dont you just love images!\n\n\n";
            this.treeOpts = new ui_tree_models_1.UITreeOptions({
                showCheckbox: true,
                selectionLevel: 0
            });
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
            var ct = [];
            ui_utils_1._.forEach(ui_utils_1._.groupBy(window.countries, 'continent'), function (v, k) {
                var c = {
                    id: ui_utils_1._.camelCase(k),
                    name: k,
                    expanded: k == 'Asia',
                    children: []
                };
                ui_utils_1._.forEach(v, function (o) {
                    c.children.push({
                        id: o.iso3,
                        name: o.name,
                        leaf: true,
                        checked: (o.iso3 == 'UAE' || o.iso3 == 'IND'),
                        iconGlyph: "ui-flag " + o.iso3
                    });
                });
                ct.push(c);
            });
            this.treeModel = ct;
        }
        Home.prototype.onSubmit = function () {
            this.validation.validate()
                .then(function () {
            })
                .catch(function () {
            });
        };
        Home.prototype.attached = function () {
            var _this = this;
            this.checked = this.__tree.getChecked();
            setTimeout(function () { return _this.__content.scrollTop = 0; }, 20);
        };
        Home.prototype.change = function ($event) {
            console.log($event.target, $event.detail);
        };
        Home.prototype.changeTheme = function ($event) {
            var theme = $event.detail.label.toLowerCase();
            this.__bgToggle.className = "ui-button-group ui-button-group-" + theme;
        };
        Home.prototype.toastMe = function (pos, theme) {
            if (pos == 'page') {
                this.__page.toast({
                    icon: 'fi-vaadin-bell',
                    autoHide: false,
                    theme: 'danger',
                    message: 'Toasted message for the page'
                });
            }
            else {
                this.appState.toast({ theme: theme, icon: 'fi-vaadin-bell', message: 'Toasted message' });
            }
        };
        Home = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_validation_1.Validation, ui_application_1.UIApplication])
        ], Home);
        return Home;
    })();
    exports.Home = Home;
});
