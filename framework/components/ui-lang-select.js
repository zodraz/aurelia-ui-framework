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
define(["require", "exports", "aurelia-framework", "../utils/ui-event", "../utils/ui-utils"], function (require, exports, aurelia_framework_1, ui_event_1, ui_utils_1) {
    var UILangSelect = (function () {
        function UILangSelect(element) {
            this.element = element;
            this._selected = [];
            this._languages = [];
            this._current = null;
            this._languages = UILangSelect.LANGUAGES;
        }
        UILangSelect.prototype.openList = function () {
            var pos = ui_utils_1.Utils.getFloatPosition(this._selector, this._menu);
            $(this._menu).offset({ left: pos.left, top: pos.top });
            $(this._selector)
                .toggleClass('ui-dropdown')
                .removeClass('ui-menu-reverse');
            if (pos.vReverse)
                $(this._selector).addClass('ui-menu-reverse');
        };
        UILangSelect.prototype.selectLanguage = function (lang) {
            this._current = lang;
            ui_event_1.UIEvent.fireEvent('change', this.element, lang ? lang.id : null);
        };
        UILangSelect.prototype.addLanguage = function (lang) {
            this._selected.push(lang);
            this._languages.splice(ui_utils_1._.findIndex(this._languages, 'id', lang.id), 1);
            this.selectLanguage(lang);
        };
        UILangSelect.prototype.removeLanguage = function (lang) {
            this._languages.push(lang);
            this._selected.splice(ui_utils_1._.findIndex(this._selected, 'id', lang.id), 1);
            if (this._current.id == lang.id)
                this.selectLanguage(this._selected[0] || null);
            ui_event_1.UIEvent.fireEvent('remove', this.element, lang.id);
        };
        UILangSelect.LANGUAGES = [
            { id: 'AR', name: 'العربية', rtl: true },
            { id: 'DE', name: 'Deutsche' },
            { id: 'EN', name: 'English' },
            { id: 'ES', name: 'Español' },
            { id: 'FR', name: 'Français' },
            { id: 'HI', name: 'हिंदी' },
            { id: 'IT', name: 'Italiano' },
            { id: 'JA', name: '日本' },
            { id: 'KO', name: '한국어' },
            { id: 'MS', name: 'Malay' },
            { id: 'NL', name: 'Nederlands' },
            { id: 'PT', name: 'Português' },
            { id: 'RU', name: 'Русский' },
            { id: 'TL', name: 'Tagalog' },
            { id: 'VI', name: 'Tiếng Việt' },
            { id: 'ZH', name: '中文' }
        ];
        UILangSelect = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-lang-select'), 
            __metadata('design:paramtypes', [Element])
        ], UILangSelect);
        return UILangSelect;
    })();
    exports.UILangSelect = UILangSelect;
});
