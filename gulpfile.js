var gulp = require('gulp')
var sass = require('gulp-sass')
var typescript = require('gulp-typescript')
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
   gulp.src('assets/style/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest("./theme/css/"))
})

gulp.task('ts', function () {
   gulp.src("assets/**/*.ts")
   .pipe(typescript('./tsconfig.json'))
   .pipe(uglify())
   .pipe(gulp.dest('./theme/js/'))
})


gulp.task('watch', function () {
   gulp.watch('assets/style/**/*.scss', ['sass'])
   gulp.watch('assets/**/*.ts', ['ts'])
})

gulp.task('default', ['sass', 'ts'])
