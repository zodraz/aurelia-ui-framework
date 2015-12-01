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
define(["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../utils/ui-tree-models", "../utils/ui-utils", "../utils/ui-converters"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, ui_tree_models_1, ui_utils_1, ui_converters_1) {
    exports.SortValueConverter = ui_converters_1.SortValueConverter;
    var UITree = (function () {
        function UITree(element, eventAggregator, observer) {
            this.element = element;
            this.searchText = '';
            this.selectedNode = {};
            var self = this;
            eventAggregator.subscribe('tree-select', function (v) { return self._itemSelect(v); });
            observer.getObserver(this, 'searchText')
                .subscribe(function (v) { return self._searchTextChanged(v); });
            $(this.element).data('UITree', this);
        }
        UITree.prototype.attached = function () {
            this.options = ui_utils_1._.merge({
                showRoot: false,
                rootLabel: 'Root',
                maxLevels: 99,
                selectionLevel: -1,
                showCheckbox: false,
                checkboxLevel: -1
            }, this.options);
            this.root = new ui_tree_models_1.UITreeModel(-1, this.options.maxLevels, this.options.checkboxLevel, {
                id: '',
                name: this.options.rootLabel,
                children: this.model
            }, null);
        };
        Object.defineProperty(UITree.prototype, "rootNodes", {
            get: function () {
                return this.options.showRoot ? [this.root] : this.root.children;
            },
            enumerable: true,
            configurable: true
        });
        UITree.prototype._itemSelect = function (node) {
            if (this.selectedNode)
                this.selectedNode.active = false;
            (this.selectedNode = node).active = true;
            this.value = this.selectedNode.id;
        };
        UITree.prototype._modelChanged = function (newValue) {
            this.root = new ui_tree_models_1.UITreeModel(-1, this.options.maxLevels, this.options.checkboxLevel, {
                id: '',
                name: this.options.rootLabel,
                children: newValue
            }, null);
        };
        UITree.prototype._valueChanged = function (newValue) {
        };
        UITree.prototype._searchTextChanged = function (newValue) {
            this._filter(this.root.children, newValue);
        };
        UITree.prototype._filter = function (obj, value, parentVisible) {
            if (parentVisible === void 0) { parentVisible = false; }
            var self = this, ret = false, rx = new RegExp(value, 'gi');
            ui_utils_1._.forEach(obj, function (n) {
                n.name = n.name.replace(/<b>/gi, '').replace(/<\/b>/gi, '');
                n.expanded = !ui_utils_1._.isEmpty(value) && n.level <= 2 && parentVisible === false;
                if (ui_utils_1._.isEmpty(value) && self.selectedNode.id == n.id && self.selectedNode.level == n.level) {
                    var p = n.parent;
                    while (p) {
                        p.expanded = true;
                        p = p.parent;
                    }
                }
                var match = rx.test(n.name);
                if (!ui_utils_1._.isEmpty(value) && match) {
                    n.parent.expanded = true;
                    n.name = n.name.replace(rx, function (b) {
                        return "<b>" + b + "</b>";
                    });
                }
                n.isvisible = n.children.length > 0 ? self._filter(n.children, value, match || parentVisible) : (match || parentVisible);
                ret = ret || n.isvisible;
            });
            return ret;
        };
        UITree.prototype._find = function (obj, id, level, field, value) {
            var _this = this;
            if (value === void 0) { value = true; }
            var self = this;
            return ui_utils_1._.find(obj, function (n) {
                var found = n.id == id && n.level == level;
                if (!found && ui_utils_1._.isArray(n.children)) {
                    found = !ui_utils_1._.isEmpty(self._find(n.children, id, level, field, value));
                    n.expanded = found;
                }
                else if (found) {
                    if (field == 'active')
                        (self.selectedNode = n).active = !self.options.showCheckbox;
                    if (field == 'expanded')
                        n.expanded = value;
                    if (field == 'checked')
                        n.ischecked = value ? 1 : 0;
                    setTimeout(function () {
                        var x = $(_this.element).find('.active');
                        if (x.length > 0)
                            x.get(0).scrollIntoView();
                    }, 200);
                }
                return found;
            });
        };
        UITree.prototype.select = function (id, level) {
            this._find(this.root.children, id, level, 'active');
        };
        UITree.prototype.expand = function (id, level, expand) {
            this._find(this.root.children, id, level, 'expanded', expand);
        };
        UITree.prototype.check = function (id, level, check) {
            this._find(this.root.children, id, level, 'checked', check);
        };
        Object.defineProperty(UITree.prototype, "rootNodes",
            __decorate([
                aurelia_framework_1.computedFrom('root'), 
                __metadata('design:type', Object)
            ], UITree.prototype, "rootNodes", Object.getOwnPropertyDescriptor(UITree.prototype, "rootNodes")));
        UITree = __decorate([
            aurelia_framework_1.bindable({
                name: 'value',
                attribute: 'value',
                changeHandler: '_valueChanged',
                defaultValue: null,
                defaultBindingMode: aurelia_framework_1.bindingMode.oneWay
            }),
            aurelia_framework_1.bindable({
                name: 'model',
                attribute: 'data-model',
                changeHandler: '_modelChanged',
                defaultValue: [],
                defaultBindingMode: aurelia_framework_1.bindingMode.oneWay
            }),
            aurelia_framework_1.bindable({
                name: 'options',
                attribute: 'data-options',
                defaultValue: {},
                defaultBindingMode: aurelia_framework_1.bindingMode.oneWay
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-tree'), 
            __metadata('design:paramtypes', [Element, aurelia_event_aggregator_1.EventAggregator, aurelia_framework_1.ObserverLocator])
        ], UITree);
        return UITree;
    })();
    exports.UITree = UITree;
});
