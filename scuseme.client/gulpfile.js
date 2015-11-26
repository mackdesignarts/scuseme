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
var rename = require("gulp-rename");

// Paths
gulp.paths = {
    src: "./public",
    dest: "../scuseme.web/Content/",
    bower: './bower_components',
    razor: '../scuseme.web/Views/Home/'
}
var paths = gulp.paths;

// Register 
var build = [
	'concatStyle',
	'concatVendorStyle',
	'concatScripts',
    'concatVendorScripts',
	'copyImages',
	'copyIndex',
    'copyHtml',
    'copyFonts'
];

var vendorCss = [
    paths.bower + '/jquery-ui/themes/base/jquery-ui.css',
    paths.bower + '/bootstrap/dist/css/bootstrap.css',
    paths.bower + '/toastr/toastr.css'
];

var vendorJs = [
    paths.bower + '/jquery/jquery.js',
    paths.bower + '/jquery-ui/jquery-ui.js',
    paths.bower + '/angular/angular.js',
    paths.bower + '/angular-cookies/angular-cookies.js',
    paths.bower + '/angular-ui-router/release/angular-ui-router.js',
    paths.bower + '/angular-bootstrap/ui-bootstrap-tpls.js',
    paths.bower + '/bootstrap/dist/js/bootstrap.js',
    paths.bower + '/toastr/toastr.js'
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

gulp.task('copyImages', function () {
    return gulp.src(paths.src + '/assets/images/*.*')
    .pipe(gulp.dest(paths.dest + '/images'));
});

gulp.task('copyIndex', function () {
    return gulp.src(paths.src + '/index.html')
    .pipe(rename("Index.cshtml"))
    .pipe(gulp.dest(paths.razor));
});

gulp.task('copyHtml', function () {
    return gulp.src(paths.src + '/app/**/*.html')
    .pipe(gulp.dest(paths.dest));
});

gulp.task('copyFonts', function () {
    return gulp.src([
        paths.bower + '/font-awesome/fonts/**/*.*',
        paths.bower + '/bootstrap/fonts/**/*.*',
        paths.src + '/assets/fonts/*.*'
    ])
    .pipe(gulp.dest(paths.dest + '/fonts'));
});

// Build
gulp.task('default', build);

gulp.task('build', build);
