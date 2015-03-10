var gulp = require('gulp');

gulp.task('lint', function() {
  gulp.start('lint-test', 'lint-client');
});