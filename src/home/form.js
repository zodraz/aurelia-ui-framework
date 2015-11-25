define(["require", "exports"], function (require, exports) {
    var HomeForm = (function () {
        function HomeForm() {
            this.opts = 3;
            this.hasLoc = true;
            this.fname = 'test';
            this.phoneCode = '055';
            this.phoneNumber = '6347342';
            this.phoneCountry = 'ae';
        }
        return HomeForm;
    })();
    exports.HomeForm = HomeForm;
});
