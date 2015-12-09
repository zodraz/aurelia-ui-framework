/**
 *    UI Container: Option Group
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";

@autoinject()
@customElement('ui-panel')
export class UIPanel {
	private _panel;
	private collapse:boolean = false;

	@bindable class:string = '';

	constructor(public element:Element) {

	}

	close() {
		$(this._panel).remove();
	}
}