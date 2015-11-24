/**
 *    UI Core    Page
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 *    @description
 *    Page container that can contain page section, content body, toolbar, statsbar and also child router
 **/
import {customElement, containerless, bindable} from "aurelia-framework";

@containerless()
@customElement("ui-page")
export class UIPage {
	@bindable title:string;
}