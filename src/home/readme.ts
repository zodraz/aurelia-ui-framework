import {inlineView, autoinject} from "aurelia-framework";
import {_, UIHttpService} from "../../framework/index";

@autoinject()
@inlineView('<template><ui-page page-title="ReadMe"><ui-content padded scroll><div ref="__content" class="ui-markdown" innerhtml.bind="readme | markdown"></div></ui-content></ui-page></template>')
export class ReadMe {

  __content;
  readme = '';

  constructor(public httpClient: UIHttpService) {
  }

  activate() {
    return this.httpClient
      .text('./README.md')
      .then(resp=> this.readme = resp)
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
