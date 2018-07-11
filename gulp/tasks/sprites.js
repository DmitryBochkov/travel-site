var gulp = require('gulp'),
    rename = require('gulp-rename'),
    svgSprite = require('gulp-svg-sprite');

var config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite'))
});

gulp.task('copySpriteCSS', function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprie.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});
