"use strict";

var gulp      = require('gulp');
var sass      = require('gulp-sass');
var csso      = require('gulp-csso');
var uglify    = require('gulp-uglify');
var concat    = require('gulp-concat');
var prefixer  = require('gulp-autoprefixer');
var del       = require('del');

gulp.task('clean', function(cb){
  del(['build'], cb);
});

gulp.task('js', function(){
  return gulp.src('./src/js/app.js')
  .pipe(uglify())
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('scssbreakpoints', function(){
  return gulp.src('./src/scss/breakpoints/**.scss')
  .pipe(sass({
    style : 'compressed'
  }))
  .pipe(csso())
  .pipe(gulp.dest('./build/css/'));
})

gulp.task('scssmain', function(){
  return gulp.src('./src/scss/app.scss')
  .pipe(sass({

  }))
  // .pipe(prefixer({
  //   browsers : ['last 2 versions']
  // }))
  .pipe(csso())
  .pipe(gulp.dest('./build/css/'));
});

gulp.task('img', function(){
  return gulp.src('./src/img/**')
  .pipe(gulp.dest('./build/img/'));
});

gulp.task('watch', function(){
  gulp.watch('./src/js/', ['js']);
  gulp.watch('./src/scss/**/_*.scss', ['scssmain']);
  gulp.watch('./src/scss/breakpoints/*.scss', ['scssbreakpoints']);
  gulp.watch('./src/img/**', ['img']);
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/webfonts/', ['webfonts']);
});

gulp.task('html', function(){
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./build/'));
});

gulp.task('webfonts', function(){
  return gulp.src('./src/webfonts/**/*')
  .pipe(gulp.dest('./build/webfonts'));
});

gulp.task('default', ['clean', 'watch', 'js', 'scssmain', 'scssbreakpoints', 'img', 'html', 'webfonts']);
