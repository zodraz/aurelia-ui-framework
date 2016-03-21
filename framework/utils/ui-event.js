var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./ui-utils", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, ui_utils_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    var UIEvent = (function (_super) {
        __extends(UIEvent, _super);
        function UIEvent() {
            _super.apply(this, arguments);
        }
        UIEvent.fireEvent = function (event, element, data, source) {
            try {
                var e = new Event(event, { bubbles: true, cancelable: true });
                e.detail = data;
                e.srcElement = source;
                return element.dispatchEvent(e);
            }
            catch (e) {
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, true, true, data);
                return element.dispatchEvent(evt);
            }
        };
        UIEvent.observe = function (object, prop) {
            if (!UIEvent.__ob) {
                UIEvent.__ob = ui_utils_1.Utils.lazy(aurelia_framework_1.BindingEngine);
            }
            return UIEvent.__ob.propertyObserver(object, prop);
        };
        UIEvent.broadcast = function (evt, data) {
            if (!UIEvent.__ea) {
                UIEvent.__ea = ui_utils_1.Utils.lazy(aurelia_event_aggregator_1.EventAggregator);
            }
            UIEvent.__ea.publish(evt, data);
        };
        UIEvent.subscribe = function (evt, fn) {
            if (!UIEvent.__ea) {
                UIEvent.__ea = ui_utils_1.Utils.lazy(aurelia_event_aggregator_1.EventAggregator);
            }
            return UIEvent.__ea.subscribe(evt, fn);
        };
        return UIEvent;
    })(CustomEvent);
    exports.UIEvent = UIEvent;
});
