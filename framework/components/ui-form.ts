/**
 *    UI Component  Form
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {Validation} from "aurelia-validation";

@autoinject()
@customElement('ui-form')
export class UIForm {
  @bindable
  busy: boolean;
  @bindable
  validation: Validation;

  private __form: HTMLElement;

  constructor(public element: Element) {
  }

  attached() {
    setTimeout(() => {
      let el: any = this.__form.querySelector('ui-input input,textarea,ui-phone input');
      if (!isEmpty(el)) el.focus();
    }, 10);

    if (this.busy) setTimeout(() => this.busyChanged(true), 200);
  }

  busyChanged(newValue: any) {
    let els = this.element.querySelectorAll('ui-button,ui-combo,ui-date,ui-input,ui-input-dual,ui-markdown,ui-checkbox,ui-radio,ui-phone,ui-switch,ui-textarea');
    _.forEach(els, el=> {
      try {
        el.au.controller.viewModel.disable(isTrue(newValue));
      } catch (e) {
      }
    });
  }

  fireSubmit() {
    UIEvent.fireEvent('submit', this.element, this);
  }

  getForm() {
    return this.__form;
  }
}
