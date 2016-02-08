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
define(["require", "exports", "aurelia-framework", "../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_event_1) {
    var UIPager = (function () {
        function UIPager(element) {
            this.element = element;
            this.currentPage = 1;
            this.totalPages = 1;
        }
        UIPager.prototype.changePage = function ($event) {
            var e = $($event.target).closest('.ui-button');
            if (e) {
                var id = e.attr('id');
                if (id === 'first')
                    this.currentPage = 1;
                else if (id === 'last')
                    this.currentPage = this.totalPages;
                else if (id === 'prev' && this.currentPage > 1)
                    this.currentPage--;
                else if (id === 'next' && this.currentPage != this.totalPages)
                    this.currentPage++;
                if (this.currentPage < 1)
                    this.currentPage = 1;
                else if (this.currentPage > this.totalPages)
                    this.currentPage = this.totalPages;
                ui_event_1.UIEvent.fireEvent('pagechanged', this._pager, this.currentPage);
            }
        };
        UIPager.prototype.pageChanged = function () {
            if (this.currentPage < 1)
                this.currentPage = 1;
            else if (this.currentPage > this.totalPages)
                this.currentPage = this.totalPages;
            ui_event_1.UIEvent.fireEvent('pagechanged', this._pager, this.currentPage);
        };
        UIPager = __decorate([
            aurelia_framework_1.bindable({
                name: 'currentPage',
                attribute: 'current',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: 1
            }),
            aurelia_framework_1.bindable({
                name: 'totalPages',
                attribute: 'total',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: 1
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-pager'), 
            __metadata('design:paramtypes', [Element])
        ], UIPager);
        return UIPager;
    })();
    exports.UIPager = UIPager;
});
