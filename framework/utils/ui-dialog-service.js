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
define(["require", "exports", "aurelia-framework", "aurelia-templating", "aurelia-dependency-injection", "aurelia-templating", "aurelia-metadata", "./ui-utils"], function (require, exports, aurelia_framework_1, aurelia_templating_1, aurelia_dependency_injection_1, aurelia_templating_2, aurelia_metadata_1, ui_utils_1) {
    var UIDialogService = (function () {
        function UIDialogService(container, compositionEngine) {
            var _this = this;
            this.container = container;
            this.compositionEngine = compositionEngine;
            this._windows = [];
            this._isDragging = false;
            this._isResizing = false;
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
            if (!this._taskbar) {
                this._taskbar = $('body .ui-app-taskbar');
                this._taskbar.click(function (e) { return _this.switchActive(e.originalEvent.target.window); });
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
                            if (_this._active) {
                                _this._active.active = false;
                            }
                            _this._active = $(controller.view).children().get(0).au.controller.viewModel;
                            _this._windows.push(_this._active);
                            setTimeout(function () {
                                slot.attached();
                            }, 200);
                        });
                    }
                });
            });
        };
        UIDialogService.prototype.addTaskButton = function (btn) {
            this._taskbar.append(btn);
        };
        UIDialogService.prototype.closeDialog = function (e) {
            var _this = this;
            var dialog = $(e.target).closest('ui-dialog').get(0).au.controller;
            this._invokeLifecycle(dialog.bindingContext, 'canDeactivate', null).then(function (canDeactivate) {
                if (canDeactivate) {
                    ui_utils_1._.remove(_this._windows, 'id', dialog.viewModel.id);
                    dialog.viewModel.remove();
                    _this._invokeLifecycle(dialog.bindingContext, 'detached', null);
                    if (_this._windows.length > 0) {
                        (_this._active = ui_utils_1._.last(_this._windows)).active = true;
                    }
                    _this._invokeLifecycle(dialog.bindingContext, 'deactivate', null);
                }
            });
        };
        UIDialogService.prototype.switchActive = function (d) {
            if (this._active) {
                if (d.id === this._active.id)
                    return;
                this._active.active = false;
            }
            if (d) {
                (this._active = d).minimized = false;
                (this._active = d).active = true;
            }
        };
        UIDialogService.prototype.collapse = function (e) {
            $(e.target).closest('ui-dialog').get(0).au.controller.viewModel.minimized = true;
            if (this._windows.length > 0) {
                this._active = null;
                var a = ui_utils_1._.findLast(this._windows, 'minimized', false);
                if (a) {
                    a.active = true;
                    this._active = a;
                }
            }
        };
        UIDialogService.prototype.moveStart = function ($event) {
            this._dialog = $($event.target).closest('ui-dialog').get(0).au.controller.viewModel;
            if (!$($event.target).hasClass('ui-resizer')) {
                this.switchActive(this._dialog);
            }
            if ($($event.target).closest('button').length !== 0)
                return;
            if ($event.button != 0)
                return;
            this._startX = $event.x;
            this._startY = $event.y;
            this._isDragging = true;
            this._isResizing = $($event.target).hasClass('ui-resizer');
            if (this._isResizing && !this._dialog.resize) {
                this._isDragging = false;
                this._isResizing = false;
                return;
            }
            else if (!this._dialog.drag) {
                this._isDragging = false;
                this._isResizing = false;
                return;
            }
            $(this._dialog._dialog).addClass('ui-dragging');
            $(this.dialogContainer).addClass('ui-dragging');
        };
        UIDialogService.prototype.moveEnd = function ($event) {
            if (!this._isDragging)
                return;
            $(this.dialogContainer).removeClass('ui-dragging');
            $(this._dialog._dialog).removeClass('ui-dragging');
            this._isDragging = false;
            this._dialog = null;
        };
        UIDialogService.prototype.move = function ($event) {
            if (!this._isDragging)
                return;
            var x = $event.x - this._startX;
            var y = $event.y - this._startY;
            if (!this._isResizing) {
                var p = $(this._dialog._dialog).offset();
                var w = $(this._dialog._dialog).outerWidth();
                var h = $(this._dialog._dialog).outerHeight();
                var pw = $(this.dialogContainer).outerWidth();
                var ph = $(this.dialogContainer).outerHeight();
                if (p.left + x < 0) {
                    x = 0;
                    p.left = 0;
                }
                if (p.top + y < 0) {
                    y = 0;
                    p.top = 0;
                }
                if (p.left + x + w > pw) {
                    x = 0;
                    p.left = pw - w;
                }
                if (p.top + y + h + 36 > ph) {
                    y = 0;
                    p.top = ph - h - 36;
                }
                this._dialog._current.top = p.top + y;
                this._dialog._current.left = p.left + x;
            }
            else {
                this._dialog._current.width += x;
                this._dialog._current.height += y;
            }
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
