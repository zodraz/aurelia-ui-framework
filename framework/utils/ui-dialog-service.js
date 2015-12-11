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
define(["require", "exports", "aurelia-framework", "aurelia-templating", "aurelia-dependency-injection", "aurelia-templating", "aurelia-metadata"], function (require, exports, aurelia_framework_1, aurelia_templating_1, aurelia_dependency_injection_1, aurelia_templating_2, aurelia_metadata_1) {
    var UIDialogService = (function () {
        function UIDialogService(container, compositionEngine) {
            var _this = this;
            this.container = container;
            this.compositionEngine = compositionEngine;
            this._isDragging = false;
            this._startX = 0;
            this._startY = 0;
            if (!this.dialogContainer) {
                $('body').append('<div class="ui-dialog-container"></div>');
                this.dialogContainer = $('body .ui-dialog-container').get(0);
                $(this.dialogContainer)
                    .on('close', function (e) { return _this.closeDialog(e.originalEvent); })
                    .on('collapse', function (e) { return _this.collapse(e.originalEvent); })
                    .on('mousedown', function (e) { return _this.moveStart(e.originalEvent); })
                    .on('mousemove', function (e) { return _this.move(e.originalEvent); })
                    .on('mouseup', function (e) { return _this.moveEnd(e.originalEvent); });
            }
        }
        UIDialogService.prototype._invokeLifecycle = function (instance, name, model) {
            if (typeof instance[name] === 'function') {
                var result = instance[name](model);
                if (result instanceof Promise) {
                    return result;
                }
                if (result !== null && result !== undefined) {
                    return Promise.resolve(result);
                }
                return Promise.resolve(true);
            }
            return Promise.resolve(true);
        };
        UIDialogService.prototype._getViewModel = function (instruction) {
            if (typeof instruction.viewModel === 'function') {
                instruction.viewModel = aurelia_metadata_1.Origin.get(instruction.viewModel).moduleId;
            }
            if (typeof instruction.viewModel === 'string') {
                return this.compositionEngine.ensureViewModel(instruction);
            }
            return Promise.resolve(instruction);
        };
        UIDialogService.prototype.show = function (vm, model) {
            var _this = this;
            var childContainer = this.container.createChild();
            var instruction = {
                viewModel: vm,
                container: this.container,
                childContainer: childContainer,
                model: model ? model : {}
            };
            return this._getViewModel(instruction)
                .then(function (returnedInstruction) {
                var viewModel = returnedInstruction.viewModel;
                return _this._invokeLifecycle(viewModel, 'canActivate', model).then(function (canActivate) {
                    if (canActivate) {
                        return _this.compositionEngine.createController(returnedInstruction).then(function (controller) {
                            controller.automate();
                            var slot = new aurelia_templating_2.ViewSlot(_this.dialogContainer, true);
                            slot.add(controller.view);
                            setTimeout(function () {
                                slot.attached();
                            }, 150);
                        });
                    }
                });
            });
        };
        UIDialogService.prototype.closeDialog = function (e) {
            $(e.target).closest('ui-dialog').remove();
        };
        UIDialogService.prototype.collapse = function (e) {
            $(e.target).closest('.ui-dialog').toggleClass('ui-collapse');
        };
        UIDialogService.prototype.moveStart = function ($event) {
            if ($($event.target).closest('.ui-header').length == 0)
                return;
            if ($($event.target).closest('button').length !== 0)
                return;
            this._startX = $event.x;
            this._startY = $event.y;
            this._isDragging = true;
            this._dialog = $($event.target).closest('.ui-dialog');
            this._dialog.addClass('ui-dragging');
            $(this.dialogContainer).addClass('ui-dragging');
        };
        UIDialogService.prototype.moveEnd = function ($event) {
            if (!this._isDragging)
                return;
            $(this.dialogContainer).removeClass('ui-dragging');
            this._dialog.removeClass('ui-dragging');
            this._isDragging = false;
            this._dialog = null;
        };
        UIDialogService.prototype.move = function ($event) {
            if (!this._isDragging)
                return;
            var x = $event.x - this._startX;
            var y = $event.y - this._startY;
            var p = this._dialog.offset();
            var w = this._dialog.outerWidth();
            var h = this._dialog.outerHeight();
            var pw = $(this.dialogContainer).outerWidth();
            var ph = $(this.dialogContainer).outerHeight();
            if (p.left + x < 0)
                x = 0;
            if (p.top + y < 0)
                y = 0;
            if (p.left + x + w > pw)
                x = 0;
            if (p.top + y + h > ph)
                y = 0;
            this._dialog.offset({ left: p.left + x, top: p.top + y });
            this._startX = x !== 0 ? $event.x : this._startX;
            this._startY = y !== 0 ? $event.y : this._startY;
        };
        UIDialogService = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_dependency_injection_1.Container, aurelia_templating_1.CompositionEngine])
        ], UIDialogService);
        return UIDialogService;
    })();
    exports.UIDialogService = UIDialogService;
});
