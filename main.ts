import {Aurelia} from "aurelia-framework";
import {UIValidationStrategy} from "aurelia-ui-framework";

export function configure(aurelia:Aurelia) {
  aurelia.use
    .standardConfiguration()
    // .developmentLogging()
    .plugin('aurelia-ui-framework', function (config) {
      // AppKey for local/session storage key prefix
      config.App.Key = 'App';
      // Application Title
      config.App.Title = 'Aurelia UI Framework';
      // Application Version
      config.App.Version = '2.00';

      // HTTPClient Base API URL
      config.Http.BaseUrl = './';
      // HTTPClient Extra Headers
      config.Http.Headers = {
        'X-API-VERSION': '2'
      };
      // HTTPClient Send Basic Authorization Header
      config.Http.AuthorizationHeader = true;
    })
    .plugin('aurelia-validation', function (config) {
      config.useViewStrategy(new UIValidationStrategy());
    });



  aurelia.start()
    .then(a=>{
      return a.setRoot('./src/app.js');
    })
    .then(()=>{
      var splash = window.document.querySelector('.ui-splash');
      splash.classList.add('animate');
      setTimeout(()=>{
        splash.parentElement.removeChild(splash);
      }, 1000);
    })
    .catch(e=>{
      console.log(e);
    });
}
