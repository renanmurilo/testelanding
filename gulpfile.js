var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Servidor para olhar os HTML/SCSS
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/*.scss'], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Mover JS para src/js
gulp.task('js', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'
    ])
        .pipe(gulp.dest("src/assets/js"))
        .pipe(browserSync.stream());
});

// Compilar o Sass
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'node_modules/animate.css/animate.min.css', 'src/sass/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['js','serve']);