// Modules
const gulp = require('gulp')
const { series, parallel, watch } = require("gulp");
// Tasks
const { reload, sync } = require("./gulp-tasks/browser-sync");
const paths = require("./gulp-tasks/paths");
// 
const { buildStyles } = require("./gulp-tasks/build-styles");
const { lintStyles } = require("./gulp-tasks/lint-styles");
const { buildHtml } = require("./gulp-tasks/build-html");
const { copyWmndsAssets } = require('./gulp-tasks/copy-wmnds-assets')
const { clean } = require('./gulp-tasks/clean')

// Watchers
const watchFiles = () => {
  watch(paths.sass.src, series(buildStyles, lintStyles, reload));
  watch(paths.njk.src, series(buildHtml, reload));
};

// Gulp tasks
const build = series(copyWmndsAssets, buildStyles, lintStyles, buildHtml);
const serve = series(build, parallel(watchFiles, sync));

// Register tasks
gulp.task('default', serve)
gulp.task('build', build)
gulp.task('clean', clean)
