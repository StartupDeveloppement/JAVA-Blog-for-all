var gulp = require('gulp');
var uglify = require('gulp-uglify');
//var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer')

gulp.task('build-js', function () {
    browserify({
        entries: './js/app.js',
        extensions: ['.js'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename('appTarget.js'))
        .pipe(gulp.dest('./target/'));
    // .pipe(buffer())
    // .pipe(uglify())
    // .pipe(rename('adapteach.min.js'))
    // .pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('watch-js', function() {
    gulp.watch(['./js/**/*.js', './js/*.js'], ['build-js']);
});

gulp.task('build', ['build-js']);

gulp.task('default', ['build-js', 'watch-js']);