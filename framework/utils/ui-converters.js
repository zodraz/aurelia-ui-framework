define(["require", "exports", "./ui-utils"], function (require, exports, ui_utils_1) {
    var KeysValueConverter = (function () {
        function KeysValueConverter() {
        }
        KeysValueConverter.prototype.toView = function (object) {
            return Object.keys(object);
        };
        return KeysValueConverter;
    })();
    exports.KeysValueConverter = KeysValueConverter;
    var MarkdownValueConverter = (function () {
        function MarkdownValueConverter() {
        }
        MarkdownValueConverter.prototype.toView = function (value) {
            return ui_utils_1.Format.toHTML(value || '');
        };
        return MarkdownValueConverter;
    })();
    exports.MarkdownValueConverter = MarkdownValueConverter;
    var DateValueConverter = (function () {
        function DateValueConverter() {
        }
        DateValueConverter.prototype.toView = function (value, format) {
            return ui_utils_1.Format.dateDisplay(value, format);
        };
        return DateValueConverter;
    })();
    exports.DateValueConverter = DateValueConverter;
});
