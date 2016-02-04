/**
 *    UI Container: ScrollView
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, bindable, customElement, containerless, inlineView} from "aurelia-framework";

@autoinject()
@containerless()
@inlineView('<template><div class="ui-scroll ${class}"><content></content></div></template>')
@customElement('ui-scroll')
export class UIScroll {
	@bindable class:string;
}
