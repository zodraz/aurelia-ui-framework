/**
 *    UI Component: Tree Node
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, bindable} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";
import {UITreeModel, UITreeOptionsModel} from "../utils/ui-tree-models";

export {SortValueConverter} from "../utils/ui-converters";

@autoinject()
export class TreeNode {
	@bindable node:UITreeModel;
	@bindable options:UITreeOptionsModel;

	constructor(public eventAggregator:EventAggregator) {
	}

	private itemSelect() {
		if (this.node.root) return;

		if (this.options.showCheckbox) {
			if (this.node.level >= this.options.checkboxLevel)
				this.node.ischecked = !this.node.checked;
		}
		else if (this.node.level >= this.options.selectionLevel) {
			this.eventAggregator.publish('tree-select', this.node);
		}
	}

}