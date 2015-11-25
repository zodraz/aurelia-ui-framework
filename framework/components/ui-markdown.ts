/**
 *    UI Component: Markdown Editor
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";

export {MarkdownValueConverter} from '../utils/ui-converters';

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
@containerless()
@customElement('ui-markdown')
export class UIMarkdown {
	private _input;
	private _markdown;
	private _labelClasses:string = '';
	private _inputClasses:string = '';

	@bindable id:string          = '';
	@bindable placeholder:string = '';
	@bindable readonly:boolean   = false;
	@bindable disabled:boolean   = false;
	private value:string         = '';

	constructor(element:Element) {
		if (element.hasAttribute('required')) this._labelClasses += ' ui-required ';
		if (element.hasAttribute('readonly')) this.readonly = true;
		if (element.hasAttribute('disabled')) this.disabled = true;
	}

	bind() {
		this.value = this.value || '';
	}

	attached() {
		this._input = $(this._markdown)
			.data('UIMarkdown', this)
			.find('.ui-input');
		this._input
			.attr(this.readonly !== false ? 'readonly' : 'R', '')
			.attr(this.disabled !== false ? 'disabled' : 'D', '')
	}

	disabledChanged(newValue) {
		this._input
			.removeAttr('disabled')
			.attr(newValue !== false ? 'disabled' : 'D', '');
	}

	readonlyChanged(newValue) {
		this._input
			.removeAttr('readonly')
			.attr(newValue !== false ? 'readonly' : 'R', '');
	}

	private _toolClick($event) {
		let id    = $($event.target).closest('button').data('id');
		let start = this._input[0].selectionStart,
			end   = this._input[0].selectionEnd,
			sub   = this.value.substr(start, end - start) || 'EditThis';

		var diff = 0;

		if (id == 'preview') {
			this._toggle('preview');
		}
		else if (id == 'help') {
			this._toggle('help');
		}
		else if (id == 'h1') {
			diff       = 3;
			this.value = this.value.substr(0, start) + `\n\n#${sub}\n\n` + this.value.substr(end);
		}
		else if (id == 'h2') {
			diff       = 4;
			this.value = this.value.substr(0, start) + `\n\n##${sub}\n\n` + this.value.substr(end);
		}
		else if (id == 'h3') {
			diff       = 5;
			this.value = this.value.substr(0, start) + `\n\n###${sub}\n\n` + this.value.substr(end);
		}
		else if (id == 'h4') {
			diff       = 6;
			this.value = this.value.substr(0, start) + `\n\n####${sub}\n\n` + this.value.substr(end);
		}
		else if (id == 'h5') {
			diff       = 7;
			this.value = this.value.substr(0, start) + `\n\n#####${sub}\n\n` + this.value.substr(end);
		}
		else if (id == 'h6') {
			diff       = 8;
			this.value = this.value.substr(0, start) + `\n\n######${sub}\n\n` + this.value.substr(end);
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
			this.value = this.value.substr(0, start) + `\n${sub}\n` + this.value.substr(end);
		}
		else if (id == 'ol') {
			diff       = 1;
			var i      = 1;
			sub        = sub.replace(/^.+$/gm, (t)=>`${i++}. ${t}`);
			this.value = this.value.substr(0, start) + `\n${sub}\n` + this.value.substr(end);
		}
		if (id != 'preview' && id != 'help') {
			this._input.focus();
			this._input[0].selectionStart = start + diff;
			this._input[0].selectionEnd   = start + diff + sub.length;
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