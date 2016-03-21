define(["require", "exports", "./framework/utils/ui-validation"], function (require,
																			exports,
																			ui_validations_1) {
	function configure(aurelia) {
		aurelia.use
			   .standardConfiguration()
			   .developmentLogging()
			   //.plugin('aurelia-ui-framework', function (config) {
			   .feature('framework', function (config) {
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
					   'X-API-VERSION': '1'
				   };
				   // HTTPClient Send Basic Authorization Header
				   config.Http.AuthorizationHeader = false;
			   })
			   .plugin('aurelia-validation', function (config) {
				   config.useViewStrategy(new ui_validations_1.UIValidationStrategy());
			   });

		aurelia.start()
			   .then(function (a) {
				   return a.setRoot('./src/app.js');
			   })
			   .then(function () {
				   var splash = window.document.querySelector('.ui-splash');
				   splash.classList.add('animate');
				   setTimeout(function () {
					   splash.parentElement.removeChild(splash);
				   }, 1000);
			   });
	}

	exports.configure = configure;
});
