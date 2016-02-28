define(["require", "exports", "aurelia-ui-framework"], function (require, exports, aurelia_ui_framework_1) {
    var App = (function () {
        function App(container) {
            this.appOptions = new aurelia_ui_framework_1.UIViewportOptions({
                title: 'Aurelia UI Framework',
                subtitle: 'Version 2',
                logo: 'images/logo.png',
                copyright: "Adarsh Pastakia 2015-" + new Date().getFullYear()
            });
            aurelia_ui_framework_1.UIUtils.container(container);
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = this.appOptions.title;
            config.options.isAuthenticated = false;
            config.options.showLogo = true;
            config.map([{
                    route: 'login',
                    moduleId: './login/view',
                    title: 'Login',
                    name: 'login',
                    isLogin: true
                }, {
                    route: 'home',
                    moduleId: './home/view',
                    settings: { sectionTitle: 'Aurelia UI Framework', navIcon: 'fi-elegant-desktop1' },
                    title: 'Framework Elements',
                    nav: true,
                    auth: false,
                    name: 'home'
                }, {
                    route: '', redirect: 'home'
                }]);
        };
        App.prototype.toggleDir = function () {
            document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
        };
        App.prototype.toggleTheme = function () {
            var css = document.getElementById('baseStyle');
            css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
        };
        return App;
    })();
    exports.App = App;
});
