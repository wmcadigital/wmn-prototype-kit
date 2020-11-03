const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();
// Local
const paths = require("./paths");

module.exports.buildHtml = () => {
  return src(paths.njk.pageSrc)
    .pipe(
      plugins.nunjucksRender({
        path: [paths.njk.srcDir, paths.wmnds.srcDir],
        watch: true,
      })
    )
    .pipe(plugins.formatHtml())
    .pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(dest(paths.output.html));
};
