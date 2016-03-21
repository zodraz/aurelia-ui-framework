import {inlineView, autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import {_} from "../../framework/index";
import "fetch";

@autoinject()
@inlineView('<template><ui-page page-title="ToDo"><ui-content scroll>' +
			'<ui-row class="ui-align-center"><ui-column width="30em">' +
			'<div ref="__content" class="ui-markdown" innerhtml.bind="readme | markdown"></div>' +
			'</ui-column></ui-row>' +
			'</ui-content></ui-page></template>')
export class ReadMe {

	__content;
	readme = '';

	constructor(public httpClient:HttpClient) {
	}

	activate() {
		return this.httpClient
				   .fetch('./TODO.md')
				   .then(resp=>resp.text())
				   .then(resp=>this.readme = resp
					   .replace(/\[\]/gi, '<span class="fi-vaadin-square ui-text-danger"></span>')
					   .replace(/\[(\*|\-)\]/gi, '<span class="fi-vaadin-check-square-1 ui-text-success"></span>'))
	}

	attached() {
	}
}