var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    var Readme = (function () {
        function Readme(http) {
            this.http = http;
            this.readme = '';
        }
        Readme.prototype.canActivate = function () {
            var _this = this;
            return this.http.fetch('framework/core/README.md')
                .then(function (resp) { return resp.text(); })
                .then(function (resp) { return _this.readme = resp; });
        };
        Readme = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.inlineView('<template><ui-content scroll padded class="ui-markdown" innerhtml.bind="readme | markdown"></ui-content></template>'), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Readme);
        return Readme;
    })();
    exports.Readme = Readme;
});
