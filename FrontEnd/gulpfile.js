var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {}
  });

  gulp.watch("./styles/*.scss", ['sass']);
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("./styles/**/*.scss")
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
