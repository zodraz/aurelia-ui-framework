define(["require", "exports"], function (require, exports) {
    var HomeForm = (function () {
        function HomeForm() {
            this.opts = 3;
            this.hasLoc = true;
            this.fname = 'test';
        }
        return HomeForm;
    })();
    exports.HomeForm = HomeForm;
});
