const { src, dest, series } = require("gulp");
const plugins = require("gulp-load-plugins")();

const paths = require("./paths");

const copyWmndsCss = () => {
    return src(paths.wmnds.css.src)
    .pipe(dest(paths.output.css))
}

const copyWmndsImg = () => {
    return src(paths.wmnds.img.src)
    .pipe(dest(paths.output.img))
}

const copyWmndsJs = () => {
    return src(paths.wmnds.js.src)
    .pipe(plugins.replace('/img/wmnds-sprite.min.svg', './img/wmnds-sprite.min.svg')) // Fix for gh-pages deploy
    .pipe(dest(paths.output.js))
}

const copyWmndsFonts = () => {
    return src(paths.wmnds.fonts.src)
    .pipe(dest(paths.output.fonts))
}

const copyWmndsAssets = series(copyWmndsCss, copyWmndsImg, copyWmndsJs, copyWmndsFonts)

module.exports = {
    copyWmndsAssets
}