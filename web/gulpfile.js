var gulp = require('gulp');
var uglify = require('gulp-uglify');
//var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

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

gulp.task('build-css', function () {
    return gulp.src('./js/**/*.css')
        .pipe(concat('appTarget.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./target/'))

});

gulp.task('watch-css', function() {
    gulp.watch(['./js/**/*.css', './js/*.css'], ['build-css']);
});


gulp.task('build-medium-js', function() {
    return gulp.src('./mediumNotMinify/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./medium_editor/'));
});

gulp.task('build-medium-css', function () {
    return gulp.src('./mediumNotMinify/**/*.css')
        .pipe(concat('mediumTarget.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./medium_editor/'))
});

gulp.task('build-overwrite-bootstrap-css', function () {
    return gulp.src('./bootstrap-overwrite/**/*.css')
        .pipe(concat('overwriteBootstrapTarget.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./target/'))
});

gulp.task('watch-overwrite-bootstrap-css', function() {
    gulp.watch(['./bootstrap-overwrite/**/*.css', './bootstrap-overwrite/*.css'], ['build-overwrite-bootstrap-css']);
});

gulp.task('default', ['build-js', 'watch-js', 'build-css', 'build-medium-js', 'build-medium-css', 'watch-css','build-overwrite-bootstrap-css','watch-overwrite-bootstrap-css']);