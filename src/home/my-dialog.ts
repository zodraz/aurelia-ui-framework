import {UIDialog, UIHttpService} from "../../framework/index";

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
      .text('./example.md')
      .then(resp=> this.md = resp);
  }

}
