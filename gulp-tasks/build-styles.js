const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();

const paths = require("./paths");

const buildScss = () => {
  return src(paths.sass.src)
    .pipe(plugins.sass().on("error", plugins.sass.logError))
    .pipe(plugins.autoprefixer()) // Prefix css with older browser support
    .pipe(plugins.cleanCss({ level: 2 })) // Minify css
    .pipe(
      plugins.rename({
        extname: '.min.css'
      })
    )
    .pipe(dest(paths.output.css));
};

module.exports = {
  buildScss
}