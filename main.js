define(["require", "exports", "./framework/utils/ui-validation"], function (require,
										 exports, ui_validations_1) {
	function configure(aurelia) {
		aurelia.use
			   .standardConfiguration()
			   .developmentLogging()
			   .feature('framework')
			   //.plugin('aurelia-ui-framework')
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
				   setTimeout(function(){splash.parentElement.removeChild(splash);}, 1000);
			   });
	}

	exports.configure = configure;
});
