/**
 *    UI Container  Tabs
 *    @author       Adarsh Pastakia
 *    @company      HMC
 *    @copyright    2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, bindable, inlineView} from "aurelia-framework";
import {_} from "../utils/ui-utils";

@autoinject()
@customElement('ui-tab-panel')
export class UITabPanel {
	private __tabs;
	private __tabButtons;
	private tabs = [];

	@bindable
	activeTab = 0;

	constructor(public element:Element) {
	}

	bind() {
		_.forEach(this.element.querySelectorAll('ui-tab'),
				  t=>this.tabs.push(t));
	}

	attached() {
		this.activeTabChanged(this.activeTab);
	}

	activeTabChanged(newValue) {
		if (this.tabs[newValue]) {
			try {
				this.__tabButtons
					.querySelector('.ui-active')
					.classList
					.remove('ui-active');
				this.__tabs
					.querySelector('.ui-active')
					.classList
					.remove('ui-active');
			} catch (e) {
			}

			this.__tabButtons
				.querySelector(`[data-index="${newValue}"]`)
				.classList
				.add('ui-active');
			this.tabs[newValue]
				.classList
				.add('ui-active');
		}
	}
}

@autoinject()
@inlineView('<template class="ui-tab-content"><content></content></template>')
@customElement('ui-tab')
export class UITab {
	@bindable
	label:string = '';
	@bindable
	icon:string  = '';

	constructor(public element:Element) {
		if (this.element.hasAttribute('scroll')) this.element.classList.add('ui-scroll');
		if (this.element.hasAttribute('flex')) this.element.classList.add('ui-column-row');
	}
}
