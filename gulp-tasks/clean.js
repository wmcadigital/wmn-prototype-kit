const del = require('del');
const paths = require('./paths.js');

const clean = () => {
    return del([paths.output.dir]);
  };

module.exports = {
  clean
}
