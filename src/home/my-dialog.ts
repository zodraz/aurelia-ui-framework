import {autoinject} from "aurelia-framework";
import {UIDialog, UIHttpService} from "aurelia-ui-framework";

@autoinject()
export class MyDialog extends UIDialog {
  static i = 1;

  md = '';
  modal = false;
  icon = 'fi-vaadin-exclamation-circle';
  title = `Dialog ${MyDialog.i++}`;

  constructor(public httpClient: UIHttpService) {
    super();
  }

  canActivate(model) {
    this.modal = (model || { modal: false }).modal;
    return this.httpClient
      .text('./src/home/example.md')
      .then(resp=> this.md = resp)
  }

}
