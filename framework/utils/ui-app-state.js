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
define(["require", "exports", "aurelia-framework", "aurelia-router", "aurelia-logging", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_router_1, aurelia_logging_1, aurelia_event_aggregator_1) {
    var UIApplicationState = (function () {
        function UIApplicationState(router, eventAggregator) {
            var _this = this;
            this.router = router;
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
            this.logger = aurelia_logging_1.getLogger('UIApplicationState');
            this.logger.debug('Initialized');
            this.eventAggregator.subscribe('Unauthorized', function () {
                _this.logger.debug('Unauthorized');
                _this.Username = null;
                _this.IsAuthenticated = false;
                _this.navigateTo('login', { message: '401 Unauthorized' });
            });
            this.eventAggregator.subscribe('Logout', function () {
                _this.logger.debug('Logout');
                _this.Username = null;
                _this.IsAuthenticated = false;
                _this.navigateTo('login');
            });
            $.notify.defaults({
                style: 'ui',
                className: 'danger'
            });
        }
        UIApplicationState.prototype.navigateTo = function (route, params) {
            if (params === void 0) { params = {}; }
            this.logger.debug("navigateTo::" + route);
            this.router.navigateToRoute(route, params, {});
        };
        UIApplicationState.prototype.notifyError = function (msg) {
            this.logger.debug("notify::" + msg);
            $.notify(msg);
        };
        UIApplicationState.prototype.notifyPageError = function (msg) {
            this.logger.debug("notifyPage::" + msg);
            $('.ui-page-title').notify(msg, {
                elementPosition: 'b c',
                arrowShow: false
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
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_router_1.Router, aurelia_event_aggregator_1.EventAggregator])
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
