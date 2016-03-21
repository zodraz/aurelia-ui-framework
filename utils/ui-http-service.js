var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-fetch-client", "aurelia-event-aggregator", "./ui-application", "fetch"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, aurelia_event_aggregator_1, ui_application_1) {
    "use strict";
    var UIHttpService = (function () {
        function UIHttpService(httpClient, appState, eventAggregator) {
            this.httpClient = httpClient;
            this.appState = appState;
            this.eventAggregator = eventAggregator;
            this.appState.info(this.constructor.name, 'Initialized');
            httpClient.configure(function (config) {
                config
                    .withBaseUrl(appState.HttpConfig.BaseUrl)
                    .withDefaults({})
                    .withInterceptor({
                    request: function (request) {
                        appState.info(this.constructor.name, "Requesting " + request.method + " " + request.url);
                        appState.IsHttpInUse = true;
                        request.url = encodeURI(request.url);
                        return request;
                    },
                    response: function (response) {
                        appState.info(this.constructor.name, "Response " + response.url + " " + response.status);
                        appState.IsHttpInUse = false;
                        if (response.status == 401) {
                            eventAggregator.publish('Unauthorized', null);
                        }
                        if (response.status != 200) {
                            var j = void 0;
                            try {
                                j = response.json();
                            }
                            catch (e) {
                            }
                            if (j && j.message)
                                throw new Error(j.message);
                            else if (j && j.error)
                                throw new Error(j.error);
                            throw Error(response.statusText);
                        }
                        return response;
                    },
                    requestError: function (error) {
                        appState.IsHttpInUse = false;
                        return error;
                    },
                    responseError: function (error) {
                        appState.IsHttpInUse = false;
                        return error;
                    }
                });
            });
        }
        UIHttpService.prototype.get = function (slug) {
            this.appState.info(this.constructor.name, "get [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'get',
                mode: 'cors',
                headers: this.__getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype.put = function (slug, obj) {
            this.appState.info(this.constructor.name, "put [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'put',
                body: aurelia_fetch_client_1.json(obj),
                mode: 'cors',
                headers: this.__getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype.post = function (slug, obj) {
            this.appState.info(this.constructor.name, "post [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'post',
                body: aurelia_fetch_client_1.json(obj),
                mode: 'cors',
                headers: this.__getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype.delete = function (slug) {
            this.appState.info(this.constructor.name, "delete [" + slug + "]");
            return this.httpClient
                .fetch(slug, {
                method: 'delete',
                mode: 'cors',
                headers: this.__getHeaders()
            })
                .then(function (response) { return response.json(); });
        };
        UIHttpService.prototype.__getHeaders = function () {
            var headers = {
                'X-Requested-With': 'Fetch',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            };
            Object.assign(headers, this.appState.HttpConfig.Headers || {});
            if (this.appState.HttpConfig.AuthorizationHeader && !isEmpty(this.appState.AuthUser)) {
                var token = this.appState.AuthUser + ":" + this.appState.AuthToken;
                var hash = btoa(token);
                headers['Authorization'] = "Basic " + hash;
            }
            return headers;
        };
        UIHttpService = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient, ui_application_1.UIApplication, aurelia_event_aggregator_1.EventAggregator])
        ], UIHttpService);
        return UIHttpService;
    }());
    exports.UIHttpService = UIHttpService;
});
