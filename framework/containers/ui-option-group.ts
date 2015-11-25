/**
 *    UI Container: Option Group
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";

/**
 * @bindable value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	changeHandler: '_valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})

@autoinject()
@containerless()
@customElement('ui-option-group')
export class UIOptionGroup {
	private _optionGroup;

	@bindable id:string    = '';
	@bindable label:string = '';
	private value:string = '';

	constructor(public element:Element) {
	}

	attached() {
		$(this._optionGroup).data('UIOptionGroup', this);
		setTimeout(()=> {
			$(this._optionGroup).find(`.ui-radio .ui-option-input[value="${this.value}"]`).prop('checked', true);
		}, 200);
	}

	private _valueChanged(newValue) {
		$(this._optionGroup).find(`.ui-radio .ui-option-input[value="${newValue}"]`).prop('checked', true);
	}

	private _checkChanged($event) {
		this.value = $event.data;
	}
}