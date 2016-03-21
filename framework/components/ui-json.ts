import {autoinject, customElement, bindable, bindingMode, useShadowDOM} from "aurelia-framework";

/**
 * @bindable value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})

@autoinject()
@useShadowDOM()
@customElement('ui-json')
export class UIJsonEditor {

	constructor(public element:Element) {
	}

}