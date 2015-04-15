var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var vendor = require('gulp-concat-vendor');
var htmlreplace = require('gulp-html-replace');
var sass = require('gulp-sass');
var jest = require('gulp-jest');


var path = {
  SRC: 'src',
  TEST: 'test',
  SASS: 'src/style',
  HTML: 'src/index.html',
  ALL: ['src/components/*.js', 'src/components/**/*.js', 'src/index.html', 'src/style/*.scss'],
  JS: ['src/components/*.js', 'src/components/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_CSS: 'dist/src/css',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('sass', function () {
    gulp.src(path.SASS + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(path.DEST_CSS));
});

 
gulp.task('jest', function () {
  console.log("jest");
     gulp.src('__tests__').pipe(jest({
        scriptPreprocessor: "../node_modules/gulp-jest/preprocessor.js",
        unmockedModulePathPatterns: [
            "node_modules/react"
            ]
    }));
});

gulp.task('scripts', function() {
  gulp.src(['./bower_components/react/react.js'])
  .pipe(vendor('vendor.js'))
  .pipe(gulp.dest(path.DEST_SRC));  
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform','sass', 'scripts', 'copy']);
});

gulp.task('build',['transform', 'sass', 'scripts', 'copy']);
gulp.task('default', ['build', 'watch']);
gulp.task('test', ['build', 'jest']);
