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
define(["require", "exports", "aurelia-framework", "aurelia-logging", "./ui-http-service", "aurelia-validation", "./ui-utils"], function (require, exports, aurelia_framework_1, aurelia_logging_1, ui_http_service_1, aurelia_validation_1, ui_utils_1) {
    var UIModel = (function () {
        function UIModel() {
            this.observers = [];
            var _v = ui_utils_1.Utils.lazy(aurelia_validation_1.Validation);
            Object.defineProperty(this, 'httpClient', {
                value: ui_utils_1.Utils.lazy(ui_http_service_1.UIHttpService),
                writable: false,
                enumerable: false
            });
            Object.defineProperty(this, 'validation', {
                value: _v.on(this, null),
                writable: false,
                enumerable: false
            });
            Object.defineProperty(this, 'logger', {
                value: aurelia_logging_1.getLogger(this.constructor.name),
                writable: false,
                enumerable: false
            });
            Object.defineProperty(this, 'observers', {
                value: [],
                writable: true,
                enumerable: false
            });
            Object.defineProperty(this, '_original', {
                value: {},
                writable: true,
                enumerable: false
            });
            this.logger.debug("Model Initialized");
        }
        UIModel.prototype.get = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [get]');
        };
        UIModel.prototype.post = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [post]');
        };
        UIModel.prototype.put = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [put]');
        };
        UIModel.prototype.delete = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [delete]');
        };
        UIModel.prototype.validate = function () {
            return this.validation.validate();
        };
        UIModel.prototype.dispose = function () {
            this.logger.debug("Model Disposing");
            while (this.observers && this.observers.length)
                this.observers.pop().dispose();
        };
        UIModel.prototype.deserialize = function (json) {
            var _this = this;
            this._original = json;
            Object.keys(this._original)
                .forEach(function (key) {
                _this[key] = _this._original[key];
            });
        };
        UIModel.prototype.serialize = function () {
            try {
                return this._serializeObject(this);
            }
            catch (e) {
                throw new Error("Error serializing object [" + this.constructor.name + "]");
            }
        };
        UIModel.prototype._serializeObject = function (o) {
            var _this = this;
            var _pojo = {};
            Object.keys(o)
                .forEach(function (key) {
                if (key !== 'undefined' && !/^__/.test(key)) {
                    if (ui_utils_1._.isObject(o[key])) {
                        _pojo[key] = _this._serializeObject(o[key]);
                    }
                    else {
                        _pojo[key] = o[key] || null;
                    }
                }
            });
            return _pojo;
        };
        UIModel.prototype.isDirty = function () {
            var _this = this;
            return Object.keys(this._original)
                .every(function (key) { return _this.hasOwnProperty(key) && (_this[key] === _this._original[key]); });
        };
        UIModel.prototype.saveChanges = function () {
            var _this = this;
            Object.keys(this._original)
                .forEach(function (key) {
                _this._original[key] = _this[key];
            });
        };
        UIModel.prototype.discardChanges = function () {
            var _this = this;
            Object.keys(this._original)
                .forEach(function (key) {
                _this[key] = _this._original[key];
            });
        };
        UIModel = __decorate([
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [])
        ], UIModel);
        return UIModel;
    })();
    exports.UIModel = UIModel;
});
