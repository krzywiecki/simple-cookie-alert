var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('uglify', function() {
    gulp.src('./simple-cookie-alert.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./'))
});

gulp.task('sass', function() {
    gulp.src('./styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./styles/'))
});

gulp.task('watch', function() {
    gulp.watch('./styles/*.scss', ['sass']);
});

gulp.task('default', ['uglify', 'sass'], function() { });