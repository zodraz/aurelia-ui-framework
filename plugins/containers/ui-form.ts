/**
 *    UI Container: Form
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement('ui-form')
export class UIForm {
	@bindable class:string = '';

	constructor(el:Element) {
	}
}