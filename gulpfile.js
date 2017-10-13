"use strict";

let gulp = require('gulp');
let sass = require('gulp-sass');
let browsersync = require('browser-sync').create();

gulp.task('server',['sass'], () => {

    browsersync.init({
        server:  "./"
    });
     gulp.watch("app/**/*.scss", [ 'sass']);
     gulp.watch(["app/**/*.js","app/**/*.scss", "app/**/*.html","./*.html"]).on('change',browsersync.reload);
});

gulp.task('sass', function () {
    return gulp.src("app/css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browsersync.stream());
});

gulp.task('default', ['server']);

