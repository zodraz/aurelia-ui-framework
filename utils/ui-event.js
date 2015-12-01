var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var UIEvent = (function (_super) {
        __extends(UIEvent, _super);
        function UIEvent() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(UIEvent.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (any) {
                this._data = any;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIEvent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (any) {
                this._value = any;
            },
            enumerable: true,
            configurable: true
        });
        UIEvent.fireEvent = function (event, element, data, source) {
            var e = new Event(event, { bubbles: true, cancelable: true });
            e.data = data;
            e.srcElement = source;
            element.dispatchEvent(e);
            return e;
        };
        return UIEvent;
    })(Event);
    exports.UIEvent = UIEvent;
});
