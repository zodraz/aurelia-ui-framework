define(["require", "exports", "./ui-utils"], function (require, exports, ui_utils_1) {
    var KeyValueConverter = (function () {
        function KeyValueConverter() {
        }
        KeyValueConverter.prototype.toView = function (object) {
            return Object.keys(object);
        };
        return KeyValueConverter;
    })();
    exports.KeyValueConverter = KeyValueConverter;
    var MarkdownValueConverter = (function () {
        function MarkdownValueConverter() {
        }
        MarkdownValueConverter.prototype.toView = function (value) {
            return ui_utils_1.Markdown.toHTML(value || '');
        };
        return MarkdownValueConverter;
    })();
    exports.MarkdownValueConverter = MarkdownValueConverter;
});
