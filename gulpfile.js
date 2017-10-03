"use strict";

const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();
let reload = browsersync.reload;

gulp.task('reload', () => {
    browsersync.reload();
});
gulp.task('browser-sync', () => {

    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browsersync.stream());
});
gulp.task('default', ['browser-sync'], () => {
    gulp.watch(["app/scss/*.scss", "app/**/*.js", "app/**/*.html"], ['reload', 'sass']);
}
);