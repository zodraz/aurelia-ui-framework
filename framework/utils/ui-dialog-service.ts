import {autoinject} from "aurelia-framework";
import {CompositionEngine} from "aurelia-templating";
import {Container} from "aurelia-dependency-injection";
import {ViewSlot, CompositionContext} from "aurelia-templating";
import {Origin} from "aurelia-metadata";
import {_} from "./ui-utils";
import {UIDialog} from "../containers/ui-dialog";

@autoinject()
export class UIDialogService {

	public dialogContainer;
	private __taskbar;

	private __active:any;
	private __windows:Array<any> = [];

	constructor(
		private container:Container,
		private compositionEngine:CompositionEngine) {
		if (!this.dialogContainer) {
			$('.ui-app')
				.append('<div class="ui-dialog-container"></div>');
			this.dialogContainer = $('body .ui-dialog-container')
				.get(0);

			$(this.dialogContainer)
				.on('close', (e)=>this.closeDialog(e.originalEvent))
				.on('collapse', (e)=>this.collapse(e.originalEvent))
				.on('mousedown', (e)=>this.moveStart(e.originalEvent))
				.on('mousemove', (e)=>this.move(e.originalEvent))
				.on('mouseup', (e)=>this.moveEnd(e.originalEvent));
		}
		if (!this.__taskbar) {
			this.__taskbar = $('body .ui-app-taskbar');
			this.__taskbar.on('click', 'button', (e)=>this.switchActive((<any>e.originalEvent.target).window));
		}
	}

	private __invokeLifecycle(
		instance,
		name,
		model) {
		if (instance && typeof instance[name] === 'function') {
			let result = instance[name](model);

			if (result instanceof Promise) {
				return result;
			}

			if (result !== null && result !== undefined) {
				return Promise.resolve(result);
			}

			return Promise.resolve(true);
		}

		return Promise.resolve(true);
	}

	private __getViewModel(instruction) {
		if (typeof instruction.viewModel === 'function') {
			instruction.viewModel = Origin.get(instruction.viewModel).moduleId;
		}

		if (typeof instruction.viewModel === 'string') {
			return this.compositionEngine.ensureViewModel(instruction);
		}

		return Promise.resolve(instruction);
	}

	show(
		vm:any,
		model?:any):Promise<any> {
		let childContainer = this.container.createChild();


		let instruction = {
			viewModel: vm,
			container: this.container,
			childContainer: childContainer,
			model: model ? model : {}
		};

		return this.__getViewModel(instruction)
				   .then(
					   returnedInstruction => {
						   let viewModel:any = <any>returnedInstruction.viewModel;

						   return this.__invokeLifecycle(viewModel, 'canActivate', model)
									  .then(
										  canActivate => {
											  if (canActivate) {
												  return this.compositionEngine.createController(returnedInstruction)
															 .then(
																 controller => {
																	 controller.automate();

																	 let slot = new ViewSlot(this.dialogContainer, true);
																	 slot.add(controller.view);

																	 if (this.__active) {
																		 this.__active.active = false;
																	 }
																	 this.__active = $(controller.view)
																		 .children()
																		 .get(0).au.controller.viewModel;
																	 this.__windows.push(this.__active);

																	 setTimeout(
																		 () => {
																			 slot.attached();
																		 }, 200);
																 });
											  }
										  });
					   });
	}

	addTaskButton(btn) {
		this.__taskbar.append(btn);
	}

	closeDialog(e) {
		let dialog = $(e.target)
			.closest('ui-dialog')
			.get(0).au.controller;
		this.__invokeLifecycle(dialog.contentView.bindingContext, 'canDeactivate', null)
			.then(
				canDeactivate => {
					if (canDeactivate) {
						_.remove(this.__windows, 'id', dialog.viewModel.id);
						dialog.viewModel.remove();
						this.__invokeLifecycle(dialog.contentView.bindingContext, 'detached', null);

						if (this.__active) {
							this.__active.active = false;
						}
						this.__getNextActive();
						this.__invokeLifecycle(dialog.contentView.bindingContext, 'deactivate', null);
					}
				});
	}

	switchActive(
		d,
		ignore = false) {
		if (!ignore && this.__active && this.__active.id == d.id) {
			d.minimized = true;
			d.active    = false;
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
	}

	collapse(e) {
		$(e.target)
			.closest('ui-dialog')
			.get(0).au.controller.viewModel.minimized = true;
		if (this.__active) {
			this.__active.active = false;
		}
		this.__getNextActive();
	}

	__getNextActive() {
		if (this.__windows.length > 0) {
			this.__active = null;
			let a         = _.findLast(
				this.__windows,
				e=>e.minimized === false);
			if (a) {
				a.active      = true;
				this.__active = a;
			}
		}
	}


	/**
	 * dialog move
	 */
	private __isDragging = false;
	private __isResizing = false;
	private __startX     = 0;
	private __startY     = 0;
	private __dialog;

	private moveStart($event) {
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

		this.__startX     = ($event.x || $event.clientX);
		this.__startY     = ($event.y || $event.clientY);
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
	}

	private moveEnd($event) {
		if (!this.__isDragging) {
			return;
		}
		$(this.dialogContainer)
			.removeClass('ui-dragging');
		$(this.__dialog.__dialog)
			.removeClass('ui-dragging');
		this.__isDragging = false;
		this.__dialog     = null;
	}

	private move($event) {
		if (!this.__isDragging) {
			return;
		}

		let x = ($event.x || $event.clientX) - this.__startX;
		let y = ($event.y || $event.clientY) - this.__startY;

		if (!this.__isResizing) {
			let p  = $(this.__dialog.__dialog)
				.offset();
			let w  = $(this.__dialog.__dialog)
				.outerWidth();
			let h  = $(this.__dialog.__dialog)
				.outerHeight();
			let pw = $(this.dialogContainer)
				.outerWidth();
			let ph = $(this.dialogContainer)
				.outerHeight();

			if (p.left + x < 0) {
				x      = 0;
				p.left = 0;
			}
			if (p.top + y < 0) {
				y     = 0;
				p.top = 0;
			}
			if (p.left + x + w > pw) {
				x      = 0;
				p.left = pw - w;
			}
			if (p.top + y + h + 36 > ph) {
				y     = 0;
				p.top = ph - h - 36;
			}
			this.__dialog._current.top  = p.top + y;
			this.__dialog._current.left = p.left + x;
		}
		else {
			this.__dialog._current.width += x;
			this.__dialog._current.height += y;
		}

		this.__startX = x !== 0 ? ($event.x || $event.clientX) : this.__startX;
		this.__startY = y !== 0 ? ($event.y || $event.clientY) : this.__startY;
	}
}