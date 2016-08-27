// Configuration
var packageName = 'ktrtfeed.zip';

var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('package', function() {
    return gulp.src('feed/*.txt')
      .pipe(zip(packageName))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['package']);
