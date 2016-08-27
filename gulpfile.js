// --- CONFIGURE HERE ---
// Name of the generated package
var packageName = 'ktrtfeed.zip';

var gulp = require('gulp'),
  zip = require('gulp-zip'),
  exec = require('child_process').execFile;

gulp.task('validate', function(cb) {
  exec("python", ['validator/feedvalidator.py', '-n', '-o', 'validator/report.html', 'feed/'], function(err, stdout, stderr) {
    if ((err !== null) || (stdout.indexOf("ERROR:") !== -1)) {
      console.error(stdout);
      cb("GTFS feed validation failed!");
    }
  });
});

gulp.task('package', ['validate'], function() {
    return gulp.src('feed/*.txt')
      .pipe(zip(packageName))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  gulp.start('validate', 'package');
});
