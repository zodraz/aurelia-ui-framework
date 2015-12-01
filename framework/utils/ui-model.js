define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "aurelia-logging", "aurelia-validation", "./ui-http-service"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, aurelia_logging_1, aurelia_validation_1, ui_http_service_1) {
    var UIModel = (function () {
        function UIModel() {
            var _c = new aurelia_dependency_injection_1.Container();
            var _v = aurelia_framework_1.Lazy.of(aurelia_validation_1.Validation).get(_c)();
            this.httpClient = aurelia_framework_1.Lazy.of(ui_http_service_1.UIHttpService).get(_c)();
            this.validation = _v.on(this, null);
            this.logger = aurelia_logging_1.getLogger(this.constructor.name);
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
        return UIModel;
    })();
    exports.UIModel = UIModel;
});
