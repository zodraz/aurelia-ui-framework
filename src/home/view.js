define(["require", "exports"], function (require, exports) {
    var Home = (function () {
        function Home() {
            this.title = "Framework Elements";
        }
        Home.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map([{
                    route: 'welcome',
                    moduleId: './welcome',
                    settings: {
                        navIcon: 'fi-elegant-house3'
                    },
                    title: 'Welcome',
                    nav: true,
                    name: 'welcome'
                }, {
                    route: 'buttons',
                    moduleId: './buttons',
                    settings: {
                        sectionStart: true,
                        sectionTitle: 'Components',
                        navIcon: 'fi-elegant-selected'
                    },
                    title: 'Buttons',
                    nav: true,
                    name: 'buttons'
                }, {
                    route: 'grid',
                    moduleId: './grid',
                    settings: {
                        sectionTitle: 'Containers',
                        navIcon: 'fi-elegant-3x3'
                    },
                    title: 'Grid',
                    nav: true,
                    name: 'grid'
                }, {
                    route: 'form',
                    moduleId: './form',
                    settings: {
                        navIcon: 'fi-elegant-interface19'
                    },
                    title: 'Forms',
                    nav: true,
                    name: 'form'
                }, {
                    route: 'page',
                    moduleId: './page',
                    settings: {
                        navIcon: 'fi-elegant-document9'
                    },
                    title: 'Page Elements',
                    nav: true,
                    name: 'page'
                }, {
                    route: '', redirect: 'welcome'
                }]);
        };
        return Home;
    })();
    exports.Home = Home;
});
