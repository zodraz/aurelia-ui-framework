import {autoinject} from "aurelia-framework";
import {CompositionEngine} from "aurelia-templating";
import {Container} from "aurelia-dependency-injection";
import {ViewSlot, CompositionContext} from "aurelia-templating";
import {Origin} from "aurelia-metadata";

@autoinject()
export class UIDialogService {

	public dialogContainer;

	constructor(private container:Container,
				private compositionEngine:CompositionEngine) {
		if (!this.dialogContainer) {
			$('body').append('<div class="ui-dialog-container"></div>');
			this.dialogContainer = $('body .ui-dialog-container').get(0);

			$(this.dialogContainer)
				.on('close', (e)=>this.closeDialog(e.originalEvent))
				.on('collapse', (e)=>this.collapse(e.originalEvent))
				.on('mousedown', (e)=>this.moveStart(e.originalEvent))
				.on('mousemove', (e)=>this.move(e.originalEvent))
				.on('mouseup', (e)=>this.moveEnd(e.originalEvent));
		}
	}

	_invokeLifecycle(instance, name, model) {
		if (typeof instance[name] === 'function') {
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

	_getViewModel(instruction) {
		if (typeof instruction.viewModel === 'function') {
			instruction.viewModel = Origin.get(instruction.viewModel).moduleId;
		}

		if (typeof instruction.viewModel === 'string') {
			return this.compositionEngine.ensureViewModel(instruction);
		}

		return Promise.resolve(instruction);
	}

	show(vm:any, model?:any):Promise<any> {
		let childContainer = this.container.createChild();


		let instruction = {
			viewModel: vm,
			container: this.container,
			childContainer: childContainer,
			model: model ? model : {}
		};

		return this._getViewModel(instruction)
			.then(returnedInstruction => {
				let viewModel:any = <any>returnedInstruction.viewModel;

				return this._invokeLifecycle(viewModel, 'canActivate', model).then(canActivate => {
					if (canActivate) {
						return this.compositionEngine.createController(returnedInstruction).then(controller => {
							controller.automate();

							let slot = new ViewSlot(this.dialogContainer, true);
							slot.add(controller.view);

							setTimeout(() => {
								slot.attached();
							}, 150);
						});
					}
				});
			});
	}

	closeDialog(e) {
		//this._invokeLifecycle(viewModel, 'canActivate', model).then(canDeactivate => {
		//	if (canDeactivate) {
		$(e.target).closest('ui-dialog').remove();
		//	}
		//});
	}

	collapse(e) {
		$(e.target).closest('.ui-dialog').toggleClass('ui-collapse');
	}


	/**
	 * dialog move
	 */
	private _isDragging = false;
	private _startX     = 0;
	private _startY     = 0;
	private _dialog;

	private moveStart($event) {
		if ($($event.target).closest('.ui-header').length == 0) return;
		if ($($event.target).closest('button').length !== 0) return;

		this._startX     = $event.x;
		this._startY     = $event.y;
		this._isDragging = true;

		this._dialog = $($event.target).closest('.ui-dialog');
		this._dialog.addClass('ui-dragging');
		$(this.dialogContainer).addClass('ui-dragging');
	}

	private moveEnd($event) {
		if (!this._isDragging) return;
		$(this.dialogContainer).removeClass('ui-dragging');
		this._dialog.removeClass('ui-dragging');
		this._isDragging = false;
		this._dialog     = null;
	}

	private move($event) {
		if (!this._isDragging) return;

		let x = $event.x - this._startX;
		let y = $event.y - this._startY;

		let p  = this._dialog.offset();
		let w  = this._dialog.outerWidth();
		let h  = this._dialog.outerHeight();
		let pw = $(this.dialogContainer).outerWidth();
		let ph = $(this.dialogContainer).outerHeight();

		if (p.left + x < 0) x = 0;
		if (p.top + y < 0) y = 0;
		if (p.left + x + w > pw) x = 0;
		if (p.top + y + h > ph) y = 0;
		this._dialog.offset({left: p.left + x, top: p.top + y});

		this._startX = x !== 0 ? $event.x : this._startX;
		this._startY = y !== 0 ? $event.y : this._startY;
	}
}