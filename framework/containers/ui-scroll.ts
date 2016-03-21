/**
 *    UI Container: ScrollView
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, bindable, customElement, containerless, inlineView} from "aurelia-framework";

@autoinject()
@inlineView('<template class="ui-block ui-scroll ${class}"><content></content></template>')
@customElement('ui-scroll')
export class UIScroll {
	@bindable class:string;
}
