// Modules
const gulp = require('gulp');
const { series, parallel, watch } = require('gulp');
// Tasks
const { startBrowserSync, reload } = require('./gulp-tasks/browser-sync'); // BrowserSync server
const paths = require('./gulp-tasks/paths');

// Styles
const { buildStyles } = require('./gulp-tasks/build-styles');
const { lintStyles } = require('./gulp-tasks/lint-styles');

// Templates
const { buildTemplates } = require('./gulp-tasks/build-html'); // build nunjucks templates
const lintTemplates = require('./gulp-tasks/lint-html'); // Lint templates/HTML

const { copyWmndsAssets } = require('./gulp-tasks/copy-wmnds-assets');
const { clean } = require('./gulp-tasks/clean');

// Watchers
const watchFiles = () => {
  watch(paths.sass.src, series(buildStyles, lintStyles, reload));
  watch(paths.njk.src, series(buildTemplates, lintTemplates, reload));
};

// Gulp tasks
const build = series(copyWmndsAssets, buildStyles, lintStyles, buildTemplates, lintTemplates);
const serve = series(build, parallel(watchFiles, startBrowserSync));

// Register tasks
// gulp.task('default', serve);
// gulp.task('build', build);
// gulp.task('clean', clean);
// gulp.task('lintTemplates', lintTemplates);
exports.default = serve;
exports.build = build;
exports.clean = clean;
exports.lintTemplates = lintTemplates;
