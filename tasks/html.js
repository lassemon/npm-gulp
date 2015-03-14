var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');

gulp.task('html-dist', function () {

return gulp.src('./app/*.html')
    .pipe(minifyHtml({conditionals: true, loose: true}))
    .pipe(gulp.dest('./dist'));
});