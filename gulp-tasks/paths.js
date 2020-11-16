// Variables
const dirBase = {
  www: "src/www",
  assets: "src/assets",
  output: "build",
  wmnds: "node_modules/wmn-design-system/build"
}

module.exports = {
  njk: {
    pageSrc: [`${dirBase.www}/pages/**/*.njk`, `${dirBase.www}/pages/**/*.html`],
    src: [`${dirBase.www}/**/*.njk`, `${dirBase.www}/**/*.html`],
    srcDir: `${dirBase.www}/`
  },
  sass: {
    src: `${dirBase.assets}/scss/*.scss`,
    mainSrc: `${dirBase.assets}/scss/wmn-user-testing.scss`
  },
  wmnds: {
    njk: { 
      srcDir: `${dirBase.wmnds}/njk`
    },
    css: { 
      src: `${dirBase.wmnds}/css/wmnds-components.min.css`
    },
    js: { 
      src: `${dirBase.wmnds}/js/*.min.js`
    },
    img: { 
      src: `${dirBase.wmnds}/img/*.svg`
    },
    fonts: { 
      src: `${dirBase.wmnds}/fonts/*`
    }
  },
  output: {
    dir: `${dirBase.output}/`,
    html: `${dirBase.output}/`,
    css: `${dirBase.output}/css/`,
    img: `${dirBase.output}/img/`,
    js: `${dirBase.output}/js`,
    fonts: `${dirBase.output}/fonts/`,
  }
};
