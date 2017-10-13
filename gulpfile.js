var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var tslint = require("gulp-tslint");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', ['clean', 'lint:ts', 'build:ts', 'copy']);

gulp.task('build:ts', function() {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('lint:ts', function() {
    return gulp.src('src/**/*.ts')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});

gulp.task('copy', function() {
    gulp.src('./package.json')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});

gulp.task('default', ['build']);