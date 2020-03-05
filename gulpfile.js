  
const {src, dest, watch}= require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer');


// Static server
 function bs() {
   servseSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", servseSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
 function servseSass() {
  return src("./sass/**/*.sass")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

exports.serve = bs;