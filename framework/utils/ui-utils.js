define(["require", "exports"], function (require, exports) {
    var Markdown;
    (function (Markdown) {
        function toHTML(value) {
            return marked(value, { sanitize: true, highlight: (function (v) { return v; }) }).html;
        }
        Markdown.toHTML = toHTML;
    })(Markdown = exports.Markdown || (exports.Markdown = {}));
});
