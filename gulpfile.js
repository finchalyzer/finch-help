var gulp = require('gulp')
var sass = require('gulp-sass')
var typescript = require('gulp-typescript')

gulp.task('sass', function () {
   gulp.src('_src/style/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest("./theme/css/"))
})

gulp.task('ts', function () {
   gulp.src("_src/**/*.ts")
   .pipe(typescript('./tsconfig.json'))
   .pipe(gulp.dest('./theme/js/'))
})


gulp.task('watch', function () {
   gulp.watch('_src/style/**/*.scss', ['sass'])
   gulp.watch('_src/**/*.ts', ['ts'])
})

gulp.task('default', ['sass', 'ts'])
