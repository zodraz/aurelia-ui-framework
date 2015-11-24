/**
 *    UI Core    Sidebars
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {customElement, containerless, bindable} from "aurelia-framework";

@containerless()
@customElement("ui-sidebar")
export class UISidebar {
	@bindable class:string;

	private $parent:any;

	bind(context) {
		this.$parent = context;
	}
}