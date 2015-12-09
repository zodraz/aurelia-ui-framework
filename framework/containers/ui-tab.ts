/**
 *    UI Container: Tabs
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, useView} from "aurelia-framework";

@autoinject()
@useView('./ui-tab-panel.html')
@customElement('ui-tab-panel')
export class UITabPanel {
	private _tabs;
	private _tabButtons;
	private tabs = [];

	@bindable activeTab = 0;

	constructor(public element:Element) {
	}

	bind() {
		$(this._tabs).children().each((i, t)=> {
			this.tabs.push(t);
		});
	}

	attached() {

		this.activeTabChanged(this.activeTab);
	}

	activeTabChanged(newValue) {
		if (this.tabs[newValue]) {
			$(this._tabButtons).children().removeClass('ui-active');
			$(this._tabButtons).children(`[data-index="${newValue}"]`).addClass('ui-active');
			$(this._tabs).children().removeClass('ui-active');
			$(this.tabs[newValue]).addClass('ui-active');
		}
	}
}

@autoinject()
@customElement('ui-tab')
export class UITab {
	@bindable label:string     = '';
	@bindable iconGlyph:string = '';

	constructor(public element:Element) {

	}
}
