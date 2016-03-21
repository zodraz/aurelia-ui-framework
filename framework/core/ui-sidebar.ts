/**
 *    UI Core    Sidebars
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {customElement, containerless, bindable} from "aurelia-framework";

@customElement("ui-sidebar")
export class UISidebar {
	@bindable width:string = '220px';

	private $parent:any;

	bind(context) {
		this.$parent = context;
	}
}