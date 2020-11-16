const browserSync = require("browser-sync").create();

const paths = require("./paths.js");

const sync = () => {
  return browserSync.init({
    server: {
      baseDir: paths.output.dir,
    },
    port: 8888,
  });
};

const reload = (done) => {
  browserSync.reload();
  done();
};

module.exports = {
  reload,
  sync
}
