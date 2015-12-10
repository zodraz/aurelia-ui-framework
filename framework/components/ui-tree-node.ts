/**
 *    UI Component: Tree Node
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, bindable} from "aurelia-framework";
import {UITreeModel, UITreeOptionsModel} from "../utils/ui-tree-models";
import {UIEvent} from "../utils/ui-event";

@autoinject()
export class TreeNode {
	@bindable node:UITreeModel;
	@bindable options:UITreeOptionsModel;

	constructor() {
	}

	private itemSelect() {
		if (this.node.root) return;

		if (this.options.showCheckbox) {
			if (this.node.level >= this.options.checkboxLevel) {
				this.node.ischecked = !this.node.checked;
				UIEvent.broadcast('tree-checked', this.node);
			}
		}
		else if (this.node.level >= this.options.selectionLevel) {
			UIEvent.broadcast('tree-select', this.node);
		}
	}

}