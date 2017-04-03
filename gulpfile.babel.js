const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
// Build asset pipeline
gulp.task('build', (callback) => {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback,
  );
});
// Dev pipeline
gulp.task('default', (callback) => {
  runSequence(['sass', 'browserSync', 'watch'],
    callback,
  );
});
// Sass compilation
gulp.task('sass', () => {
  gulp.src('public/assets/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});
// Browser sync
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'public',
    },
  });
});
// File minification
gulp.task('useref', () => {
  gulp.src('public/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify({ mangle: false })))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});
// Image optimisation
gulp.task('images', () => {
  gulp.src('public/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'));
});
// Fonts
gulp.task('fonts', () => {
  gulp.src('public/assets/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});
// File watchers
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('public/assets/scss/**/*.scss', ['sass']);
  gulp.watch('public/*.html', browserSync.reload);
  gulp.watch('public/assets/js/**/*.js', browserSync.reload);
  gulp.watch('public/app/**/*.js', browserSync.reload);
});
// Cleaning generated files
gulp.task('clean:dist', () => {
  del.sync('dist');
});
// Cache clearing
gulp.task('cache:clear', (callback) => {
  cache.clearAll(callback);
});
