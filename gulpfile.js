// --- CONFIGURE HERE ---
// Name of the generated package
var packageName = 'ktrtfeed.zip';

var gulp = require('gulp'),
  zip = require('gulp-zip'),
  exec = require('child_process').execFile,
  fileProcess = require('gulp-file-process'),
  util = require('gulp-util'),
  gtfs2geojson = require('gtfs2geojson'),
  fs = require('fs'),
  del = require('del');

gulp.task('clean', function() {
    return del([
      'dist/**/*',
      'geojson/**/*'
    ]);
});

gulp.task('validate', function(cb) {
  exec("python", ['validator/feedvalidator.py', '-n', '-o', 'dist/validator-report.html', 'feed/'], function(err, stdout, stderr) {
    if (stdout.indexOf(" error") !== -1) {
      stdout.split("\n").forEach((line) => util.log(line));
      cb("GTFS feed validation failed!");
    }

    if (stdout.indexOf(" warning") !== -1) {
      util.log("Validation passed but warnings occured. See dist/validator-report.html for details!");
    }
  });
});

gulp.task('package', ['validate'], function() {
    return gulp.src('feed/*.txt')
      .pipe(zip(packageName))
      .pipe(gulp.dest('dist'));
});

gulp.task('geojson', function(cb) {
  gulp.src('feed/stops.txt')
    .pipe(fileProcess({
      process: function(file, content) {
        var result = gtfs2geojson.stops(content);
        fs.writeFileSync('geojson/stops.geojson', JSON.stringify(result, null, 2));
      }
    }));

    return cb();
});

gulp.task('default', function() {
  gulp.start('validate', 'clean', 'package');
});
