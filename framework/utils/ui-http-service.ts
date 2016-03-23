/**
 *    UI Utils      HTTP Service
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, transient} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";
import {EventAggregator} from "aurelia-event-aggregator";
import {UIApplication} from "./ui-application";
import {Response} from "fetch";
import "fetch";

@autoinject()
export class UIHttpService {

	constructor(public httpClient:HttpClient,
				public appState:UIApplication,
				public eventAggregator:EventAggregator) {
		this.appState.info(this.constructor.name, 'Initialized');

		httpClient.configure(
			config => {
				config
					.withBaseUrl(appState.HttpConfig.BaseUrl)
					//.withDefaults({})
					.withInterceptor({
										 request(request) {
											 appState.info(this.constructor.name, `Requesting ${request.method} ${request.url}`);
											 appState.IsHttpInUse = true;
											 //request.url          = encodeURI(request.url);
											 return request;
										 },
										 response(response) {
											 appState.info(this.constructor.name, `Response ${response.url} ${response.status}`);
											 appState.IsHttpInUse = false;

											 console.log('Response', response instanceof TypeError, response);
											 if (response instanceof TypeError) {
												 throw Error(response['message']);
											 }

											 if (response.status == 401) {
												 eventAggregator.publish('Unauthorized', null);
											 }
											 if (response.status != 200) {
												 let j;
												 if (isFunction(response.json))j = response.json();
												 if (j && j.message) throw new Error(j.message);
												 if (j && j.error) throw new Error(j.error);
												 throw Error(response.statusText);
											 }
											 return response;
										 },
										 requestError(error) {
											 appState.IsHttpInUse = false;
											 if (error !== null)throw Error(error.message);
											 return error;
										 },
										 responseError(error) {
											 appState.IsHttpInUse = false;
											 if (error !== null)throw Error(error.message);
											 return error;
										 }
									 });
			});
	}

	//**** SHARED METHODS ****//
	get(slug:string) {
		this.appState.info(this.constructor.name, `get [${slug}]`);
		return this.httpClient
				   .fetch(slug, {
					   method : 'get',
					   mode   : 'cors',
					   headers: this.__getHeaders()
				   })
				   .then(response => response.json());
	}

	put(slug:string, obj) {
		this.appState.info(this.constructor.name, `put [${slug}]`);
		return this.httpClient
				   .fetch(slug, {
					   method : 'put',
					   body   : json(obj),
					   mode   : 'cors',
					   headers: this.__getHeaders()
				   })
				   .then(response => response.json());
	}

	post(slug:string, obj) {
		this.appState.info(this.constructor.name, `post [${slug}]`);
		return this.httpClient
				   .fetch(slug, {
					   method : 'post',
					   body   : json(obj),
					   mode   : 'cors',
					   headers: this.__getHeaders()
				   })
				   .then(response => response.json());
	}

	delete(slug:string) {
		this.appState.info(this.constructor.name, `delete [${slug}]`);
		return this.httpClient
				   .fetch(slug, {
					   method : 'delete',
					   mode   : 'cors',
					   headers: this.__getHeaders()
				   })
				   .then(response => response.json());
	}

	upload(slug:string, form:HTMLFormElement) {
		this.appState.info(this.constructor.name, `upload [${slug}]`);
		this.__upload('post', slug, form);
	}

	reupload(slug:string, form:HTMLFormElement) {
		this.appState.info(this.constructor.name, `reupload [${slug}]`);
		this.__upload('put', slug, form);
	}

	__upload(method:string, slug:string, form:HTMLFormElement) {
		var data = new FormData();
		for (var i = 0, q = (form.querySelectorAll('input') as NodeListOf<HTMLInputElement>); i < q.length; i++) {
			if (q[i].type == 'file') {
				for (var x = 0; x < q[i].files.length; x++) {
					data.append("file" + (i++), q[i].files[x], q[i].files[x].name);
				}
			}
			else {
				data.append(q[i].name, q[i].value);
			}
		}
		return this.httpClient
				   .fetch(slug, {
					   method : method,
					   body   : data,
					   mode   : 'cors',
					   headers: this.__getHeaders()
				   })
				   .then(response => response.json());
	}

	private __getHeaders() {
		var headers = {
			'X-Requested-With'           : 'Fetch',
			'Accept'                     : 'application/json',
			//'Content-Type'               : 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
		Object.assign(headers, this.appState.HttpConfig.Headers || {});

		if (this.appState.HttpConfig.AuthorizationHeader && !isEmpty(this.appState.AuthUser)) {
			var token                = this.appState.AuthUser + ":" + this.appState.AuthToken;
			var hash                 = btoa(token);
			headers['Authorization'] = "Basic " + hash;
		}
		return headers;
	}
}
