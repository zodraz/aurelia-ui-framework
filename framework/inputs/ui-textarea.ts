/**
 *    UI Input      Multiline Input
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {customElement, bindable, bindingMode, autoinject} from "aurelia-framework";
import {UIInputGroup} from "./ui-input-group";

@autoinject()
@customElement('ui-textarea')
export class UITextArea extends UIInputGroup {
  __list;
  __focus;
  __hilight;
  __autoComplete;

	/**
	 * @property    value
	 * @type        string
	 */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  value: string = '';
	/**
	 * @property    checked
	 * @type        boolean
	 */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  checked: boolean = false;
	/**
	 * @property    disabled
	 * @type        boolean
	 */
  @bindable()
  disabled: boolean = false;
	/**
	 * @property    readonly
	 * @type        boolean
	 */
  @bindable()
  readonly: boolean = false;

	/**
	 * @property    prefix-icon
	 * @type        string
	 */
  @bindable()
  prefixIcon: string;
	/**
	 * @property    prefix-text
	 * @type        string
	 */
  @bindable()
  prefixText: string;

	/**
	 * @property    suffix-icon
	 * @type        string
	 */
  @bindable()
  suffixIcon: string;
	/**
	 * @property    suffix-text
	 * @type        string
	 */
  @bindable()
  suffixText: string;

	/**
	 * @property    button-icon
	 * @type        string
	 */
  @bindable()
  buttonIcon: string;
	/**
	 * @property    button-text
	 * @type        string
	 */
  @bindable()
  buttonText: string;

	/**
	 * @property    help-text
	 * @type        string
	 */
  @bindable()
  helpText: string;

	/**
	 * @property    placeholder
	 * @type        string
	 */
  @bindable()
  placeholder: string = '';

	/**
	 * @property    rows
	 * @type        string
	 */
  @bindable()
  rows: string = '5';

	/**
	 * @property    dir
	 * @type        string
	 */
  @bindable()
  dir: string = '';


  /**
   * @property    auto-complete
   * @type        string
   */
  @bindable()
  autoComplete: any;

  constructor(element: Element) {
    super(element);
  }

  attached() {
    super.attached();
    if (!isEmpty(this.autoComplete)) this.__input.onkeydown = (evt) => this.showList(evt);
  }

  showList(evt) {
    let code = (evt.keyCode || evt.which);
    console.log(this.getTextFromHeadToCaret());
  }
  getTextFromHeadToCaret() {
    var range = window.getSelection().getRangeAt(0);
    var selection = range.cloneRange();
    selection.selectNodeContents(range.startContainer);
    return selection.toString().substring(0, range.startOffset);
  }

  keyPress(evt) {
    if (evt.ctrlKey || evt.altKey || evt.metaKey || (evt.keyCode || evt.which) === 0) return true;
    let code = (evt.keyCode || evt.which);

    if (code == 13 && this.__focus) {
      this.__focus = false;
      return false;
    }

    if (code === 38) {
      let h = this.__list.querySelector('.ui-list-item.hilight');
      // if no hilight get selected
      if (h === null) h = this.__list.querySelector('.ui-list-item.selected');
      if (h != null) {
        h = <HTMLElement>h.previousElementSibling;
        if (h.tagName === 'P') h = <HTMLElement>h.previousElementSibling;
        if (h !== null) {
          if (this.__hilight != null) this.__hilight.classList.remove('hilight');
          (this.__hilight = h).classList.add('hilight');
          this.__scrollIntoView();
        }
      }
      return false;
    }
    else if (code === 40) {
      let h = this.__list.querySelector('.ui-list-item.hilight');
      // if no hilight get selected
      if (h === null) h = this.__list.querySelector('.ui-list-item.selected');
      // if found hilight or selected get next
      if (h !== null) h = <HTMLElement>h.nextElementSibling;
      // if no selected get first
      if (h === null) h = this.__list.querySelector('.ui-list-item');
      // if group label get next
      if (h.tagName === 'P') h = <HTMLElement>h.nextElementSibling;
      if (h !== null) {
        if (this.__hilight != null) this.__hilight.classList.remove('hilight');
        (this.__hilight = h).classList.add('hilight');
        this.__scrollIntoView();
      }
      return false;
    }
    return super.keyPress(evt);
  }

  __clicked($event) {
    let o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
    if (o !== null) {
    }
  }

  __scrollIntoView() {
    this.__list.scrollTop = (this.__hilight !== null ? this.__hilight.offsetTop - (this.__list.offsetHeight / 2) : 0);
  }
}
