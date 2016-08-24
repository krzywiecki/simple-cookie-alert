var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

gulp.task('uglify', function() {
    gulp.src('./simple-cookie-alert.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['uglify'], function() { });