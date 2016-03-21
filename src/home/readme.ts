import {inlineView, autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import {_} from "../../framework/index";
import "fetch";

@autoinject()
@inlineView('<template><ui-page page-title="ReadMe"><ui-content padded scroll><div ref="__content" class="ui-markdown" innerhtml.bind="readme | markdown"></div></ui-content></ui-page></template>')
export class ReadMe {

	__content;
	readme = '';

	constructor(public httpClient:HttpClient) {
	}

	activate() {
		return this.httpClient
				   .fetch('./README.md')
				   .then(resp=>resp.text())
				   .then(resp=>this.readme = resp)
	}

	attached() {
		_.forEach(this.__content.querySelectorAll('.lang-html'), c=> {
			c.classList.add('html');
			hljs.highlightBlock(c);
		});
		_.forEach(this.__content.querySelectorAll('.lang-javascript'), c=> {
			c.classList.add('javascript');
			hljs.highlightBlock(c);
		});
	}
}