/**
 *    UI Utils: HTTP Service
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, transient} from "aurelia-framework";
import {getLogger, Logger} from "aurelia-logging";
import {HttpClient, json} from "aurelia-fetch-client";
import {EventAggregator} from "aurelia-event-aggregator";
import {Validation,ValidationGroup} from "aurelia-validation";
import {UIApplicationState} from "./ui-app-state";
import {Response} from "fetch";
import "fetch";

@transient()
@autoinject()
export class UIHttpService {
	logger:Logger;

	constructor(public httpClient:HttpClient, public appState:UIApplicationState,
				public eventAggregator:EventAggregator) {
		var self    = this;
		this.logger = getLogger('HttpService');
		this.logger.debug('Initialized');

		httpClient.configure(config => {
			config
				.withBaseUrl(appState.BaseUrl)
				.withDefaults({})
				.withInterceptor({
					request(request) {
						self.logger.info(`Requesting ${request.method} ${request.url}`);
						appState.IsHttpInUse = true;
						request.url          = encodeURI(request.url);
						return request;
					},
					response(response) {
						self.logger.info(`Response ${response.url} ${response.status}`);
						appState.IsHttpInUse = false;
						if (response.status == 401) {
							eventAggregator.publish('Unauthorized', null);
						}
						if (response.status != 200) throw Error(response.statusText);
						return response;
					},
					requestError(error) {
						appState.IsHttpInUse = false;
						throw error;
					},
					responseError(error) {
						appState.IsHttpInUse = false;
						throw error;
					}
				});
		});
	}

	//**** SHARED METHODS ****//
	get(slug:string) {
		this.logger.debug(`get [${slug}]`);
		return this.httpClient
			.fetch(slug, {
				method: 'get',
				mode: 'cors',
				headers: this._getHeaders()
			})
			.then((response:Response) => response.json());
	}

	put(slug:string, obj) {
		this.logger.debug(`put [${slug}]`);
		return this.httpClient
			.fetch(slug, {
				method: 'put',
				body: json(obj),
				mode: 'cors',
				headers: this._getHeaders()
			})
			.then((response:Response) => response.json());
	}

	post(slug:string, obj) {
		this.logger.debug(`post [${slug}]`);
		return this.httpClient
			.fetch(slug, {
				method: 'post',
				body: json(obj),
				mode: 'cors',
				headers: this._getHeaders()
			})
			.then((response:Response) => response.json());
	}

	delete(slug:string) {
		this.logger.debug(`delete [${slug}]`);
		return this.httpClient
			.fetch(slug, {
				method: 'delete',
				mode: 'cors',
				headers: this._getHeaders()
			})
			.then((response:Response) => response.json());
	}

	private _getHeaders() {
		var headers = {
			'X-Requested-With': 'Fetch',
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		};

		if (this.appState.AllowAuthHeader &&
			this.appState.Username !== null) {
			var token                = this.appState.AuthUser + ":" + this.appState.AuthToken;
			var hash                 = btoa(token);
			headers['Authorization'] = "Basic " + hash;
		}
		return headers;
	}
}
