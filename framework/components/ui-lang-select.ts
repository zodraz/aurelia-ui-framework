/**
 *    UI Component: Language Select
 *    @author    Adarsh Pastakia
 *    @company   HMC
 *    @copyright 2015-2016, Adarsh Pastakia
 **/
import {autoinject, customElement, containerless, bindable, bindingMode} from "aurelia-framework";
import {UIEvent} from "../utils/ui-event";
import {_, Utils} from "../utils/ui-utils";

@autoinject()
@customElement('ui-lang-select')
export class UILangSelect {
	static LANGUAGES = [
		{id: 'ar', name: 'العربية', rtl: true},
		{id: 'de', name: 'Deutsche'},
		{id: 'en', name: 'English'},
		{id: 'es', name: 'Español'},
		{id: 'fr', name: 'Français'},
		{id: 'hi', name: 'हिंदी'},
		{id: 'it', name: 'Italiano'},
		{id: 'ja', name: '日本'},
		{id: 'ko', name: '한국어'},
		{id: 'ms', name: 'Malay'},
		{id: 'nl', name: 'Nederlands'},
		{id: 'pt', name: 'Português'},
		{id: 'ru', name: 'Русский'},
		{id: 'tl', name: 'Tagalog'},
		{id: 'vi', name: 'Tiếng Việt'},
		{id: 'ch', name: '中文'},
		{id: 'zh', name: '漢語'}
	];

	private _selector;
	private _menu;
	private _errors;
	private _selected  = [];
	private _languages = [];

	@bindable({
		defaultBindingMode: bindingMode.twoWay
	})
	errors = [];

	private _current:any = null;

	constructor(public element:Element) {
		this._languages = _.clone(UILangSelect.LANGUAGES);
	}

	errorsChanged(newValue) {
		this._errors = [];
		if (newValue || '' != '')
			this._errors = (newValue.replace(/,$/, '') || '').split(',');
	}

	addLanguages(newValue) {
		this._selected  = [];
		this._languages = _.clone(UILangSelect.LANGUAGES);
		for (var l of newValue) {
			let _i = _.findIndex(this._languages, 'id', l);
			if (_i >= 0) {
				let _l = this._languages.splice(_i, 1);
				if (_l.length == 1)this._selected.push(_l[0]);
			}
		}
		return this;
	}

	setLanguage(newValue) {
		this._current = _.find(this._selected, 'id', newValue);
		this._selectLanguage(this._current);
		return this;
	}

	private _openList() {
		let pos = Utils.getFloatPosition(this._selector, this._menu);
		$(this._menu).offset({left: pos.left, top: pos.top});
		$(this._selector)
			.toggleClass('ui-dropdown')
			.removeClass('ui-menu-reverse');

		if (pos.vReverse) $(this._selector).addClass('ui-menu-reverse');
	}

	private _selectLanguage(lang) {
		this._current = lang;
		UIEvent.fireEvent('change', this.element, lang || {id: 'null'});
		$(this._selector).removeClass('ui-dropdown');
	}

	private _addLanguage(lang) {
		this._selected.push(lang);
		this._languages.splice(_.findIndex(this._languages, 'id', lang.id), 1);
		this._selectLanguage(lang);
	}

	private _removeLanguage(lang) {
		this._languages.push(lang);
		this._selected.splice(_.findIndex(this._selected, 'id', lang.id), 1);
		if (this._current.id == lang.id) this._selectLanguage(this._selected[0] || null);
		UIEvent.fireEvent('remove', this.element, lang.id);
	}
}