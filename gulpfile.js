"use strict";

const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browsersync.init({
       server: {
            baseDir: "./"
        }
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.js").on('change', browsersync.reload)
    gulp.watch("app/*.html").on('change', browsersync.reload);
});

gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browsersync.stream());
});


gulp.task('default', ['serve']);