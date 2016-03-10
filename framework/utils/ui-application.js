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
            this.BaseUrl = './';
            this.IsHttpInUse = false;
            this.SendAuthHeader = false;
            this.IsAuthenticated = false;
            this.__logger = aurelia_logging_1.getLogger('UIApplication');
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
        Object.defineProperty(UIApplication.prototype, "AuthUser", {
            get: function () {
                return this.__authUser;
            },
            set: function (v) {
                this.__authUser = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIApplication.prototype, "AuthToken", {
            get: function () {
                return this.__authToken;
            },
            set: function (v) {
                this.__authToken = v;
            },
            enumerable: true,
            configurable: true
        });
        UIApplication.prototype.session = function (key, value) {
            if (value === void 0) { value = '§'; }
            if (window.sessionStorage) {
                if (value === '§') {
                    return JSON.parse(window.sessionStorage.getItem(key));
                }
                else if (value === null) {
                    window.sessionStorage.removeItem(key);
                }
                else {
                    window.sessionStorage.setItem(key, JSON.stringify(value));
                }
            }
            return null;
        };
        UIApplication.prototype.persist = function (key, value) {
            if (value === void 0) { value = '§'; }
            if (window.localStorage) {
                if (value === '§') {
                    return JSON.parse(window.localStorage.getItem(key));
                }
                else if (value === null) {
                    window.localStorage.removeItem(key);
                }
                else {
                    window.localStorage.setItem(key, JSON.stringify(value));
                }
            }
            return null;
        };
        UIApplication.prototype.info = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.info(tag + "::" + msg, rest);
        };
        UIApplication.prototype.warn = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.warn(tag + "::" + msg, rest);
        };
        UIApplication.prototype.debug = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.debug(tag + "::" + msg, rest);
        };
        UIApplication.prototype.error = function (tag, msg) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            this.__logger.error(tag + "::" + msg, rest);
        };
        UIApplication = __decorate([
            aurelia_framework_1.singleton(),
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [])
        ], UIApplication);
        return UIApplication;
    })();
    exports.UIApplication = UIApplication;
});
