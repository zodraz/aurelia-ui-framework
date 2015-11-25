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
	changeHandler: 'valueChanged',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})

@autoinject()
@containerless()
@customElement('ui-option-group')
export class UIOptionGroup {
	private optionGroup;
	private value:string = '';

	@bindable id:string    = '';
	@bindable label:string = '';

	constructor(public element:Element) {
	}

	attached() {
		$(this.optionGroup).data('UIOptionGroup', this);
		setTimeout(()=> {
			$(this.optionGroup).find(`.ui-radio .ui-option-input[value="${this.value}"]`).prop('checked', true);
		}, 200);
	}

	private valueChanged(newValue) {
		$(this.optionGroup).find(`.ui-radio .ui-option-input[value="${newValue}"]`).prop('checked', true);
	}

	private checkChanged($event) {
		this.value = $event.data;
	}
}