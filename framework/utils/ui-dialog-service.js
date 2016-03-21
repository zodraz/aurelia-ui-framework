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
            this.__windows = [];
            this.__isDragging = false;
            this.__isResizing = false;
            this.__startX = 0;
            this.__startY = 0;
            if (!this.dialogContainer) {
                $('.ui-app')
                    .append('<div class="ui-dialog-container"></div>');
                this.dialogContainer = $('body .ui-dialog-container')
                    .get(0);
                $(this.dialogContainer)
                    .on('close', function (e) { return _this.closeDialog(e.originalEvent); })
                    .on('collapse', function (e) { return _this.collapse(e.originalEvent); })
                    .on('mousedown', function (e) { return _this.moveStart(e.originalEvent); })
                    .on('mousemove', function (e) { return _this.move(e.originalEvent); })
                    .on('mouseup', function (e) { return _this.moveEnd(e.originalEvent); });
            }
            if (!this.__taskbar) {
                this.__taskbar = $('body .ui-app-taskbar');
                this.__taskbar.on('click', 'button', function (e) { return _this.switchActive(e.originalEvent.target.window); });
            }
        }
        UIDialogService.prototype.__invokeLifecycle = function (instance, name, model) {
            if (instance && typeof instance[name] === 'function') {
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
        UIDialogService.prototype.__getViewModel = function (instruction) {
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
            return this.__getViewModel(instruction)
                .then(function (returnedInstruction) {
                var viewModel = returnedInstruction.viewModel;
                return _this.__invokeLifecycle(viewModel, 'canActivate', model)
                    .then(function (canActivate) {
                    if (canActivate) {
                        return _this.compositionEngine.createController(returnedInstruction)
                            .then(function (controller) {
                            controller.automate();
                            var slot = new aurelia_templating_2.ViewSlot(_this.dialogContainer, true);
                            slot.add(controller.view);
                            if (_this.__active) {
                                _this.__active.active = false;
                            }
                            _this.__active = $(controller.view)
                                .children()
                                .get(0).au.controller.viewModel;
                            _this.__windows.push(_this.__active);
                            setTimeout(function () {
                                slot.attached();
                            }, 200);
                        });
                    }
                });
            });
        };
        UIDialogService.prototype.addTaskButton = function (btn) {
            this.__taskbar.append(btn);
        };
        UIDialogService.prototype.closeDialog = function (e) {
            var _this = this;
            var dialog = $(e.target)
                .closest('ui-dialog')
                .get(0).au.controller;
            this.__invokeLifecycle(dialog.contentView.bindingContext, 'canDeactivate', null)
                .then(function (canDeactivate) {
                if (canDeactivate) {
                    ui_utils_1._.remove(_this.__windows, 'id', dialog.viewModel.id);
                    dialog.viewModel.remove();
                    _this.__invokeLifecycle(dialog.contentView.bindingContext, 'detached', null);
                    if (_this.__active) {
                        _this.__active.active = false;
                    }
                    _this.__getNextActive();
                    _this.__invokeLifecycle(dialog.contentView.bindingContext, 'deactivate', null);
                }
            });
        };
        UIDialogService.prototype.switchActive = function (d, ignore) {
            if (ignore === void 0) { ignore = false; }
            if (!ignore && this.__active && this.__active.id == d.id) {
                d.minimized = true;
                d.active = false;
                this.__getNextActive();
                return;
            }
            if (this.__active) {
                if (d.id === this.__active.id) {
                    return;
                }
                this.__active.active = false;
            }
            if (d && !d.modal) {
                (this.__active = d).minimized = false;
                (this.__active = d).active = true;
            }
        };
        UIDialogService.prototype.collapse = function (e) {
            $(e.target)
                .closest('ui-dialog')
                .get(0).au.controller.viewModel.minimized = true;
            if (this.__active) {
                this.__active.active = false;
            }
            this.__getNextActive();
        };
        UIDialogService.prototype.__getNextActive = function () {
            if (this.__windows.length > 0) {
                this.__active = null;
                var a = ui_utils_1._.findLast(this.__windows, function (e) { return e.minimized === false; });
                if (a) {
                    a.active = true;
                    this.__active = a;
                }
            }
        };
        UIDialogService.prototype.moveStart = function ($event) {
            this.__dialog = $($event.target)
                .closest('ui-dialog')
                .get(0).au.controller.viewModel;
            if ($($event.target)
                .closest('.ui-lang-select').length == 0 && !$($event.target)
                .closest('.ui-button')
                .hasClass('ui-dropdown')) {
                $('.ui-dropdown')
                    .removeClass('ui-dropdown');
            }
            if ($($event.target)
                .closest('button').length !== 0) {
                return;
            }
            if ($event.button != 0) {
                return;
            }
            if (!$($event.target)
                .hasClass('ui-resizer') && $($event.target)
                .closest('.ui-header').length == 0) {
                return this.switchActive(this.__dialog, true);
            }
            this.__startX = ($event.x || $event.clientX);
            this.__startY = ($event.y || $event.clientY);
            this.__isDragging = true;
            this.__isResizing = $($event.target)
                .hasClass('ui-resizer');
            if (this.__isResizing && !this.__dialog.resize) {
                this.__isDragging = false;
                this.__isResizing = false;
                return;
            }
            else if (!this.__dialog.drag) {
                this.__isDragging = false;
                this.__isResizing = false;
                return;
            }
            $(this.__dialog.__dialog)
                .addClass('ui-dragging');
            $(this.dialogContainer)
                .addClass('ui-dragging');
        };
        UIDialogService.prototype.moveEnd = function ($event) {
            if (!this.__isDragging) {
                return;
            }
            $(this.dialogContainer)
                .removeClass('ui-dragging');
            $(this.__dialog.__dialog)
                .removeClass('ui-dragging');
            this.__isDragging = false;
            this.__dialog = null;
        };
        UIDialogService.prototype.move = function ($event) {
            if (!this.__isDragging) {
                return;
            }
            var x = ($event.x || $event.clientX) - this.__startX;
            var y = ($event.y || $event.clientY) - this.__startY;
            if (!this.__isResizing) {
                var p = $(this.__dialog.__dialog)
                    .offset();
                var w = $(this.__dialog.__dialog)
                    .outerWidth();
                var h = $(this.__dialog.__dialog)
                    .outerHeight();
                var pw = $(this.dialogContainer)
                    .outerWidth();
                var ph = $(this.dialogContainer)
                    .outerHeight();
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
                this.__dialog._current.top = p.top + y;
                this.__dialog._current.left = p.left + x;
            }
            else {
                this.__dialog._current.width += x;
                this.__dialog._current.height += y;
            }
            this.__startX = x !== 0 ? ($event.x || $event.clientX) : this.__startX;
            this.__startY = y !== 0 ? ($event.y || $event.clientY) : this.__startY;
        };
        UIDialogService = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_dependency_injection_1.Container, aurelia_templating_1.CompositionEngine])
        ], UIDialogService);
        return UIDialogService;
    })();
    exports.UIDialogService = UIDialogService;
});
