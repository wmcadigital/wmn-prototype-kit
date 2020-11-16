const { src } = require("gulp");
const plugins = require("gulp-load-plugins")();

const paths = require("./paths.js");

const lintStyles = () => {
  return src(paths.sass.src)
  .pipe(plugins.stylelint({
      failAfterError: false,
      fix: true,
      reporters: [{ formatter: "string", console: true }],
    })
  );
};

module.exports = {
  lintStyles
}
