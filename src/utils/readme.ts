import {inlineView, autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import "fetch";

@autoinject()
@inlineView('<template><div class="ui-markdown" innerhtml.bind="readme | markdown"></div></template>')
export class ReadMe {

	readme = '';

	constructor(public httpClient:HttpClient) {
	}

	activate() {
		return this.httpClient
				   .fetch('./framework/utils/README.md')
				   .then(resp=>resp.text())
				   .then(resp=>this.readme = resp);
	}
}