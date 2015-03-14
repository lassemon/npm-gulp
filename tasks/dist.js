var gulp = require('gulp');

gulp.task('dist', ['default'], function() {
  gulp.start('html-dist', 'styles-dist', 'browserify-dist');
});