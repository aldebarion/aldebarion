var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css');


gulp.task('connect', function() {
  connect.server({
    port: 8080,
    root: ['examples', 'dist', 'src'],
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src('./src/style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('build', ['sass'], function () {
  return gulp.src('./dist/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/style.min.css'));
})

gulp.task('html', function () {
  gulp.src('./examples/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./examples/*.html'], ['html']);
  // gulp.watch(['./src/style/**/*.less'], ['less'])
  gulp.watch(['./src/style/**/*.scss'], ['sass']);
});

gulp.task('start', ['sass', 'connect', 'watch']);
