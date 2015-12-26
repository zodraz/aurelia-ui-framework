define(["require", "exports", "lodash", "moment", "numeral", "aurelia-framework"], function (require, exports, ld, mm, nm, aurelia_framework_1) {
    exports._ = ld;
    exports.moment = mm;
    exports.numeral = nm;
    var Utils;
    (function (Utils) {
        function lazy(T) {
            if (!Utils.container)
                return;
            return aurelia_framework_1.Lazy.of(T).get(Utils.container)();
        }
        Utils.lazy = lazy;
        function getAscii(str) {
            var conversions = new Object();
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
        Utils.getAscii = getAscii;
        function getFloatPosition(anchor, floater, side) {
            if (side === void 0) { side = false; }
            var _f = $(floater), _a = $(anchor);
            _f.offset({ left: -1000, top: -1000 })
                .css('max-height', side ? '480px' : '320px')
                .css('visibility', 'visible');
            var o = _a.offset(), aw = _a.outerWidth(), ah = _a.outerHeight(), fh = _f.outerHeight(), fw = _f.outerWidth(), pw = window.innerWidth, ph = window.innerHeight;
            var _hr = false, _vr = false;
            var t = o.top, l = o.left;
            if (!side) {
                _f.css('min-width', aw);
                if (t + ah + fh > ph) {
                    t -= fh;
                    _vr = true;
                }
                else {
                    t += ah;
                }
                if (l + fw > pw) {
                    l -= (fw - aw);
                }
            }
            else {
                if (t + fh > ph) {
                    t -= (fh - ah);
                    _vr = true;
                }
                if (l + aw + fw > pw) {
                    l -= fw;
                    _hr = true;
                }
                else {
                    l += aw;
                }
            }
            _f.css('max-height', '0').css('visibility', 'hidden');
            return { top: t, left: l, hReverse: _hr, vReverse: _vr };
        }
        Utils.getFloatPosition = getFloatPosition;
    })(Utils = exports.Utils || (exports.Utils = {}));
    var Format;
    (function (Format) {
        function toHTML(value) {
            return marked(value, { sanitize: true, highlight: (function (v) { return v; }) });
        }
        Format.toHTML = toHTML;
        function dateDisplay(value, format) {
            if (format === void 0) { format = 'DD MMM YYYY hh:mm A'; }
            if (!exports.moment(value || null).isValid())
                return '';
            return exports.moment(value).format(format);
        }
        Format.dateDisplay = dateDisplay;
        function dateISO(value) {
            if (!exports.moment(value || null).isValid())
                return null;
            return exports.moment(value).utc().toISOString();
        }
        Format.dateISO = dateISO;
        function dateOracle(value) {
            if (!exports.moment(value || null).isValid())
                return null;
            return exports.moment(value).utc().format('DD-MMM-YYYY hh:mm:ss');
        }
        Format.dateOracle = dateOracle;
        function dateSql(value) {
            if (!exports.moment(value || null).isValid())
                return null;
            return exports.moment(value).utc().format('YYYY-MM-DD hh:mm:ss');
        }
        Format.dateSql = dateSql;
        function fromNow(value) {
            return exports.moment(value).fromNow(false);
        }
        Format.fromNow = fromNow;
        function numberDisplay(value, format) {
            if (format === void 0) { format = '0[.]00'; }
            if (isNaN(parseFloat(value)))
                return value;
            return exports.numeral(value)
                .format(format)
                .replace(/[^\d]+/g, function (txt) {
                return "<small>" + txt.toUpperCase() + "</small>";
            });
        }
        Format.numberDisplay = numberDisplay;
        function currencyDisplay(value, format, symbol) {
            if (format === void 0) { format = '$ 0[.]00'; }
            if (symbol === void 0) { symbol = '$'; }
            if (isNaN(parseFloat(value)))
                return value;
            return exports.numeral(value)
                .format(format)
                .replace('$', symbol)
                .replace(/[^\d]+/g, function (txt) {
                return "<small>" + txt.toUpperCase() + "</small>";
            });
        }
        Format.currencyDisplay = currencyDisplay;
        function exRate(value) {
            if (isNaN(parseFloat(value)))
                return ' ';
            if (parseFloat(value || 0) <= 0)
                return ' ';
            return numberDisplay(1 / parseFloat(value), '0.0000a') + '/$';
        }
        Format.exRate = exRate;
    })(Format = exports.Format || (exports.Format = {}));
});
