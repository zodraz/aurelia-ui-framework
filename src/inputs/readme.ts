import {autoinject, inlineView} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@autoinject()
@inlineView('<template><ui-content scroll padded class="ui-markdown" innerhtml.bind="readme | markdown"></ui-content></template>')
export class Readme {
	readme = '';

	constructor(public http:HttpClient) {
	}

	canActivate() {
		return this.http.fetch('framework/inputs/README.md')
				   .then(resp=>resp.text())
				   .then(resp=>this.readme = resp);
	}
}