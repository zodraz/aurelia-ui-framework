var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../framework/index"], function (require, exports, aurelia_framework_1, index_1) {
    "use strict";
    var ReadMe = (function () {
        function ReadMe(httpClient) {
            this.httpClient = httpClient;
            this.readme = '';
        }
        ReadMe.prototype.activate = function () {
            var _this = this;
            return this.httpClient
                .text('./src/components/README.md')
                .then(function (resp) { return _this.readme = resp; });
        };
        ReadMe.prototype.attached = function () {
            index_1._.forEach(this.__content.querySelectorAll('.lang-html'), function (c) {
                c.classList.add('html');
                hljs.highlightBlock(c);
            });
            index_1._.forEach(this.__content.querySelectorAll('.lang-javascript'), function (c) {
                c.classList.add('javascript');
                hljs.highlightBlock(c);
            });
        };
        ReadMe = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.inlineView('<template><div ref="__content" class="ui-markdown" innerhtml.bind="readme | markdown"></div></template>'), 
            __metadata('design:paramtypes', [index_1.UIHttpService])
        ], ReadMe);
        return ReadMe;
    }());
    exports.ReadMe = ReadMe;
});
