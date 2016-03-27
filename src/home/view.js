var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../../framework/index", "./my-dialog", "fetch"], function (require, exports, aurelia_validation_1, aurelia_framework_1, index_1, my_dialog_1) {
    "use strict";
    var Home = (function () {
        function Home(_validation, appState, dialogService, httpClient) {
            this.appState = appState;
            this.dialogService = dialogService;
            this.httpClient = httpClient;
            this.optVal = 2;
            this.enabled = true;
            this.months = [
                { id: 0, text: 'January' },
                { id: 1, text: 'February' },
                { id: 2, text: 'March' },
                { id: 3, text: 'April' },
                { id: 4, text: 'May' },
                { id: 5, text: 'June' },
                { id: 6, text: 'July' },
                { id: 7, text: 'August' },
                { id: 8, text: 'September' },
                { id: 9, text: 'October' },
                { id: 10, text: 'November' },
                { id: 11, text: 'December' }
            ];
            this.countries = index_1._.groupBy(window.countries, 'continent');
            this.model = {
                email: '', lat: null, long: null
            };
            this.ctry = 'AE';
            this.treeOpts = new index_1.UITreeOptions({
                showCheckbox: true,
                selectionLevel: 0
            });
            this.data = [
                {
                    id: 1,
                    FName: 'Leroy',
                    LName: 'Gibbs',
                    Gender: 'MALE',
                    SDate: '1951-09-02',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 2,
                    FName: 'Tony',
                    LName: 'DiNozzo',
                    Gender: 'MALE',
                    SDate: '1968-07-08',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 3,
                    FName: 'Tim',
                    LName: 'McGee',
                    Gender: 'MALE',
                    SDate: '1977-11-15',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 4,
                    FName: 'Eleanor',
                    LName: 'Bishop',
                    Gender: 'FEMALE',
                    SDate: '1984-04-26',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 5,
                    FName: 'Abigail',
                    LName: 'Scuitto',
                    Gender: 'FEMALE',
                    SDate: '1969-03-27',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 6,
                    FName: 'Donald',
                    LName: 'Mallard',
                    SDate: '1933-09-19',
                    Gender: 'MALE',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 7,
                    FName: 'Jimmy',
                    LName: 'Palmer',
                    Gender: 'MALE',
                    SDate: '1977-11-14',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 8,
                    FName: 'Leon',
                    LName: 'Vance',
                    Gender: 'MALE',
                    SDate: '1963-07-08',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 9,
                    FName: 'Ziva',
                    LName: 'David',
                    Gender: 'FEMALE',
                    SDate: '1979-11-12',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 10,
                    FName: 'Jenny',
                    LName: 'Shepard',
                    Gender: 'FEMALE',
                    SDate: '1963-10-28',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 11,
                    FName: 'Caitlin',
                    LName: 'Todd',
                    Gender: 'FEMALE',
                    SDate: '1973-05-17',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }];
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
            index_1._.forEach(index_1._.groupBy(window.countries, 'continent'), function (v, k) {
                var c = {
                    id: index_1._.camelCase(k),
                    name: k,
                    expanded: k == 'Asia',
                    children: []
                };
                index_1._.forEach(v, function (o) {
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
        Home.prototype.canActivate = function (model) {
            var _this = this;
            return this.httpClient
                .text('./src/home/example.md')
                .then(function (resp) { return _this.md = resp; });
        };
        Home.prototype.onSubmit = function () {
            this.validation.validate()
                .then(function () {
            })
                .catch(function () {
            });
        };
        Home.prototype.getError = function (code) {
            var _this = this;
            if (code == 404) {
                this.httpClient.get('./test404.html')
                    .then(function (resp) { return _this.__page.toast('Success'); })
                    .catch(function (e) { return _this.__page.toast(e.message); });
            }
            if (code == 400) {
                this.httpClient.post('https://api.hmcoffers.com/api/login', {})
                    .then(function (resp) { return _this.__page.toast('Success'); })
                    .catch(function (e) { return _this.__page.toast(e.message); });
            }
        };
        Home.prototype.attached = function () {
            var _this = this;
            this.checked = this.__tree.getChecked();
            setTimeout(function () { return _this.__content.scrollTop = 0; }, 20);
        };
        Home.prototype.formatName = function ($event) {
            return $event.model.FName + " <strong>" + $event.model.LName + "</strong>";
        };
        Home.prototype.change = function ($event) {
            console.log($event.target, $event.detail);
        };
        Home.prototype.changeTheme = function ($event) {
            var theme = $event.detail.label.toLowerCase();
            this.__bgToggle.className = "ui-button-group ui-button-group-" + theme;
        };
        Home.prototype.showDialog = function (modal) {
            this.dialogService.show(my_dialog_1.MyDialog, { modal: modal });
        };
        Home.prototype.linkClicked = function ($event) {
            this.appState.toast({
                message: $event.detail.dataId + ':' + $event.detail.model.LName
            });
        };
        Home.prototype.checkAge = function ($event) {
            if (index_1.moment()
                .diff($event.model.SDate, 'years', true) > 50) {
                return { theme: 'warning' };
            }
            if (index_1.moment()
                .diff($event.model.SDate, 'years', true) < 40) {
                return 'No Preview';
            }
            return { theme: 'info' };
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
            __metadata('design:paramtypes', [aurelia_validation_1.Validation, index_1.UIApplication, index_1.UIDialogService, index_1.UIHttpService])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});
