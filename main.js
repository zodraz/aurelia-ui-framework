define(["require", "exports"], function (require,
										 exports) {
	function configure(aurelia) {
		aurelia.use
			   .standardConfiguration()
			   .developmentLogging()
			   .feature('framework')
			   .plugin('aurelia-validation', function (config) {
			   });

		aurelia.start()
			   .then(function (a) {
				   return a.setRoot('./app/app.js');
			   })
			   .then(function () {
				   var splash = window.document.querySelector('.ui-splash');
				   splash.classList.add('animate');
				   setTimeout(function(){splash.parentElement.removeChild(splash);}, 1000);
			   });
	}

	exports.configure = configure;
});
