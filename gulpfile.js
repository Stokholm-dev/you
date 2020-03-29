const gulp = require("gulp"); // import gulp
const sass = require("gulp-sass"); //Import gulp sass

// #region Tasks
gulp.task("styles", function() {
  gulp
    //1. source files
    .src("./src/scss/style.scss")
    //2.run through sass
    .pipe(sass().on("error", sass.logError))
    //3. return css file in root folder
    .pipe(gulp.dest("./src/"));
});

gulp.task("watch", function() {
  //watching changes in the scss files. If there is a change, the styles task is called. 
  gulp.watch("./src/scss/**/*.scss", ["styles"]); 
}); 
// #endregion
