const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');
const compass = require('gulp-compass');
const htmlreplace = require('gulp-html-replace');
const del = require('del');
const browserSync = require('browser-sync').create();

function compile(watch) {
  let bundler = watchify(browserify('./src/js/main.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('css', function() {
    return gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
});

// Compile CSS from SCSS compass for development
gulp.task('css-compass', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(compass({
        config_file: 'config.rb',
        css: 'src/css',
        sass: 'src/sass'
      }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('html', function() {
  return gulp.src(['src/*.html'])
    .pipe(htmlreplace({
        'css': 'css/main.css',
        'js': 'js/build.js'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('favicon', function() {
    return gulp.src('src/*.ico')
        .pipe(gulp.dest('dist/'));
});

gulp.task('svg', function() {
    return gulp.src('src/svg/*.*')
        .pipe(gulp.dest('dist/svg'));
});

// Run server for development
gulp.task('serve', function () {
   browserSync.init({
       server: 'dist'
   });
});

gulp.task('clean', function(){
  return del(['dist']);
});

gulp.task('build-js', function() { return compile(); });
gulp.task('watch-js', function() { return watch(); });

gulp.task('default', ['clean', 'build-js', 'html', 'css', 'svg', 'fonts', 'favicon', 'serve']);