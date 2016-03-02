import {singleton, autoinject} from "aurelia-framework";
import {getLogger} from "aurelia-logging";

@singleton()
@autoinject()
export class UIApplication {

	private __logger;


	public IsHttpInUse:boolean     = false;
	public IsAuthenticated:boolean = false;
	public AllowAuthHeader:boolean = false;

	constructor() {
		this.__logger = getLogger('UIApp');
	}

	/** App Constants **/
	private __username;

	get Username() {
		return this.__username;
	}

	set Username(v) {
		this.__username = v;
	}
}