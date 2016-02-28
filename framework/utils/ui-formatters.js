define(["require", "exports", "aurelia-ui-framework"], function (require, exports, aurelia_ui_framework_1) {
    var UIFormat;
    (function (UIFormat) {
        function toHTML(md) {
            return marked(md);
        }
        UIFormat.toHTML = toHTML;
        function date(dt, ft) {
            if (ft === void 0) { ft = 'DD MMM YYYY hh:mm A'; }
            var x;
            return dt === null || !(x = aurelia_ui_framework_1.moment(dt)).isValid() ? null : x.format(ft);
        }
        UIFormat.date = date;
        function dateToISO(dt) {
            var x;
            return dt === null || !(x = aurelia_ui_framework_1.moment(dt)).isValid() ? null : x.toISOString();
        }
        UIFormat.dateToISO = dateToISO;
        function fromNow(dt) {
            var x;
            return dt === null || !(x = aurelia_ui_framework_1.moment(dt)).isValid() ? '' : x.fromNow(false);
        }
        UIFormat.fromNow = fromNow;
        function number(nm, fm) {
            if (fm === void 0) { fm = '0,0[.]00'; }
            return nm === null || isNaN(nm) ? '' :
                aurelia_ui_framework_1.numeral(nm)
                    .format(fm)
                    .replace(/[^\d\.]+/g, function (txt) {
                    return "<small>" + txt.toUpperCase() + "</small>";
                });
        }
        UIFormat.number = number;
        function currency(nm, sy, fm) {
            if (sy === void 0) { sy = '$'; }
            if (fm === void 0) { fm = '$ 0,0[.]00'; }
            return nm === null || isNaN(nm) ? '' :
                aurelia_ui_framework_1.numeral(nm)
                    .format(fm)
                    .replace('$', sy)
                    .replace(/[^\d\.]+/g, function (txt) {
                    return "<small>" + txt.toUpperCase() + "</small>";
                });
        }
        UIFormat.currency = currency;
        function percent(nm) {
            return nm === null || isNaN(nm) ? '' :
                aurelia_ui_framework_1.numeral(nm > 1 ? nm / 100 : nm)
                    .format('0.00 %');
        }
        UIFormat.percent = percent;
    })(UIFormat = exports.UIFormat || (exports.UIFormat = {}));
});
