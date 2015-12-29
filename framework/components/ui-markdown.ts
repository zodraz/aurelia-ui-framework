/**
 *    UI Component: Markdown Editor
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIInput} from "./ui-input";

/**
 * @bindable value
 */
@bindable({
	name: 'value',
	attribute: 'value',
	defaultBindingMode: bindingMode.twoWay,
	defaultValue: ''
})

@autoinject()
@customElement('ui-markdown')
export class UIMarkdown {
	private _id;
	private _input;
	private _tools;
	private _markdown;
	private _focus:boolean       = false;
	private _classes:string      = '';
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	@bindable id:string          = '';
	@bindable dir:string         = 'inherit';
	@bindable placeholder:string = '';
	@bindable readonly:boolean   = false;
	@bindable disabled:boolean   = false;
	private value:string         = '';

	constructor(element:Element) {
		this._id = `markdown-${UIInput._id++}`;
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('readonly')) this.readonly = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
		if (element.hasAttribute('label-top')) this._classes = 'ui-label-top';
	}

	bind() {
		this.value = this.value || '';
	}

	attached() {
		this._markdown.UIElement = this;
		$(this._input)
			.attr(this.readonly !== false ? 'readonly' : 'R', '')
			.attr(this.disabled !== false ? 'disabled' : 'D', '')
		$(this._tools).children('button:not(.ui-help)')
			.attr(this.disabled !== false || this.readonly !== false ? 'disabled' : 'D', '');
	}

	disabledChanged(newValue) {
		$(this._input)
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
		$(this._tools).children('button:not(.ui-help)')
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
	}

	readonlyChanged(newValue) {
		$(this._input)
			.removeAttr('readonly')
			.attr(newValue !== false ? 'readonly' : 'R', '');
		$(this._tools).children('button:not(.ui-help)')
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
	}

	private _toolClick($event) {
		let id    = $($event.target).closest('button').data('id');
		let start = this._input.selectionStart,
			end   = this._input.selectionEnd,
			sub   = this.value.substr(start, end - start) || 'EditThis';

		var diff = 0;

		if (id == 'preview') {
			this._toggle('preview');
		}
		else if (id == 'help') {
			this._toggle('help');
		}
		else if (!this.disabled && !this.readonly) {
			if (id == 'h1') {
				diff       = 3;
				this.value = this.value.substr(0, start) + `#${sub}\n\n` + this.value.substr(end);
			}
			else if (id == 'h2') {
				diff       = 4;
				this.value = this.value.substr(0, start) + `##${sub}\n\n` + this.value.substr(end);
			}
			else if (id == 'h3') {
				diff       = 5;
				this.value = this.value.substr(0, start) + `###${sub}\n\n` + this.value.substr(end);
			}
			else if (id == 'h4') {
				diff       = 6;
				this.value = this.value.substr(0, start) + `####${sub}\n\n` + this.value.substr(end);
			}
			else if (id == 'h5') {
				diff       = 7;
				this.value = this.value.substr(0, start) + `#####${sub}\n\n` + this.value.substr(end);
			}
			else if (id == 'h6') {
				diff       = 8;
				this.value = this.value.substr(0, start) + `######${sub}\n\n` + this.value.substr(end);
			}
			else if (id == 'b') {
				diff       = 2;
				this.value = this.value.substr(0, start) + `__${sub}__` + this.value.substr(end);
			}
			else if (id == 'i') {
				diff       = 1;
				this.value = this.value.substr(0, start) + `_${sub}_` + this.value.substr(end);
			}
			else if (id == 's') {
				diff       = 2;
				this.value = this.value.substr(0, start) + `~~${sub}~~` + this.value.substr(end);
			}
			else if (id == 'a') {
				diff       = 1;
				this.value = this.value.substr(0, start) + `[${sub}](${sub})` + this.value.substr(end);
			}
			else if (id == 'img') {
				diff       = 2;
				this.value = this.value.substr(0, start) + `![${sub}](${sub})` + this.value.substr(end);
			}
			else if (id == 'ul') {
				diff       = 1;
				sub        = sub.replace(/^.+$/gm, (t)=>`* ${t}`);
				this.value = this.value.substr(0, start) + `${sub}\n` + this.value.substr(end);
			}
			else if (id == 'ol') {
				diff       = 1;
				var i      = 1;
				sub        = sub.replace(/^.+$/gm, (t)=>`${i++}. ${t}`);
				this.value = this.value.substr(0, start) + `${sub}\n` + this.value.substr(end);
			}
			if (id != 'preview' && id != 'help') {
				this._input.focus();
				this._input.selectionStart = start + diff;
				this._input.selectionEnd   = start + diff + sub.length;
			}
		}
	}

	private _toggle(type) {
		$(this._markdown).find('.ui-close').toggleClass('ui-hide');
		if (type == 'close') {
			$(this._markdown).find('.ui-markdown:not(.ui-hide)').addClass('ui-hide');
		}
		else {
			$(this._markdown).find(`.ui-markdown-${type}`).toggleClass('ui-hide');
		}
	}
}