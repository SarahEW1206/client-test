var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync')

var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');


var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var sassSources = './scss/**/*.scss';
var sassOutput = './app/css';
var htmlSource = 'app/**/*.html';


gulp.task('sass', function () {
  return gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassOutput))
    .pipe(browserSync.stream())
});

// gulp.task('browser-sync', ['nodemon'], function () {
//   browserSync({
//     proxy: "localhost:8080",  // local node app address
//     port: 9000,  // use *different* port than above
//     notify: true
//   });
// });

// gulp.task('nodemon', function (cb) {
//   var called = false;
//   return nodemon({
//     script: 'server.js',
//     ignore: [
//       'gulpfile.js',
//       'node_modules/'
//     ]
//   })
//     .on('start', function () {
//       if (!called) {
//         called = true;
//         cb();
//       }
//     })
//     .on('restart', function () {
//       setTimeout(function () {
//         reload({ stream: false });
//       }, 1000);
//     });
// });

gulp.task('default', function () {
  gulp.watch(sassSources, ['sass'])
});
















