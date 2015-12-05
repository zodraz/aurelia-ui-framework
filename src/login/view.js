define(["require", "exports"], function (require, exports) {
    var AppLogin = (function () {
        function AppLogin() {
        }
        AppLogin.prototype.onLogin = function ($event) {
            $.notify($event.detail.username + "/" + $event.detail.password);
        };
        return AppLogin;
    })();
    exports.AppLogin = AppLogin;
});
