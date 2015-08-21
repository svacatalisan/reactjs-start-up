var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
    var bundler = browserify({
        entries: ['./app/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
    // This is where you add uglifying etc.
        .pipe(gulp.dest('./public/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/'));
});

// I added this so that you see how to run two watch tasks
gulp.task('css', function () {
    gulp.watch('styles/**/*.css', function () {
        return gulp.src('styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/'));
    });
});

gulp.task('default', ['scripts', 'css']);

