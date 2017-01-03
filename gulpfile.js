var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
   gulp.src('_src/style/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest("./theme/css/"))
})

gulp.task('watch', function () {
   gulp.watch('_src/style/**/*.scss', ['sass'])
})

gulp.task('default', ['sass'])
