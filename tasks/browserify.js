var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');



function initBundle(){
  var bundler = browserify('./app/scripts/app.js');
  bundle(bundler);
}

function initBundleWithWatch(){
  var watchifyBundler = watchify(browserify('./app/scripts/app.js', watchify.args));

	watchifyBundler.on('update', function(){
		bundle(watchifyBundler);
	});
  
  bundle(watchifyBundler);
}

function bundle(watchifyBundler) {
  watchifyBundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./.tmp/scripts'))
}

gulp.task('browserify', function(){
	initBundle()
});

gulp.task('browserify-watch', function(){
	initBundleWithWatch()
});

