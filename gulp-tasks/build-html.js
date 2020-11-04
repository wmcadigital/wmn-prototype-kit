const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();

const paths = require("./paths");

const buildHtml = () => {
  return src(paths.njk.pageSrc)
    .pipe(
      plugins.nunjucksRender({
        path: [paths.njk.srcDir, paths.wmnds.njk.srcDir],
        watch: true,
      })
    )
    .pipe(plugins.replace(/(\w+=\")\//g, '$1./')) // Replace '/' with './' - fix for gh-pages deploy
    .pipe(plugins.formatHtml())
    .pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(dest(paths.output.html));
};

module.exports = {
  buildHtml
}