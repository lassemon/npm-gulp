var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var extend = require('util')._extend

function build(){
  var bundler = browserify('./app/scripts/app.js');
  buildBundle(bundler);
}

function buildBundle(bundler){
  bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./.tmp'))
}

gulp.task('browserify', function(){
  build();
});

function buildDist(){
  var bundler = browserify('./app/scripts/app.js');
  distBundle(bundler);
}

function distBundle(bundler){
  bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

gulp.task('browserify-dist', function(){
  buildDist();
});

function watchifyBundle(){
  var bundler = browserify('./app/scripts/app.js');
  watchifyBundle(bundler);
}

function initBundleWithWatch(){
  var watchifyBrowserifyOpts = {
    debug: true
  }

  watchifyBrowserifyOpts = extend(watchifyBrowserifyOpts, watchify.args);

  var bundler = watchify(browserify('./app/scripts/app.js', watchifyBrowserifyOpts));

	bundler.on('update', function(){
		watchifyBundle(bundler);
	});
  
  watchifyBundle(bundler);
}

function watchifyBundle(bundler) {
  bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./.tmp/scripts'))
}

gulp.task('browserify-watch', function(){
	initBundleWithWatch();
});

