define(["require", "exports", "lodash", "moment", "numeral", "aurelia-framework"], function (require, exports, ld, mm, nm, aurelia_framework_1) {
    "use strict";
    exports._ = ld;
    exports.moment = mm;
    exports.numeral = nm;
    window.isTrue = function (b) {
        return (/^(true|yes|1|y|on)$/i).test(b);
    };
    window.isEmpty = function (a) {
        if (typeof a === 'number')
            return false;
        return a === undefined || a === null || a === '' || Object.keys(a).length == 0 || a.length === 0;
    };
    window.isFunction = function (a) {
        return exports._.isFunction(a);
    };
    window.getParentByTag = function (el, selector) {
        do {
            if (el.tagName.toLowerCase() === selector.toLowerCase())
                return el;
            el = el.parentElement;
        } while (el !== null);
        return null;
    };
    window.getParentByClass = function (el, selector, last) {
        do {
            if (last && el.classList.contains(last))
                return null;
            if (el.classList.contains(selector))
                return el;
            el = el.parentElement;
        } while (el !== null);
        return null;
    };
    Object.defineProperties(window, {
        '__seed': {
            writable: true,
            enumerable: false,
            value: 1
        },
        'Constants': {
            configurable: false,
            writable: false,
            enumerable: false,
            value: {}
        }
    });
    var UIUtils;
    (function (UIUtils) {
        var __container;
        function container(container) {
            __container = container;
        }
        UIUtils.container = container;
        function lazy(T) {
            if (!__container) {
                throw new Error('UIUtils.Lazy::Container not set');
            }
            return aurelia_framework_1.Lazy.of(T)
                .get(__container)();
        }
        UIUtils.lazy = lazy;
        function showToast(container, config) {
            var tmr;
            if (typeof config === 'string')
                config = { message: config };
            var opt = Object.assign({ theme: 'default', autoHide: true, extraClass: '' }, config);
            var toast = document.createElement('div');
            toast.classList.add('ui-toast');
            toast.classList.add(opt.theme);
            if (!isEmpty(opt.extraClass))
                toast.classList.add(opt.extraClass);
            toast.innerHTML = "<div class=\"ui-toast-wrapper\">\n\t\t\t<span class=\"ui-icon " + opt.icon + "\"></span>\n\t\t\t<p class=\"ui-message\">" + opt.message + "</p>\n\t\t\t<span class=\"ui-close\">&times;</span>\n\t\t</div>";
            container.appendChild(toast);
            if (opt.autoHide)
                tmr = setTimeout(function () { return __removeToast(toast); }, 5000);
            toast.onclick = function () {
                clearTimeout(tmr);
                __removeToast(toast);
            };
            setTimeout(function () { return toast.classList.add('ui-toast-show'); }, 10);
        }
        UIUtils.showToast = showToast;
        function __removeToast(toast) {
            setTimeout(function () { return toast.remove(); }, 1000);
            toast.classList.remove('ui-toast-show');
        }
        function getAscii(str) {
            if (isEmpty(str))
                return '';
            var conversions = {};
            conversions['ae'] = 'ä|æ|ǽ';
            conversions['oe'] = 'ö|œ';
            conversions['ue'] = 'ü';
            conversions['Ae'] = 'Ä';
            conversions['Ue'] = 'Ü';
            conversions['Oe'] = 'Ö';
            conversions['A'] = 'À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ';
            conversions['a'] = 'à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª';
            conversions['C'] = 'Ç|Ć|Ĉ|Ċ|Č';
            conversions['c'] = 'ç|ć|ĉ|ċ|č';
            conversions['D'] = 'Ð|Ď|Đ';
            conversions['d'] = 'ð|ď|đ';
            conversions['E'] = 'È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě';
            conversions['e'] = 'è|é|ê|ë|ē|ĕ|ė|ę|ě';
            conversions['G'] = 'Ĝ|Ğ|Ġ|Ģ';
            conversions['g'] = 'ĝ|ğ|ġ|ģ';
            conversions['H'] = 'Ĥ|Ħ';
            conversions['h'] = 'ĥ|ħ';
            conversions['I'] = 'Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ';
            conversions['i'] = 'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı';
            conversions['J'] = 'Ĵ';
            conversions['j'] = 'ĵ';
            conversions['K'] = 'Ķ';
            conversions['k'] = 'ķ';
            conversions['L'] = 'Ĺ|Ļ|Ľ|Ŀ|Ł';
            conversions['l'] = 'ĺ|ļ|ľ|ŀ|ł';
            conversions['N'] = 'Ñ|Ń|Ņ|Ň';
            conversions['n'] = 'ñ|ń|ņ|ň|ŉ';
            conversions['O'] = 'Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ';
            conversions['o'] = 'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º';
            conversions['R'] = 'Ŕ|Ŗ|Ř';
            conversions['r'] = 'ŕ|ŗ|ř';
            conversions['S'] = 'Ś|Ŝ|Ş|Š';
            conversions['s'] = 'ś|ŝ|ş|š|ſ';
            conversions['T'] = 'Ţ|Ť|Ŧ';
            conversions['t'] = 'ţ|ť|ŧ';
            conversions['U'] = 'Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ';
            conversions['u'] = 'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ';
            conversions['Y'] = 'Ý|Ÿ|Ŷ';
            conversions['y'] = 'ý|ÿ|ŷ';
            conversions['W'] = 'Ŵ';
            conversions['w'] = 'ŵ';
            conversions['Z'] = 'Ź|Ż|Ž';
            conversions['z'] = 'ź|ż|ž';
            conversions['AE'] = 'Æ|Ǽ';
            conversions['ss'] = 'ß';
            conversions['IJ'] = 'Ĳ';
            conversions['ij'] = 'ĳ';
            conversions['OE'] = 'Œ';
            conversions['f'] = 'ƒ';
            for (var i in conversions) {
                var re = new RegExp(conversions[i], "g");
                str = str.replace(re, i);
            }
            return str;
        }
        UIUtils.getAscii = getAscii;
    })(UIUtils = exports.UIUtils || (exports.UIUtils = {}));
});
