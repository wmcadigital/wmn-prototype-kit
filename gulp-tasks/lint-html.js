// Gulp requires
const { src } = require('gulp');
const plugins = require('gulp-load-plugins')();
const paths = require('./paths.js');

const lintingHTML = () => {
  return src(`${paths.output.html}**/*.html`)
    .pipe(plugins.htmlhint('.htmlhintrc'))
    .pipe(plugins.htmlhint.reporter())
    .pipe(plugins.htmlhint.failOnError());
};

module.exports = lintingHTML;
