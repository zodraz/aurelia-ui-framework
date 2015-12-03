/**
 *    UI Utils: DWR Service for Legacy Apps
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject} from "aurelia-framework";
import {Logger, getLogger} from "aurelia-logging";
import {UIApplicationState} from "./ui-app-state";

@autoinject()
export class UIDwrService {
	logger:Logger;

	constructor(public appState:UIApplicationState) {
		this.logger                = getLogger('DwrService');
		window.ajaxFunctions._path = window.pathToDwrServlet;
	}

	execute(method:string, params:Array<any>, inject:boolean = true):Promise<ResponseHandler> {
		if (inject) {
			params = [this.appState.Username, this.appState.IpAddress, this.appState.AppSource].concat(params);
		}
		var self = this;
		self.logger.info(`Executing ${method}`);
		var promise = new Promise((resolve, reject)=> {
			if (!window.ajaxFunctions) reject(new Error('Web-Service not loaded'));
			else if (!window.ajaxFunctions[method]) reject(new Error('Web-Service function not found'));
			else {
				this.appState.IsHttpInUse = true;
				params.push({
					callback: (response)=> {
						if (response.exitCode != 0)
							reject(new Error(response.error));
						else
							resolve(response);
						this.appState.IsHttpInUse = false;
					},
					timeout: 30000,
					errorHandler: (message)=> {
						self.logger.error(`Exception occurred ${message}`);
						this.appState.IsHttpInUse = false;
						reject(new Error(`${method}:${message}`));
					}
				});
				window.ajaxFunctions[method].apply(null, params);
			}
		});
		return promise;
	}
}

export interface ResponseHandler {
	data:any;
	secondaryData:any;
	thirdData:any;
	fourthData:any;
	fifthData:any;

	exitCode:number;
	error:string;
}