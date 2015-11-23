var gulp = require('gulp');
var runSequence = require('run-sequence');
var compass = require('gulp-compass'),
	plumber = require('gulp-plumber');
var ts = require('gulp-typescript'),
	merge = require('merge2');
var bundle = require('aurelia-bundler');
var browserSync = require('browser-sync');

var frameworkPath = '~/Workspace/Personal/hmc-aurelia-framework';
gulp.task('copy', function () {
	gulp.src(frameworkPath + '/sass/stylings/*.scss').pipe(gulp.dest('./sass/stylings'));
	gulp.src([frameworkPath + '/helpers/*.ts', '!' + frameworkPath + '/helpers/constants.ts']).pipe(gulp.dest('./helpers'));
	gulp.src(frameworkPath + '/plugins/**/*').pipe(gulp.dest('./plugins'));
	gulp.src(frameworkPath + '/services/*.ts').pipe(gulp.dest('./services'));
});

// SASS/Compass compiler
gulp.task('sass:compile', function (done) {
	return gulp.src('./sass/**/*.scss')
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}
		}))
		.pipe(compass({
			css: 'styles',
			config_file: './sass/compass.rb'
		}));
});


// Typescript Compiler
var tsProject = ts.createProject({
	declaration: true,
	noExternalResolve: true,
	sortOutput: true,
	target: 'ES5',
	module: 'amd',
	noImplicitAny: false,
	removeComments: true,
	emitDecoratorMetadata: true,
	experimentalDecorators: true
});
gulp.task('scripts:compile', function () {
	var tsRoot = gulp.src(['!node_modules/**/*.ts', '!jspm_packages/**/*.ts', '!typings/framework/**/*.d.ts',
			'**/*.ts', 'typings/**/*.d.ts'])
		.pipe(ts(tsProject));

	return merge(
		//tsRoot.dts.pipe(gulp.dest('typings/framework/.')),
		tsRoot.js.pipe(gulp.dest('.')));
});


// Aurelia Bundle
var config = {
	force: true,
	packagePath: '.',
	bundles: {
		"dist/app-build": {
			includes: [
				'main*',
				'src/**/*',
				'plugins/**/*',
				'src/**/*.html!text',
				'plugins/**/*.html!text'
			],
			options: {
				inject: true,
				minify: true
			}
		},
		"dist/aurelia": {
			includes: [
				'jspm_packages/**/aurelia-*',
				'jspm_packages/**/aurelia-validation*/resources/*',
				'jspm_packages/**/jquery*'
			],
			options: {
				inject: true,
				minify: true
			}
		}
	}
};
gulp.task('aurelia:bundle', function() {
	return bundler.bundle(config);
});
gulp.task('aurelia:unbundle', function() {
	return bundler.unbundle(config);
});

gulp.task('bundle', function () {
	return runSequence('sass:compile', 'scripts:compile', 'aurelia:bundle');
});
gulp.task('unbundle', function () {
	return runSequence('aurelia:unbundle');
});

gulp.task('watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass:compile']);
	gulp.watch('**/*.ts', ['scripts:compile']);
});

gulp.task('build', function (callback) {
	return runSequence('sass:compile', 'scripts:compile', callback);
});

gulp.task('serve', ['build'], function (done) {
	browserSync({
		open: false,
		port: 9000,
		server: {
			baseDir: ['.'],
			'middleware': function (req, res, next) {
				res.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	}, done);
});

gulp.task('default', function () {
	process.stdout.write('\n');
	process.stdout.write('Available gulp tasks\n');
	process.stdout.write('\n');
	process.stdout.write('watch - Watch changes for SASS and TypeScript files\n');
	process.stdout.write('build - Compile SASS and TypeScript files\n');
	process.stdout.write('serve - Build and start local web-server\n');
	process.stdout.write('bundle - Bundle aurelia files');
	process.stdout.write('unbundle - Un-Bundle aurelia files\n');
	process.stdout.write('\n');
});