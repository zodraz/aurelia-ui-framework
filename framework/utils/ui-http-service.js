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
define(["require", "exports", "aurelia-framework", "aurelia-logging", "aurelia-fetch-client", "aurelia-event-aggregator", "./ui-app-state", "fetch"], function (require, exports, aurelia_framework_1, aurelia_logging_1, aurelia_fetch_client_1, aurelia_event_aggregator_1, ui_app_state_1) {
    var UIHttpService = (function () {
        function UIHttpService(httpClient, appState, eventAggregator) {
            this.httpClient = httpClient;
            this.appState = appState;
            this.eventAggregator = eventAggregator;
            var self = this;
            this.logger = aurelia_logging_1.getLogger('HttpService');
            this.logger.debug('Initialized');
            httpClient.configure(function (config) {
                config
                    .withBaseUrl(appState.BaseUrl)
                    .withDefaults({})
                    .withInterceptor({
                    request: function (request) {
                        self.logger.info("Requesting " + request.method + " " + request.url);
                        appState.IsHttpInUse = true;
                        request.url = encodeURI(request.url);
                        return request;
                    },
                    response: function (response) {
                        self.logger.info("Response " + response.url + " " + response.status);
                        appState.IsHttpInUse = false;
                        if (response.status == 401) {
                            eventAggregator.publish('Unauthorized', null);
                        }
                        if (response.status != 200)
                            throw Error(response.statusText);
                        return response;
                    },
                    requestError: function (error) {
                        appState.IsHttpInUse = false;
                        throw error;
                    },
                    responseError: function (error) {
                        appState.IsHttpInUse = false;
                        throw error;
                    }
                });
            });
        }
        UIHttpService.prototype.get = function (slug) {
            this.logger.debug("get [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'get',
                mode: 'cors',
                headers: this._getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype.put = function (slug, obj) {
            this.logger.debug("put [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'put',
                body: aurelia_fetch_client_1.json(obj),
                mode: 'cors',
                headers: this._getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype.post = function (slug, obj) {
            this.logger.debug("post [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'post',
                body: aurelia_fetch_client_1.json(obj),
                mode: 'cors',
                headers: this._getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype.delete = function (slug) {
            this.logger.debug("delete [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'delete',
                mode: 'cors',
                headers: this._getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype._getHeaders = function () {
            var headers = {
                'X-Requested-With': 'Fetch',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            };
            if (this.appState.AllowAuthHeader &&
                this.appState.Username !== null) {
                var token = this.appState.AuthUser + ":" + this.appState.AuthToken;
                var hash = btoa(token);
                headers['Authorization'] = "Basic " + hash;
            }
            return headers;
        };
        UIHttpService = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient, ui_app_state_1.UIApplicationState, aurelia_event_aggregator_1.EventAggregator])
        ], UIHttpService);
        return UIHttpService;
    })();
    exports.UIHttpService = UIHttpService;
});
