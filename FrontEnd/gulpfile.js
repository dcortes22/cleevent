var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var source = 'styles/',
    dest = 'dist/';

// Bootstrap scss source
var bootstrapSass = {
  in: './node_modules/bootstrap-sass/'
};

// Bootstrap fonts source
// var fonts = {
//   in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
//   out: dest + 'fonts/'
// };

// Our scss source folder: .scss files
var scss = {
  in: source + 'general.scss',
  out: dest + 'css/',
  watch: source + 'styles/**/*',
  sassOpts: {
    outputStyle: 'nested',
    precison: 3,
    errLogToConsole: true,
    includePaths: [bootstrapSass.in + 'assets/stylesheets']
  }
};

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {}
  });

  gulp.watch("styles/*.scss", ['sass']);
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src(scss.in)
    .pipe(sass(scss.sassOpts))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(scss.out))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
