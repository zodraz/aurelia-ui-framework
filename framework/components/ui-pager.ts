/**
 *    UI Component: Pager for Datagrid
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";

@bindable({
	name: 'currentPage',
	attribute: 'current',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: 1
})
@bindable({
	name: 'totalPages',
	attribute: 'total',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: 1
})

@autoinject()
@customElement('ui-pager')
export class UIPager {
	_pager;
	currentPage:number = 1;
	totalPages:number  = 1;

	constructor(public element:Element) {
	}

	changePage($event) {
		let e = $($event.target).closest('.ui-button');
		if (e) {
			let id = e.attr('id');
			if (id === 'first')
				this.currentPage = 1;
			else if (id === 'last')
				this.currentPage = this.totalPages;
			else if (id === 'prev' && this.currentPage > 1)
				this.currentPage--;
			else if (id === 'next' && this.currentPage != this.totalPages)
				this.currentPage++;

			if (this.currentPage < 1) this.currentPage = 1;
			else if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;

			UIEvent.fireEvent('pagechanged', this._pager, this.currentPage);
		}
	}

	pageChanged() {
		if (this.currentPage < 1) this.currentPage = 1;
		else if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
		UIEvent.fireEvent('pagechanged', this._pager, this.currentPage);
	}
}