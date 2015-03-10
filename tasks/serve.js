var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', ['styles'], function () {
  browserSync({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['.tmp', 'app'],
    }
    
  });

  gulp.watch([
    './app/*.html',
    './app/scripts/**/*.js',
    './app/images/**/*',
    './.tmp/**/*'
  ]).on('change', reload);

  gulp.watch('./app/styles/**/*.scss', ['styles']);
  gulp.watch('./app/**/*.js', ['lint-client']);
  gulp.watch('./test/**/*.js', ['lint-test']);
});