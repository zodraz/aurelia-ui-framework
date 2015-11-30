define(["require", "exports"], function (require, exports) {
    var AppLogin = (function () {
        function AppLogin() {
        }
        AppLogin.prototype.onLogin = function ($event) {
            $.notify($event.data.username + "/" + $event.data.password);
        };
        return AppLogin;
    })();
    exports.AppLogin = AppLogin;
});
