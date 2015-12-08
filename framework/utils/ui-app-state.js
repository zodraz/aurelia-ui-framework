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
define(["require", "exports", "aurelia-framework", "aurelia-router", "aurelia-logging", "aurelia-event-aggregator", "aurelia-dependency-injection", "./ui-utils"], function (require, exports, aurelia_framework_1, aurelia_router_1, aurelia_logging_1, aurelia_event_aggregator_1, aurelia_dependency_injection_1, ui_utils_1) {
    var UIApplicationState = (function () {
        function UIApplicationState(router, container, eventAggregator) {
            var _this = this;
            this.router = router;
            this.container = container;
            this.eventAggregator = eventAggregator;
            this.IsAuthenticated = false;
            this.IsHttpInUse = false;
            this.AllowAuthHeader = false;
            this.AppKey = 'AUF';
            this.Version = "0.0.1";
            this.StartYear = '2015';
            this.Copyright = 'Adarsh Pastakia';
            this.BaseUrl = '';
            this.IpAddress = '';
            this.AppSource = 0;
            this._keyObjects = {};
            this._logger = aurelia_logging_1.getLogger('UIApplicationState');
            this._logger.debug('Initialized');
            ui_utils_1.Utils.container = container;
            this.eventAggregator.subscribe('Unauthorized', function () {
                _this._logger.debug('Unauthorized');
                _this.Username = null;
                _this.IsAuthenticated = false;
                _this.navigateTo('login', { message: '401 Unauthorized' });
            });
            this.eventAggregator.subscribe('Logout', function () {
                _this._logger.debug('Logout');
                _this.Username = null;
                _this.IsAuthenticated = false;
                _this.navigateTo('login');
            });
            $.notify.defaults({
                style: 'ui',
                className: 'danger'
            });
            $.notify.addStyle('confirm', {
                html: "<div class='ui-notify-confirm'>" +
                    "<div class='ui-notify'>" +
                    "<div class='title' data-notify-html='title'/>" +
                    "<div class='buttons'>" +
                    "<button class='btn yes' data-notify-text='yes'></button>" +
                    "<button class='btn no' data-notify-text='no'></button>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
            });
        }
        UIApplicationState.prototype.get = function (key) {
            return this._keyObjects[key];
        };
        UIApplicationState.prototype.set = function (key, value) {
            this._keyObjects[key] = value;
            return value;
        };
        UIApplicationState.prototype.navigateTo = function (route, params) {
            if (params === void 0) { params = {}; }
            this._logger.debug("navigateTo::" + route);
            this.router.navigateToRoute(route, params, {});
        };
        UIApplicationState.prototype.notifyError = function (msg) {
            this._logger.debug("notify::" + msg);
            $.notify(msg);
        };
        UIApplicationState.prototype.notifyPageError = function (msg) {
            this._logger.debug("notifyPage::" + msg);
            $('.ui-page-title').notify(msg, {
                elementPosition: 'b c',
                arrowShow: false
            });
        };
        UIApplicationState.prototype.notifyConfirm = function (msg) {
            return new Promise(function (resolve, reject) {
                var _el = $('body').append("\n\t\t\t<div class='ui-notify-confirm'>\n\t\t\t\t<div class='ui-notify'>\n\t\t\t\t\t<div class='title'>" + msg + "</div>\n\t\t\t\t\t<div class='buttons'>\n\t\t\t\t\t\t<button class='btn yes'>Yes</button>\n\t\t\t\t\t\t<button class='btn no'>No</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t").children('.ui-notify-confirm');
                _el.one('click', '.btn', function (e) {
                    ($(e.target).hasClass('yes')) ? resolve() : reject();
                    _el.remove();
                });
            });
        };
        UIApplicationState.prototype.getLocal = function (key) {
            return JSON.parse(window.localStorage.getItem(this.AppKey + "_" + key));
        };
        UIApplicationState.prototype.saveLocal = function (key, value) {
            if (value === void 0) { value = null; }
            if (value)
                window.localStorage.setItem(this.AppKey + "_" + key, JSON.stringify(value));
            else
                window.localStorage.removeItem(this.AppKey + "_" + key);
        };
        UIApplicationState.prototype.getState = function (key) {
            return JSON.parse(window.sessionStorage.getItem(this.AppKey + "_" + key));
        };
        UIApplicationState.prototype.saveState = function (key, value) {
            if (value === void 0) { value = null; }
            if (value)
                window.sessionStorage.setItem(this.AppKey + "_" + key, JSON.stringify(value));
            else
                window.sessionStorage.removeItem(this.AppKey + "_" + key);
        };
        UIApplicationState = __decorate([
            aurelia_framework_1.singleton(),
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_router_1.Router, aurelia_dependency_injection_1.Container, aurelia_event_aggregator_1.EventAggregator])
        ], UIApplicationState);
        return UIApplicationState;
    })();
    exports.UIApplicationState = UIApplicationState;
    var AuthInterceptor = (function () {
        function AuthInterceptor(appState) {
            this.appState = appState;
            this.logger = aurelia_logging_1.getLogger('AuthInterceptor');
            this.logger.debug('Initialized');
        }
        AuthInterceptor.prototype.run = function (routingContext, next) {
            if (routingContext.config.auth) {
                if (!this.appState.IsAuthenticated) {
                    this.logger.debug('Not authenticated');
                    var url = routingContext.router.generate('login', { message: '401 Unauthorized' });
                    this.appState.IsAuthenticated = false;
                    return next.cancel(new aurelia_router_1.Redirect(url));
                }
            }
            if (!routingContext.config.isLogin && !this.isAllowed(routingContext.config.group)) {
                this.logger.debug("Access denied [" + routingContext.config.group + "]");
                $.notify('Access Denied');
                return next.cancel();
            }
            return next();
        };
        AuthInterceptor.prototype.isAllowed = function (groups) {
            if (groups && this.appState.UserGroup !== null) {
                var rx = groups.replace(/(\!+\d+)/g, function (x) {
                    return x.replace('!', '[^') + ']';
                });
                return new RegExp("^(" + rx + ")$").test(this.appState.UserGroup);
            }
            return true;
        };
        AuthInterceptor = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [UIApplicationState])
        ], AuthInterceptor);
        return AuthInterceptor;
    })();
    exports.AuthInterceptor = AuthInterceptor;
});
