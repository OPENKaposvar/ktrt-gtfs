var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('package', function() {
    return gulp.src('feed/*.txt')
      .pipe(zip('ktrtfeed.zip'))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['package']);
