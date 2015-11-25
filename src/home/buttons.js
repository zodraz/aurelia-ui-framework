define(["require", "exports"], function (require, exports) {
    var HomeButtons = (function () {
        function HomeButtons() {
            this.t1 = 0;
        }
        HomeButtons.prototype.buttonclick = function ($event) {
            var data = $($event.target).closest('button').data('UIButton');
            if (data) {
                var msg = 'OOPS! You clicked the wrong button';
                if (data.theme == 'primary')
                    msg = 'YIPEE! Im the primary color';
                if (data.theme == 'info')
                    msg = 'HOUSTON! We have lift-off';
                if (data.theme == 'success')
                    msg = 'HOUSTON! The eagle has landed';
                if (data.theme == 'danger')
                    msg = 'EXTERMINATE! EXTERMINATE!';
                if (data.theme == 'warning')
                    msg = 'HOUSTON! We have a problem';
                if (data.theme != 'secondary') {
                    $.notify(msg, {
                        className: data.theme,
                        autoHide: false
                    });
                }
                else {
                    $('.ui-page-title').notify('Error contacting web-service. Please try again later.', {
                        elementPosition: 'b c',
                        arrowShow: false,
                        className: 'danger'
                    });
                }
            }
        };
        return HomeButtons;
    })();
    exports.HomeButtons = HomeButtons;
});
