define(["require", "exports", "aurelia-logging", "./ui-http-service", "aurelia-validation", "./ui-utils"], function (require, exports, aurelia_logging_1, ui_http_service_1, aurelia_validation_1, ui_utils_1) {
    var UIModel = (function () {
        function UIModel() {
            var _v = ui_utils_1.Utils.lazy(aurelia_validation_1.Validation);
            this.httpClient = ui_utils_1.Utils.lazy(ui_http_service_1.UIHttpService);
            this.validation = _v.on(this, null);
            this.logger = aurelia_logging_1.getLogger(this.constructor.name);
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
        UIModel.prototype.deserialize = function (json) {
            var _this = this;
            ui_utils_1._.forEach(json, function (v, k) {
                _this[k] = ui_utils_1._.isString(v) ? ui_utils_1._.trim(v) : v;
            });
        };
        UIModel.prototype.serialize = function () {
            throw new Error('Not implemented [serialize]');
        };
        return UIModel;
    })();
    exports.UIModel = UIModel;
});
