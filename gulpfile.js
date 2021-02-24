// Modules
const { series, parallel, watch } = require('gulp');
// Tasks
const { startBrowserSync, reload } = require('./gulp-tasks/browser-sync'); // BrowserSync server
const paths = require('./gulp-tasks/paths');

// Styles
const { buildStyles } = require('./gulp-tasks/build-styles');
const { lintStyles } = require('./gulp-tasks/lint-styles');

// SCRIPTS
const lintScripts = require('./gulp-tasks/lint-scripts'); // Lint scripts/JS
const buildScripts = require('./gulp-tasks/build-scripts'); // Minify, and concatenate scripts

// Templates
const lintTemplates = require('./gulp-tasks/lint-html'); // Lint templates/HTML
const { buildTemplates } = require('./gulp-tasks/build-html'); // build nunjucks templates

const { copyWmndsAssets } = require('./gulp-tasks/copy-wmnds-assets');
const { clean } = require('./gulp-tasks/clean');

// Watchers
const watchFiles = () => {
  watch(paths.sass.src, series(buildStyles, lintStyles, reload));
  watch(paths.njk.src, series(buildTemplates, lintTemplates, reload));
};

// Gulp tasks
const build = series(
  clean,
  copyWmndsAssets,
  parallel(buildStyles, buildScripts, buildTemplates),
  lintStyles,
  lintScripts,
  lintTemplates
);
const serve = series(build, parallel(watchFiles, startBrowserSync));

// Register tasks
exports.default = serve;
exports.build = build;
exports.clean = clean;
exports.lintTemplates = lintTemplates;
exports.lintScripts = lintScripts;
exports.buildScripts = buildScripts;
