var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging"], function (require, exports, aurelia_framework_1, aurelia_logging_1) {
    var UIApplication = (function () {
        function UIApplication() {
            this.IsHttpInUse = false;
            this.IsAuthenticated = false;
            this.SendAuthHeader = false;
            this.__logger = aurelia_logging_1.getLogger('UIApp');
        }
        Object.defineProperty(UIApplication.prototype, "Username", {
            get: function () {
                return this.__username;
            },
            set: function (v) {
                this.__username = v;
            },
            enumerable: true,
            configurable: true
        });
        UIApplication = __decorate([
            aurelia_framework_1.singleton(),
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [])
        ], UIApplication);
        return UIApplication;
    })();
    exports.UIApplication = UIApplication;
});
