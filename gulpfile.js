'use strict';

var gulp = require('gulp'),
    browserSync    = require('browser-sync').create(),
    clean          = require('gulp-clean'),
    sass           = require('gulp-sass'),
    minify         = require('gulp-minify'),
    typescript     = require('gulp-typescript'),
    concat         = require('gulp-concat'),

//localVariables
    partialsPath   = 'app/src/partials',
    pathJS         = 'app/src/js',
    pathHtml       =  '*.html',


//oder to compress js files
    build_js       = ['app/src/js/core/*/*.module.js', 'app/src/js/core/*/*.directive.js', 'app/src/js/core/**/*.js'];

gulp.task('clean', function () {
  return gulp.src('app/dist/*.*', {read: false})
    .pipe(clean());
});


gulp.task('sass', function() {  
    return gulp.src("app/src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('copy_vendor', function() {
  gulp.src(['app/src/js/vendor/*.js']) //select all javascript files under js/ and any subdirectory
    /*.pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))*/
    .pipe(gulp.dest('app/dist/js/vendor'))
});

gulp.task('copy_templates', function() {
  gulp.src(['app/src/templates/*.html'])
    .pipe(gulp.dest('app/dist/templates'))
});

gulp.task('copy_data', function() {
  gulp.src(['app/src/data/*.json'])
    .pipe(gulp.dest('app/dist/data'))
});

gulp.task('copy_img', function() {
  gulp.src(['app/src/img/*'])
    .pipe(gulp.dest('app/dist/img'))
});

gulp.task('compress', function() {
  gulp.src(build_js) //select all javascript files under js/ and any subdirectory
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/dist/js'))
});

// compile html without any other module help
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/*.html')
    .pipe(gulp.dest('app/dist'))
    .pipe(browserSync.stream());
});

// Static Server + watching /html files
gulp.task('serve', ['clean' , 'sass', 'copy_vendor', 'copy_templates', 'copy_data', 'copy_img', 'compress', 'compile'], function() {

    browserSync.init({
        server: "./app/dist"
    });

    gulp.watch("app/src/scss/**", ['sass']);
    gulp.watch("app/src/templates/**", ['copy_templates']);
    gulp.watch("app/*.html", ['compile']);
    gulp.watch("app/src/js/**/*.js", ['compress']);
    gulp.watch("app/src/**").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);