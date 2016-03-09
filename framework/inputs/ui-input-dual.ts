/**
 *    UI Input      Singleline Input
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, useView, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "aurelia-ui-framework";
import {UIInput} from "./ui-input";

@useView("./ui-input.html")
@customElement('ui-input-dual')
export class UIInputDual extends UIInput {
	private __dual = true;

	/**
	 * @property    value
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	value:string                 = '';
	/**
	 * @property    value-second
	 * @type        string
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	valueSecond:string           = '';
	/**
	 * @property    checked
	 * @type        boolean
	 */
	@bindable({defaultBindingMode: bindingMode.twoWay})
	checked:boolean              = false;
	/**
	 * @property    disabled
	 * @type        boolean
	 */
	@bindable() disabled:boolean = false;
	/**
	 * @property    readonly
	 * @type        boolean
	 */
	@bindable() readonly:boolean = false;

	/**
	 * @property    prefix-icon
	 * @type        string
	 */
	@bindable() prefixIcon:string;
	/**
	 * @property    prefix-text
	 * @type        string
	 */
	@bindable() prefixText:string;

	/**
	 * @property    suffix-icon
	 * @type        string
	 */
	@bindable() suffixIcon:string;
	/**
	 * @property    suffix-text
	 * @type        string
	 */
	@bindable() suffixText:string;

	/**
	 * @property    center-icon
	 * @type        string
	 */
	@bindable() centerIcon:string;
	/**
	 * @property    center-text
	 * @type        string
	 */
	@bindable() centerText:string;

	/**
	 * @property    button-icon
	 * @type        string
	 */
	@bindable() buttonIcon:string;
	/**
	 * @property    button-text
	 * @type        string
	 */
	@bindable() buttonText:string;

	/**
	 * @property    help-text
	 * @type        string
	 */
	@bindable() helpText:string;

	/**
	 * @property    placeholder
	 * @type        string
	 */
	@bindable() placeholder:string       = '';
	/**
	 * @property    placeholder-second
	 * @type        string
	 */
	@bindable() placeholderSecond:string = '';
}