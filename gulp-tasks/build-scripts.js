// Gulp requires
const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
// Local requires
const paths = require('./paths.js');

// const buildMode = process.env !== 'local' ? 'production' : 'development'; // If the build isn't local then set the buildMode of webpack to production (it will hide sourcemaps and minify code)
// Placeholder function for buildScripts to loop through
function minifyingJS() {
  return src(paths.js.src)
    .pipe(
      webpack({
        config: {
          module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: [/node_modules/],
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        '@babel/preset-env',
                        {
                          targets: {
                            browsers: ['ie >= 11']
                          }
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          mode: 'production', // detemined by buildMode const above
          devtool: 'source-map', // Set a sourcemap for this build
          output: { filename: 'wmn-prototype-kit.min.js' } // output name of the bundled js
        }
      })
    )
    .pipe(dest(paths.output.js)); // Spit out concat + minified file in ./build/
}

// const minifyingJS = done => {
//   paths.scripts.minifySrc.map(jsFile => minifyJS(jsFile));
//   done();
// };

// Minify, and concatenate scripts
module.exports = minifyingJS;
