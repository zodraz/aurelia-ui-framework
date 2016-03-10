define(["require", "exports"], function (require, exports) {
    var Home = (function () {
        function Home() {
            this.optVal = 2;
            this.enabled = true;
            this.md = "\n# Hello World\n\n##### I _Love_ ~~HTML~~ __Markdown__!\n\n---\n\nI can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!\n\nLook at me I'm a list\n\n* Item\n* Item\n* Item\n\nAnd I'm numbered\n\n1. Item\n2. Item\n3. Item\n\nI can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com\n\n![Image](images/heart.png) Dont you just love images!\n\n\n";
        }
        Home.prototype.attached = function () {
            var _this = this;
            setTimeout(function () { return _this.__content.scrollTop = 0; }, 20);
        };
        Home.prototype.change = function ($event) {
            console.log($event.target, $event.detail);
        };
        return Home;
    })();
    exports.Home = Home;
});
