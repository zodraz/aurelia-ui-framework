import {UIUtils, UIEvent, AuthInterceptor, UIApplication} from "aurelia-ui-framework";
import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";
import './highlight';

@autoinject()
export class App {
  private router: Router;

  configureRouter(config, router: Router) {
    this.router = router;
    config.title = 'Aurelia UI Framework';
    config.options.showLogo = true;
    config.options.showAuthentication = true;
    config.addPipelineStep('authorize', AuthInterceptor);
    config.map([{
      route: 'login',
      moduleId: './login/view',
      nav: false,
      auth: false,
      isLogin: true,
      name: 'login'
    }, {
        route: 'home',
        moduleId: './home/view',
        settings: { sectionTitle: 'Aurelia UI Framework', icon: 'fi-material-window-with-different-sections' },
        title: 'Framework Elements',
        nav: true,
        auth: false,
        name: 'home'
      }, {
        route: 'colors',
        moduleId: './home/colors',
        settings: { icon: 'fi-material-painter-palette' },
        title: 'Copic Colors',
        nav: true,
        auth: false,
        name: 'colors'
      }, {
        route: 'readme',
        moduleId: './home/readme',
        settings: { icon: 'fi-vaadin-open-book' },
        title: 'ReadMe',
        nav: true,
        auth: false,
        name: 'readme'
      }, {
        route: 'todo',
        moduleId: './home/todo',
        settings: { icon: 'fi-vaadin-tasks' },
        title: 'ToDo',
        nav: true,
        auth: false,
        name: 'todo'
      }, {
        route: 'core',
        moduleId: './core/view',
        settings: { icon: 'fi-vaadin-viewpoint', sectionStart: true },
        title: 'Core Elements',
        nav: true,
        auth: false,
        name: 'core'
      }, {
        route: 'components',
        moduleId: './components/view',
        settings: { icon: 'fi-vaadin-modal-list' },
        title: 'Components',
        nav: true,
        auth: false,
        name: 'components'
      }, {
        route: 'inputs',
        moduleId: './inputs/view',
        settings: { icon: 'fi-vaadin-input' },
        title: 'Input Elements',
        nav: true,
        auth: false,
        name: 'inputs'
      }, {
        route: 'utils',
        moduleId: './utils/view',
        settings: { icon: 'fi-vaadin-tools' },
        title: 'Utility Classes',
        nav: true,
        auth: false,
        name: 'utils'
      }, {
        route: '', redirect: 'home'
      }]);
  }

  constructor(appState: UIApplication) {
    appState.IsAuthenticated = true;
  }

  toggleDir() {
    document.body.dir = document.body.dir == 'rtl' ? 'ltr' : 'rtl';
  }

  toggleTheme() {
    let css = document.getElementById('baseStyle') as HTMLLinkElement;
    css.href = css.href.indexOf('light') == -1 ? 'styles/app-light.css' : 'styles/app-dark.css';
  }
}
