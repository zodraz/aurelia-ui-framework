define(["require", "exports", "lodash", "moment", "numeral"], function (require, exports, ld, mm, nm) {
    exports._ = ld;
    exports.moment = mm;
    exports.numeral = nm;
    var Markdown;
    (function (Markdown) {
        function toHTML(value) {
            return marked(value, { sanitize: true, highlight: (function (v) { return v; }) });
        }
        Markdown.toHTML = toHTML;
    })(Markdown = exports.Markdown || (exports.Markdown = {}));
});
