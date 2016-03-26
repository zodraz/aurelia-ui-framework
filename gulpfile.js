var gulp = require('gulp');
var runSequence = require('run-sequence');
var compass = require('gulp-compass'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename');
var ts = require('gulp-typescript');
var bundler = require('aurelia-bundler');
var browserSync = require('browser-sync');

var pages = '../auf-pages/v2';
var release = '../auf-release';
var skeleton = '../auf-skeleton';

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
									 declaration: false,
									 noExternalResolve: true,
									 sortOutput: true,
									 target: 'ES5',
									 module: 'commonjs',
									 noImplicitAny: false,
									 removeComments: true,
									 emitDecoratorMetadata: true,
									 experimentalDecorators: true
								 });
gulp.task('scripts:compile', function () {
	var tsRoot = gulp.src([
							  './jspm_packages/npm/aurelia-*/*.d.ts',
							  './framework/**/*.ts',
							  './src/**/*.ts'], {base: './'})
					 .pipe(ts(tsProject));

	return tsRoot.js.pipe(gulp.dest('.'));
});


// Aurelia Bundle
var config = {
	force: true,
	packagePath: '.',
	bundles: {
		"dist/demo": {
			includes: [
				'main',
				'./src/**/*.js',
				'./src/**/*.html!text',
				'./framework/**/*.js',
				'./framework/**/*.html!text',
				'./jspm_packages/**/aurelia-*.js',
				'./jspm_packages/**/aurelia-validation*/resources/*.js'
			],
			options: {
				inject: true,
				minify: true
			}
		}
	}
};
gulp.task('aurelia:bundle', function () {
	return bundler.bundle(config);
});
gulp.task('aurelia:unbundle', function () {
	return bundler.unbundle(config);
});
gulp.task('readme:copy', function () {
	return gulp.src(['./framework/**/*.md'], {base: './framework'})
			   .pipe(gulp.dest('./src'));
});
gulp.task('aurelia:pages', function () {
	return gulp.src([
						'./index.html',
						'./config.js',
						'./jspm_packages/system*',
						'./*.md',
						'./fonts/**/*',
						'./styles/**/*',
						'./images/**/*',
						'./dist/**/demo.js'], {base: './'})
			   .pipe(gulp.dest(pages));
});
gulp.task('aurelia:skeleton', function () {
	return gulp.src([
						'./index.html',
						'./browserconfig.xml',
						'./manifest.json',
						'./*.md',
						//'./src/**/*.ts',
						//'./src/**/*.html',
						'./fonts/**/*',
						'./images/**/*',
						'./styles/**/*'], {base: './'})
			   .pipe(gulp.dest(skeleton));
});
gulp.task('aurelia:release', function () {
	gulp.src(['./package.json', './sass/**/_*.scss'], {base: './'})
		.pipe(gulp.dest(release));
	gulp.src(['./framework/*/*.js', './framework/*/*.html', './framework/**/*.d.ts'])
		.pipe(gulp.dest(release));
	gulp.src("./framework/index.js")
		.pipe(rename("aurelia-ui-framework.js"))
		.pipe(gulp.dest(release));
	return;
});

gulp.task('watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass:compile']);
	gulp.watch('./src/**/*.ts', ['scripts:compile']);
	gulp.watch('./framework/**/*.ts', ['scripts:compile']);
});

gulp.task('build', function () {
	runSequence('sass:compile', 'scripts:compile');
});

gulp.task('production', function () {
	runSequence('sass:compile', 'scripts:compile', 'readme:copy', 'aurelia:bundle', 'aurelia:pages', 'aurelia:skeleton', 'aurelia:release', 'aurelia:unbundle');
});

gulp.task('serve', ['build'], function (done) {
	browserSync({
					open: false,
					port: 9000,
					server: {
						baseDir: ['.'],
						'middleware': function (req,
												res,
												next) {
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
	process.stdout.write('production - Bundle aurelia files into distribution folder');
	process.stdout.write('\n');
});
