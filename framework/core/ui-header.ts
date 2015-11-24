/**
 *    UI Core    Header
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@containerless()
@customElement("ui-header")
export class UIHeader {
	@bindable class:string = '';
}