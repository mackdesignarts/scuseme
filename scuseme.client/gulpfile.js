/** 
 * scuseme gulp 
 * @summary Target directory -> /build
 */

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var sourceMaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var through = require('through2');
var minifyHtml = require('gulp-minify-html');
var templateCache = require('gulp-angular-templatecache');
var addSrc = require('gulp-add-src');
var del = require('del');

// Paths
gulp.paths = {
    src: "./public",
    dest: "../scuseme.web/Content/",
    bower: './bower_components'
}
var paths = gulp.paths;

// Register 
var build = [
    'clean',
	'concatStyle',
	'concatVendorStyle',
	'concatScripts',
    'concatVendorScripts',
    'copyLazyLoadedPlugins',
	'copyImages',
	'copyIndex',
	'copyBrowserJs',
    'copyHtml',
    'copyFonts'
];

var vendorCss = [
    paths.bower + '/jquery-ui/themes/base/jquery-ui.css',
    paths.bower + '/bootstrap/dist/css/bootstrap.css',
    paths.bower + '/PACE/themes/green/pace-theme-barber-shop.css',
    paths.src + '/vendor/style/animate.css',
    paths.src + '/vendor/style/style.css',
    paths.src + '/vendor/style/style-responsive.css',
    paths.src + '/vendor/style/theme.css',
    paths.bower + '/angular-xeditable/dist/css/xeditable.css',
    paths.bower + '/toastr/toastr.css',
    paths.bower + '/select2/select2.css'
];

var vendorJs = [
    paths.bower + '/PACE/pace.js',
    paths.bower + '/jquery/jquery.js',
    paths.bower + '/jquery-ui/jquery-ui.js',
    paths.bower + '/angular/angular.js',
    paths.bower + '/angular-cookies/angular-cookies.js',
    paths.bower + '/angular-ui-router/release/angular-ui-router.js',
    paths.bower + '/angular-bootstrap/ui-bootstrap-tpls.js',
    paths.bower + '/oclazyload/dist/ocLazyLoad.js',
    paths.bower + '/bootstrap/dist/js/bootstrap.js',
    paths.bower + '/bootstrap/js/popover.js',
    paths.src + '/vendor/jquery-poshytip/jquery-poshytip.js',
    paths.bower + '/angular-xeditable/dist/js/xeditable.js',
    paths.bower + '/ng-file-upload/ng-file-upload-all.js',
    paths.bower + '/toastr/toastr.js',
    paths.bower + '/select2/select2.js',
    paths.bower + '/angular-ui-select3/src/select3.js'
];

var lazyLoaded = [
    paths.bower + '/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
    paths.bower + '/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
    paths.bower + '/gritter/css/jquery.gritter.css',
    paths.bower + '/gritter/js/jquery.gritter.js',
    paths.bower + '/Flot/jquery.flot.js',
    paths.bower + '/Flot/jquery.flot.time.js',
    paths.bower + '/Flot/jquery.flot.resize.js',
    paths.bower + '/Flot/jquery.flot.pie.js',
    paths.bower + '/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
    paths.bower + '/DataTables/media/css/dataTables.bootstrap.css',
    paths.src + '/vendor/DataTables/*.*',
    paths.bower + '/DataTables/media/js/jquery.dataTables.js',
    paths.bower + '/DataTables/media/js/dataTables.bootstrap.min.js'
];

// Tasks
gulp.task('concatStyle', function () {
    return gulp.src([paths.src + '/assets/style/**/*.css', '!' + paths.src + '/assets/style/app.css'])
	.pipe(addSrc.append(paths.src + '/assets/style/app.css'))
    .pipe(concatCss('app.css'))
	.pipe(csso())
    .pipe(gulp.dest(paths.dest + '/style'));
});

gulp.task('concatVendorStyle', function () {
    return gulp.src(vendorCss)
    .pipe(concatCss('vendor.css'))
	//.pipe(csso())
    .pipe(gulp.dest(paths.dest + '/style'));
});

gulp.task('concatScripts', function () {
    return gulp.src([paths.src + '/app/**/*.js', '!' + paths.src + '/app/app.js'])
	.pipe(addSrc.prepend(paths.src + '/app/app.js'))
	.pipe(addSrc.append(paths.src + '/app/init.js'))
    .pipe(concat("app.js"))
	//.pipe(uglify())
    .pipe(gulp.dest(paths.dest + '/js'));
});

gulp.task('concatVendorScripts', function () {
    return gulp.src(vendorJs)
    .pipe(concat("vendor.js"))
	//.pipe(uglify())
    .pipe(gulp.dest(paths.dest + '/js'));
});

gulp.task('copyLazyLoadedPlugins', function () {
    return gulp.src(lazyLoaded)
    .pipe(gulp.dest(paths.dest + '/js'));
});

gulp.task('copyImages', function () {
    return gulp.src(paths.src + '/assets/images/*.*')
    .pipe(gulp.dest(paths.dest + '/images'));
});

gulp.task('copyIndex', function () {
    return gulp.src(paths.src + '/index.html')
    .pipe(gulp.dest(paths.dest));
});

gulp.task('copyBrowserJs', function () {
    return gulp.src(paths.src + '/vendor/crossbrowserjs/**/*.js')
    .pipe(gulp.dest(paths.dest + '/js'));
});

gulp.task('copyHtml', function () {
    return gulp.src(paths.src + '/app/**/*.html')
    .pipe(gulp.dest(paths.dest));
});

gulp.task('copyFonts', function () {
    return gulp.src([paths.bower + '/font-awesome/fonts/**/*.*', paths.bower + '/bootstrap/fonts/**/*.*'])
    .pipe(gulp.dest(paths.dest + '/fonts'));
});

gulp.task('clean', function (done) {
    del([paths.dist + '/**/*'], { force: true });
});

// Build
gulp.task('default', build);

gulp.task('build', build);
