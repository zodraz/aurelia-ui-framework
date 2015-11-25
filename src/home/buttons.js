define(["require", "exports"], function (require, exports) {
    var HomeButtons = (function () {
        function HomeButtons() {
            this.t1 = 0;
        }
        HomeButtons.prototype.buttonclick = function ($event) {
            var data = $($event.target).closest('button').data('UIButton');
            if (data) {
                var msg = 'OOPS! You clicked the wrong button';
                if (data._theme == 'primary')
                    msg = 'YIPEE! Im the primary color';
                if (data._theme == 'info')
                    msg = 'HOUSTON! We have lift-off';
                if (data._theme == 'success')
                    msg = 'HOUSTON! The eagle has landed';
                if (data._theme == 'danger')
                    msg = 'EXTERMINATE! EXTERMINATE!';
                if (data._theme == 'warning')
                    msg = 'HOUSTON! We have a problem';
                if (data._theme != 'secondary') {
                    $.notify(msg, {
                        className: data._theme,
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
