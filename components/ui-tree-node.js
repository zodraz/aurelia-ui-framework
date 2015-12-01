var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../utils/ui-tree-models", "../utils/ui-converters"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, ui_tree_models_1, ui_converters_1) {
    exports.SortValueConverter = ui_converters_1.SortValueConverter;
    var TreeNode = (function () {
        function TreeNode(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        TreeNode.prototype.itemSelect = function () {
            if (this.node.root)
                return;
            if (this.options.showCheckbox) {
                if (this.node.level >= this.options.checkboxLevel)
                    this.node.ischecked = !this.node.checked;
            }
            else if (this.node.level >= this.options.selectionLevel) {
                this.eventAggregator.publish('tree-select', this.node);
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', ui_tree_models_1.UITreeModel)
        ], TreeNode.prototype, "node");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], TreeNode.prototype, "options");
        TreeNode = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], TreeNode);
        return TreeNode;
    })();
    exports.TreeNode = TreeNode;
});
