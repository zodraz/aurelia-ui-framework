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
    var GroupValueConverter = (function () {
        function GroupValueConverter() {
        }
        GroupValueConverter.prototype.toView = function (object, property) {
            return ui_utils_1._.groupBy(object, property);
        };
        return GroupValueConverter;
    })();
    exports.GroupValueConverter = GroupValueConverter;
    var SortValueConverter = (function () {
        function SortValueConverter() {
        }
        SortValueConverter.prototype.toView = function (value, property) {
            return ui_utils_1._.sortBy(value, property);
        };
        return SortValueConverter;
    })();
    exports.SortValueConverter = SortValueConverter;
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
    var NumberValueConverter = (function () {
        function NumberValueConverter() {
        }
        NumberValueConverter.prototype.toView = function (value, format) {
            return ui_utils_1.Format.numberDisplay(value, format);
        };
        return NumberValueConverter;
    })();
    exports.NumberValueConverter = NumberValueConverter;
    var CurrencyValueConverter = (function () {
        function CurrencyValueConverter() {
        }
        CurrencyValueConverter.prototype.toView = function (value, format, symbol) {
            return ui_utils_1.Format.currencyDisplay(value, format, symbol);
        };
        return CurrencyValueConverter;
    })();
    exports.CurrencyValueConverter = CurrencyValueConverter;
    var IsStringValueConverter = (function () {
        function IsStringValueConverter() {
        }
        IsStringValueConverter.prototype.toView = function (value) {
            return ui_utils_1._.isString(value);
        };
        return IsStringValueConverter;
    })();
    exports.IsStringValueConverter = IsStringValueConverter;
    var IsArrayValueConverter = (function () {
        function IsArrayValueConverter() {
        }
        IsArrayValueConverter.prototype.toView = function (value) {
            return ui_utils_1._.isArray(value);
        };
        return IsArrayValueConverter;
    })();
    exports.IsArrayValueConverter = IsArrayValueConverter;
    var IsObjectValueConverter = (function () {
        function IsObjectValueConverter() {
        }
        IsObjectValueConverter.prototype.toView = function (value) {
            return ui_utils_1._.isObject(value);
        };
        return IsObjectValueConverter;
    })();
    exports.IsObjectValueConverter = IsObjectValueConverter;
});
