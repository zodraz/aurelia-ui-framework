import {autoinject, customElement, bindable} from "aurelia-framework";
import {UIDialogService} from "../utils/ui-dialog-service";
import {UIEvent} from "../utils/ui-event";

@autoinject()
@customElement('ui-dialog')
export class UIDialog {
	static _id = 0;
	static _x  = 10;
	static _y  = 10;

	@bindable dataTitle;
	@bindable active        = true;
	@bindable minimized     = false;
	@bindable width         = 'auto';
	@bindable height        = 'auto';
	@bindable modal:boolean = false;

	_dialog;
	_taskButton;
	_zindex = 50;
	id;

	_original:any = {};
	_current:any  = {
		top: (UIDialog._x += 10),
		left: (UIDialog._x += 10),
		height: '', width: ''
	};

	constructor(public element:Element, public dialogService:UIDialogService) {
		if (element.hasAttribute('modal'))this.modal = true;
		this.id                = `win-${UIDialog._id++}`;
		this.element.UIElement = this;
	}

	bind() {
		this._current.width  = this.width;
		this._current.height = this.height;
	}

	attached() {
		let d                = $(this._dialog);
		this._current.width  = d.outerWidth();
		this._current.height = d.outerHeight();

		if (this.modal) {
			let pw             = $(this.dialogService.dialogContainer).outerWidth();
			let ph             = $(this.dialogService.dialogContainer).outerHeight();
			this._current.top  = (ph - this._current.height) / 2;
			this._current.left = (pw - this._current.width) / 2;
		}
		else {
			this._taskButton = document.createElement('button');
			this._taskButton.classList.add('ui-win-button');
			this._taskButton.classList.add('ui-active');
			this._taskButton.innerHTML = this.dataTitle;
			this._taskButton.window    = this;
			this.dialogService.addTaskButton(this._taskButton);
		}
		$(this.element).css('z-index', 49).removeClass('ui-hidden');
		Object.assign(this._original, this._current);
	}

	remove() {
		$(this._taskButton).remove();
		$(this.element).remove();
	}

	activeChanged(newValue) {
		if (newValue !== false) {
			this._zindex = 50;
			$(this._taskButton).addClass('ui-active');
		}
		else {
			this._zindex = 1;
			$(this._taskButton).removeClass('ui-active');
		}
	}

	minimizedChanged(newValue) {
		if (newValue !== false) {
			let tp = $(this._taskButton).offset();
			let tw = $(this._taskButton).outerWidth();
			let th = $(this._taskButton).outerHeight();

			Object.assign(this._original, this._current);
			$(this._dialog).addClass('ui-minimize');
			this._current.top    = tp.top;
			this._current.left   = tp.left;
			this._current.width  = tw;
			this._current.height = th;
			$(this._taskButton).removeClass('ui-active');
			setTimeout(()=>$(this._dialog).addClass('ui-hide'), 500);
		}
		else {
			$(this._dialog).removeClass('ui-hide');
			Object.assign(this._current, this._original);
			setTimeout(()=>$(this._dialog).removeClass('ui-minimize'), 500);
			$(this._taskButton).addClass('ui-active');
		}
	}
}