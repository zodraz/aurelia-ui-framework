define(["require", "exports", "aurelia-ui-framework"], function (require, exports, aurelia_ui_framework_1) {
    var App = (function () {
        function App() {
            this.appOptions = new aurelia_ui_framework_1.UIViewportOptions({
                title: 'Aurelia UI Framework',
                subtitle: 'Version 2',
                copyright: "Adarsh Pastakia 2015-" + new Date().getFullYear()
            });
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = this.appOptions.title;
            config.options.showLogo = true;
            config.options.isAuthenticated = true;
            config.map([{
                    route: 'login',
                    moduleId: './login/view',
                    title: 'Login',
                    name: 'login',
                    isLogin: true
                }, {
                    route: 'home',
                    moduleId: './home/view',
                    settings: { sectionTitle: 'Aurelia UI Framework', icon: 'fi-metrize-video-viewport-in-a-circle' },
                    title: 'Framework Elements',
                    nav: true,
                    auth: false,
                    name: 'home'
                }, {
                    route: '', redirect: 'home'
                }]);
        };
        App.prototype.attached = function () {
            this.evtLogout = aurelia_ui_framework_1.UIEvent.subscribe('logout', this.logout);
        };
        App.prototype.detached = function () {
            this.evtLogout.dispose();
        };
        App.prototype.toggleDir = function () {
            document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
        };
        App.prototype.toggleTheme = function () {
            var css = document.getElementById('baseStyle');
            css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
        };
        App.prototype.logout = function () {
            console.log('Logout');
        };
        return App;
    })();
    exports.App = App;
});
