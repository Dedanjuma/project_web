const gulp = require('gulp')
gulp.task('copyHTML', function(){return gulp.src('*.html')
.pipe(gulp.dest('/html')})
