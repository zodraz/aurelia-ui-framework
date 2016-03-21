/**
 *    UI Core    Toolbar
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@customElement("ui-toolbar")
export class UIToolbar {
	constructor(public element:Element) {
	}
}