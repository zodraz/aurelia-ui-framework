define(["require", "exports", "./ui-utils"], function (require, exports, ui_utils_1) {
    var UITreeModel = (function () {
        function UITreeModel(level, maxLevels, checkLevel, model, parent) {
            var _this = this;
            this.children = [];
            this.parent = null;
            this.isvisible = true;
            this._checkLevel = 0;
            var me = this;
            this.id = model.id;
            this.name = model.name || model.text;
            this.level = level;
            this.iconGlyph = model.iconGlyph;
            this.root = level == -1;
            this.leaf = (model.children || []).length == 0 || level == maxLevels;
            this.active = model.active || false;
            this.expanded = model.expanded || false;
            this.checked = model.checked ? 1 : 0;
            this.parent = parent;
            this._checkLevel = checkLevel;
            if (level < maxLevels && (model.children || []).length > 0) {
                ui_utils_1._.each(model.children, function (m) {
                    _this.children.push(new UITreeModel(level + 1, maxLevels, checkLevel, m, _this));
                });
            }
            this.updatePartial();
        }
        Object.defineProperty(UITreeModel.prototype, "ischecked", {
            set: function (v) {
                this.checked = v = v ? 1 : 0;
                ui_utils_1._.forEach(this.children, function (c) {
                    c.updateChild(v);
                });
                if (this.parent && this.level > this._checkLevel)
                    this.parent.updatePartial();
            },
            enumerable: true,
            configurable: true
        });
        UITreeModel.prototype.updateChild = function (v) {
            this.checked = v;
            ui_utils_1._.forEach(this.children, function (c) {
                c.updateChild(v);
            });
        };
        UITreeModel.prototype.updatePartial = function () {
            if (this.children && this.children.length > 0) {
                var c = ui_utils_1._.countBy(this.children, 'checked');
                var v = 2;
                if (!c[1] && !c[2])
                    v = 0;
                if (!c[0] && !c[2])
                    v = 1;
                this.checked = v;
            }
            if (this.parent && this.level > this._checkLevel)
                this.parent.updatePartial();
        };
        Object.defineProperty(UITreeModel.prototype, "isleaf", {
            get: function () {
                return this.leaf && !this.iconGlyph;
            },
            enumerable: true,
            configurable: true
        });
        return UITreeModel;
    })();
    exports.UITreeModel = UITreeModel;
});
