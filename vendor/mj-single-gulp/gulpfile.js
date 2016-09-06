var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    jshint = require("gulp-jshint");

var dist_path = '../../lib';
// var dist_path = './';

gulp.task('cssstyle', function() {// cssstyle/lib/parsers.js
  return gulp.src("node_modules/cssstyle/lib/parsers.js")
             .pipe(uglify())
             .pipe(gulp.dest(dist_path + '/dist/patch/cssstyle/lib'));
});

gulp.task('jsdom', function() {
  return gulp.src("node_modules/mathjax-node/lib/patch/jsdom.js")
             .pipe(uglify())
             .pipe(gulp.dest(dist_path + '/dist/patch'));
});

// gulp.task('jsdom', function() {
//   return gulp.src("node_modules/jsdom/*.js")
//              .pipe(uglify())
//              .pipe(gulp.dest(dist_path + '/dist/'));
// });

gulp.task('scripts', function() {
  return gulp.src("node_modules/mathjax-node/lib/mj-single.js")
             .pipe(uglify())
             .pipe(gulp.dest(dist_path + '/dist/'));
});

gulp.task("default",["cssstyle", "jsdom", "scripts"]);
