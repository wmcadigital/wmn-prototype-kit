const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();
const gitRepoName = require('git-repo-name')
const gitUsername = require('git-username')

const paths = require("./paths");

// If the site is being built for GH pages, get the name of the repo to update asset links
const repoName = gitRepoName.sync();
const username = gitUsername()
const isDeploy = process.env.GH_PAGES_BUILD
const urlBase = isDeploy ? `https://${username}.github.io/${repoName}/` : 'http://localhost:8888/'

function replaceRelativeUrls(match, p1, offset, string) {
  const isHome = this.file.relative.indexOf('/') === -1

  if (isDeploy) {
    return isHome ? `${p1}./` : `${p1}/${repoName}/`
  }

  return p1
}

const buildHtml = () => {
  return src(paths.njk.pageSrc)
    .pipe(
      plugins.nunjucksRender({
        path: [paths.njk.srcDir, paths.wmnds.njk.srcDir],
        watch: true,
      })
    )
    .pipe(plugins.formatHtml())
    .pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(plugins.replace('$*urlBase', urlBase)) // Set the html url base
    .pipe(plugins.replace(/(\w+=\")\//g, replaceRelativeUrls)) // Replace any relative 'attr="/"' with 'attr="./"'
    .pipe(dest(paths.output.html));
};

module.exports = {
  buildHtml
}