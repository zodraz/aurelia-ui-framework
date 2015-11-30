define(["require", "exports", "../../framework/utils/ui-utils"], function (require, exports, ui_utils_1) {
    var HomeTree = (function () {
        function HomeTree() {
            this.options = {
                showCheckbox: true
            };
            var ct = [];
            ui_utils_1._.forEach(ui_utils_1._.groupBy(window.countries, 'continent'), function (v, k) {
                var c = {
                    id: ui_utils_1._.camelCase(k),
                    name: k,
                    expanded: k == 'Asia',
                    children: []
                };
                ui_utils_1._.forEach(v, function (o) {
                    c.children.push({
                        id: o.iso3,
                        name: o.name,
                        leaf: true,
                        checked: (o.iso3 == 'UAE' || o.iso3 == 'IND'),
                        iconGlyph: "ui-flag " + o.iso3
                    });
                });
                ct.push(c);
            });
            console.log(ct);
            this.countries = ct;
        }
        HomeTree.prototype.attached = function () {
            $(this._tree).data('UITree').select('');
        };
        return HomeTree;
    })();
    exports.HomeTree = HomeTree;
});
