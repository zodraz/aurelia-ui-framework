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
		{id: 'AR', name: 'العربية', rtl: true},
		{id: 'DE', name: 'Deutsche'},
		{id: 'EN', name: 'English'},
		{id: 'ES', name: 'Español'},
		{id: 'FR', name: 'Français'},
		{id: 'HI', name: 'हिंदी'},
		{id: 'IT', name: 'Italiano'},
		{id: 'JA', name: '日本'},
		{id: 'KO', name: '한국어'},
		{id: 'MS', name: 'Malay'},
		{id: 'NL', name: 'Nederlands'},
		{id: 'PT', name: 'Português'},
		{id: 'RU', name: 'Русский'},
		{id: 'TL', name: 'Tagalog'},
		{id: 'VI', name: 'Tiếng Việt'},
		{id: 'ZH', name: '中文'}
	];

	private _selector;
	private _menu;
	private _selected  = [];
	private _languages = [];

	private _current:any = null;

	constructor(public element:Element) {
		this._languages = UILangSelect.LANGUAGES;
	}

	openList() {
		let pos = Utils.getFloatPosition(this._selector, this._menu);
		$(this._menu).offset({left: pos.left, top: pos.top});
		$(this._selector)
			.toggleClass('ui-dropdown')
			.removeClass('ui-menu-reverse');

		if (pos.vReverse) $(this._selector).addClass('ui-menu-reverse');
	}

	selectLanguage(lang) {
		this._current = lang;
		UIEvent.fireEvent('change', this.element, lang ? lang.id : null);
	}

	addLanguage(lang) {
		this._selected.push(lang);
		this._languages.splice(_.findIndex(this._languages, 'id', lang.id), 1);
		this.selectLanguage(lang);
	}

	removeLanguage(lang) {
		this._languages.push(lang);
		this._selected.splice(_.findIndex(this._selected, 'id', lang.id), 1);
		if (this._current.id == lang.id) this.selectLanguage(this._selected[0] || null);
		UIEvent.fireEvent('remove', this.element, lang.id);
	}
}