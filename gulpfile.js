//import source function, destination function, watch function, and series function from gulp function
const { src, dest, watch, series } = require('gulp');

//import the gulp sass plugin we installed
const sass = require('gulp-sass')(require('sass'));

//compile sass
function buildStyles() {
  //take in a source sass file
  //compile it into a css file
  //pipe it to destination folder
  return src('library/**/*.scss').pipe(sass()).pipe(dest('css')); //1.'**' means any subfolder, so it's going to find any sass file or any subfolder with a sass file inside. 2.如果只有一個sass檔案要compile，可以寫'檔名.scss'。有很多檔案則寫成'*.scss'。
}

//actively watch our source sass file and automatically run buildStyle function when we save sass files
function watchTask() {
  watch(['library/**/*.scss'], buildStyles);
}

//export and run a series of functions
exports.default = series(buildStyles, watchTask);
