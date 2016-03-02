define(["require", "exports"], function (require, exports) {
    var Home = (function () {
        function Home() {
            this.allEnabled = true;
            this.radioValue = 2;
            this.btnToggle = 3;
            this.tmp = 'no click yet';
            this.v1 = 22;
            this.v2 = 75;
        }
        return Home;
    })();
    exports.Home = Home;
});
