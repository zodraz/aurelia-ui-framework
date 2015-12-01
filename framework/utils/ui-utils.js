define(["require", "exports", "lodash", "moment", "numeral", "aurelia-framework"], function (require, exports, ld, mm, nm, aurelia_framework_1) {
    exports._ = ld;
    exports.moment = mm;
    exports.numeral = nm;
    var Utils;
    (function (Utils) {
        function lazy(T, container) {
            return aurelia_framework_1.Lazy.of(T).get(container);
        }
        Utils.lazy = lazy;
    })(Utils = exports.Utils || (exports.Utils = {}));
    var Format;
    (function (Format) {
        function toHTML(value) {
            return marked(value, { sanitize: true, highlight: (function (v) { return v; }) });
        }
        Format.toHTML = toHTML;
        function dateDisplay(value, format) {
            if (format === void 0) { format = 'DD MMM YYYY hh:mm A'; }
            if (!exports.moment(value).isValid())
                return '';
            return exports.moment(value).format(format);
        }
        Format.dateDisplay = dateDisplay;
        function dateISO(value) {
            if (!exports.moment(value).isValid())
                return null;
            return exports.moment(value).utc().toISOString();
        }
        Format.dateISO = dateISO;
        function dateOracle(value) {
            if (!exports.moment(value).isValid())
                return null;
            return exports.moment(value).utc().format('DD-MMM-YYYY hh:mm:ss');
        }
        Format.dateOracle = dateOracle;
        function dateSql(value) {
            if (!exports.moment(value).isValid())
                return null;
            return exports.moment(value).utc().format('YYYY-MM-DD hh:mm:ss');
        }
        Format.dateSql = dateSql;
        function fromNow(value) {
            return exports.moment(value).fromNow(false);
        }
        Format.fromNow = fromNow;
        function numberDisplay(value, format, symbol) {
            if (format === void 0) { format = '$ 0[.]00'; }
            if (symbol === void 0) { symbol = ''; }
            return exports.numeral(value)
                .format(format)
                .replace('$', symbol)
                .replace(/[^\d]+/g, function (txt) {
                return "<small>" + txt.toUpperCase() + "</small>";
            });
        }
        Format.numberDisplay = numberDisplay;
        function exRate(value) {
            if (parseFloat(value || 0) <= 0)
                return ' ';
            return numberDisplay(1 / parseFloat(value), '0.0000a') + '/$';
        }
        Format.exRate = exRate;
    })(Format = exports.Format || (exports.Format = {}));
});
