var gulp = require('gulp');

gulp.task('dist', ['default'], function() {
  gulp.start('browserify');
});