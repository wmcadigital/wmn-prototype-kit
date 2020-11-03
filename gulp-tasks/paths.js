module.exports = {
  njk: {
    pageSrc: "src/www/pages/*.njk",
    src: "src/www/**/*.njk",
    srcDir: "src/www/"
  },
  sass: {
    src: "./src/assets/scss/*.scss",
  },
  wmnds: {
    srcDir: "node_modules/wmn-design-system/",
    cssSrc: "node_modules/wmn-design-system/*.min.css"
  },
  output: {
    dir: "build/",
    html: "build/",
    css: "build/css/"
  }
};
