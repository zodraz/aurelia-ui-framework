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
define(["require", "exports", "aurelia-framework", "aurelia-logging", "./ui-app-state"], function (require, exports, aurelia_framework_1, aurelia_logging_1, ui_app_state_1) {
    var UIDwrService = (function () {
        function UIDwrService(appState) {
            this.appState = appState;
            this.logger = aurelia_logging_1.getLogger('DwrService');
            window.ajaxFunctions._path = window.pathToDwrServlet;
        }
        UIDwrService.prototype.execute = function (method, params, inject) {
            var _this = this;
            if (inject === void 0) { inject = true; }
            if (inject) {
                params = [this.appState.Username, this.appState.IpAddress, this.appState.AppSource].concat(params);
            }
            var self = this;
            self.logger.info("Executing " + method);
            var promise = new Promise(function (resolve, reject) {
                if (!window.ajaxFunctions)
                    reject(new Error('Web-Service not loaded'));
                else if (!window.ajaxFunctions[method])
                    reject(new Error('Web-Service function not found'));
                else {
                    _this.appState.IsHttpInUse = true;
                    params.push({
                        callback: function (response) {
                            if (response.exitCode != 0)
                                reject(new Error(response.error));
                            else
                                resolve(response);
                            _this.appState.IsHttpInUse = false;
                        },
                        timeout: 30000,
                        errorHandler: function (message) {
                            self.logger.error("Exception occurred " + message);
                            _this.appState.IsHttpInUse = false;
                            reject(new Error(method + ":" + message));
                        }
                    });
                    window.ajaxFunctions[method].apply(null, params);
                }
            });
            return promise;
        };
        UIDwrService = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [ui_app_state_1.UIApplicationState])
        ], UIDwrService);
        return UIDwrService;
    })();
    exports.UIDwrService = UIDwrService;
});
