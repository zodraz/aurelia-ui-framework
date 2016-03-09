define(["require", "exports"], function (require, exports) {
    var Home = (function () {
        function Home() {
            this.optVal = 2;
            this.enabled = true;
        }
        Home.prototype.change = function ($event) {
            console.log($event.target, $event.detail);
        };
        return Home;
    })();
    exports.Home = Home;
});
