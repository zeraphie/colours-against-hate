var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var del = require('del');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var util = require('gulp-util');

var src = 'src';
var dest = 'public/build';

var myPlumber = function() {
    return plumber({
        errorHandler: function(error) {
            util.log(util.colors.red('Unhandled error:\n'), error.toString());
            return this.emit('end');
        }
    });
};

gulp.task('clean:css', function() {
    return del(dest + "/css");
});

gulp.task('css', ['clean:css'], function() {
    return gulp.src(src + "/styles/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [src + "/styles"],
            outputStyle: 'compressed',
            sourceMap: true
        }).on('error', sass.logError))
        .pipe(myPlumber())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest + "/css"));
});

gulp.task('clean:js', function() {
    return del(dest + "/js");
});

gulp.task('js', ['clean:js'], function() {
    return gulp.src([
        // A helper of course!
        src + '/js/dependencies/helper.js',

        // General setup of the app
        src + '/js/dependencies/app.js',

        // Setup chat then all the direct descendants of the folder and then
        // subdescendents
        src + '/js/chat/*.js',
        src + '/js/chat/**/*.js',

        // Setup cards then all the direct descendants of the folder and then
        // subdescendents
        src + '/js/cards/*.js',
        src + '/js/cards/**/*.js',

        // Init!
        src + '/js/client.js'
    ], {
        base: '.'
    }).pipe(babel())
        .pipe(myPlumber())
        .pipe(sourcemaps.init())
        .pipe(concat('master.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest + '/js'));
});

gulp.task('build', ['css', 'js']);

gulp.task('watch', function() {
    gulp.watch(src + '/styles/**', ['css']);
    return gulp.watch(src + '/js/**', ['js']);
});

gulp.task('default', function (cb) {
    return runSequence('build', 'watch', cb);
});
