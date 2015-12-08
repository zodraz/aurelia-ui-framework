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
define(["require", "exports", "aurelia-framework", "aurelia-router", "../utils/ui-event", "../utils/ui-app-state"], function (require, exports, aurelia_framework_1, aurelia_router_1, ui_event_1, ui_app_state_1) {
    var UIMenu = (function () {
        function UIMenu(element, appState) {
            this.element = element;
            this.appState = appState;
            this._classes = '';
            this._floating = false;
            this._floating = element.hasAttribute('dropdown');
        }
        UIMenu.prototype.bind = function () {
            if (this.router && this.router.isRoot)
                this._classes = 'ui-app-menu';
            if (this._floating !== false)
                this._classes += ' ui-floating ';
        };
        UIMenu.prototype._linkClicked = function ($event) {
            if ($($event.target).closest('a').data('disabled') === true) {
                $event.preventDefault();
                return false;
            }
            if (this.router)
                return true;
            $event.cancelBubble = true;
            var el = $($event.target).closest('a');
            if (el.length == 1) {
                ui_event_1.UIEvent.fireEvent('click', this.element, { linkId: el.data('id'), title: el.text() }, this._menu);
            }
            return true;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', aurelia_router_1.Router)
        ], UIMenu.prototype, "router");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIMenu.prototype, "title");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIMenu.prototype, "menu");
        UIMenu = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement("ui-menu"), 
            __metadata('design:paramtypes', [Element, ui_app_state_1.UIApplicationState])
        ], UIMenu);
        return UIMenu;
    })();
    exports.UIMenu = UIMenu;
});
