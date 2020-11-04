// Variables
const wmndsBase = "node_modules/wmn-design-system/build"
const outputBase = "build"

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
    njk: { 
      srcDir: `${wmndsBase}/njk`
    },
    css: { 
      src: `${wmndsBase}/**/*.min.css`
    },
    js: { 
      src: `${wmndsBase}/js/*.min.js`
    },
    img: { 
      src: `${wmndsBase}/img/*.svg`
    },
    fonts: { 
      src: `${wmndsBase}/fonts/*`
    }
  },
  output: {
    dir: `${outputBase}/`,
    html: `${outputBase}/`,
    css: `${outputBase}/css/`,
    img: `${outputBase}/img/`,
    js: `${outputBase}/js`,
    fonts: `${outputBase}/fonts/`,
  }
};
