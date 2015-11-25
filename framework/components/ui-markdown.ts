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
	@bindable addonIcon:string   = '';
	@bindable addonText:string   = '';
	@bindable addonClass:string  = '';
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
			end   = this._input[0].selectionEnd;
		if (id == 'preview') {
			this._togglePreview();
		}
		else if (id == 'h1') {
			let s      = this.value.substr(start, end - start);
			this.value = this.value.substr(0, start) + '\n\n# ' + s + '\n\n' + this.value.substr(end);
			this._input.focus();
			this._input[0].selectionStart = end + 6;
			this._input[0].selectionEnd   = end + 6;
		}
	}

	private _togglePreview() {
		//$(this._markdown).find('.ui-form-control').toggleClass('ui-hidden');
		$(this._markdown).find('.ui-markdown-preview').toggleClass('ui-hide');
	}
}