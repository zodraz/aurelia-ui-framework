/**
 *    UI Core    Viewport
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 *    @description
 *    This plugin provides an application viewport with header, footer and side drawer menu
 **/

import {autoinject, customElement, bindable} from "aurelia-framework";

@autoinject()
@customElement('ui-viewport')
export class UIViewport {

	/**
	 * @property 	app-title
	 * @type		string
	 */
	@bindable() appTitle;
	/**
	 * @property 	app-subtitle
	 * @type 		string
	 */
	@bindable() appSubtitle;
	/**
	 * @property 	app-logo
	 * @type		string
	 * @value		relative path | url
	 */
	@bindable() appLogo;

	constructor(public element:Element) {
	}
}