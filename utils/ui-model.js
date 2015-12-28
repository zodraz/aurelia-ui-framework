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
define(["require", "exports", "aurelia-framework", "aurelia-logging", "./ui-http-service", "aurelia-validation", "./ui-utils", "./ui-event"], function (require, exports, aurelia_framework_1, aurelia_logging_1, ui_http_service_1, aurelia_validation_1, ui_utils_1, ui_event_1) {
    var UIModel = (function () {
        function UIModel() {
            var _this = this;
            this._subscriptions = [];
            this.isDirty = false;
            var _v = ui_utils_1.Utils.lazy(aurelia_validation_1.Validation);
            this.observer = ui_utils_1.Utils.lazy(aurelia_framework_1.BindingEngine);
            this.httpClient = ui_utils_1.Utils.lazy(ui_http_service_1.UIHttpService);
            this.validation = _v.on(this, null);
            this.logger = aurelia_logging_1.getLogger(this.constructor.name);
            this.logger.debug("Model Initialized");
            this.isDirty = false;
            if (this._observers) {
                var self_1 = this;
                ui_utils_1._.forEach(this._observers, function (prop) {
                    _this._subscriptions.push(_this.observer.propertyObserver(_this, prop)
                        .subscribe(function () {
                        self_1.isDirty = true;
                        ui_event_1.UIEvent.broadcast(_this.constructor.name + ":" + prop, _this);
                    }));
                });
            }
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
        UIModel.prototype.deserialize = function (json) {
            var _this = this;
            this._original = ui_utils_1._.clone(json, true);
            ui_utils_1._.forEach(json, function (v, k) {
                _this[k] = ui_utils_1._.isString(v) ? ui_utils_1._.trim(v) : v;
            });
            this.isDirty = false;
        };
        UIModel.prototype.serialize = function () {
            throw new Error('Not implemented [serialize]');
        };
        UIModel.prototype.addObserver = function (o) {
            if (!this._observers)
                this._observers = [];
            this._observers.push(o);
        };
        UIModel.prototype.dispose = function () {
            while (this._subscriptions && this._subscriptions.length) {
                this._subscriptions.pop().dispose();
            }
        };
        UIModel.prototype.saveChanges = function () {
            var _this = this;
            ui_utils_1._.forEach(this._original, function (v, k) {
                _this._original[k] = _this[k];
            });
        };
        UIModel.prototype.discardChanges = function () {
            var _this = this;
            ui_utils_1._.forEach(this._original, function (v, k) {
                _this[k] = ui_utils_1._.isString(v) ? ui_utils_1._.trim(v) : v;
            });
        };
        UIModel = __decorate([
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [])
        ], UIModel);
        return UIModel;
    })();
    exports.UIModel = UIModel;
    function dirtyCheck() {
        return function (model, key) {
            model.addObserver(key);
        };
    }
    exports.dirtyCheck = dirtyCheck;
    function watch(defaultValue) {
        var observer = ui_utils_1.Utils.lazy(aurelia_framework_1.BindingEngine);
        return function (viewModel, key) {
            if (!viewModel._subscriptions)
                viewModel._subscriptions = [];
            var v = sessionStorage.getItem(viewModel.constructor.name + ":" + key);
            viewModel[key] = v || defaultValue;
            viewModel._subscriptions.push(observer.propertyObserver(viewModel, key)
                .subscribe(function () {
                sessionStorage.setItem(viewModel.constructor.name + ":" + key, viewModel[key]);
            }));
            viewModel.unbind = (function () {
                while (viewModel._subscriptions.length) {
                    viewModel._subscriptions.pop().dispose();
                }
            });
        };
    }
    exports.watch = watch;
});
