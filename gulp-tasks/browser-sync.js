const browserSync = require('browser-sync').create();
const paths = require('./paths.js');

const startingBrowserSync = () => {
  return browserSync.init({
    server: {
      baseDir: paths.output.dir,
      routes: {
        '/_sourcemaps': './_sourcemaps'
      }
    },
    port: 8888
  });
};

const reloadingBrowserSync = done => {
  browserSync.reload();
  done();
};

module.exports = {
  browserSync,
  reload: reloadingBrowserSync,
  startBrowserSync: startingBrowserSync
};
