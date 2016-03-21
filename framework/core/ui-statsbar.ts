/**
 *    UI Core    StatsBar
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable} from "aurelia-framework";

@autoinject()
@customElement("ui-statsbar")
export class UIStatsbar {
	constructor(public element:Element) {
	}
}