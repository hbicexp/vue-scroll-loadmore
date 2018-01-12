const path = require('path')
const webpack = require('webpack')

module.exports = function (env, params) {

  var entry = {
    'vue-scroll-loadmore': './src/index',
  }

  if (env.production !== true) {
    entry.sample = './samples/index';
  }

  var p = {
    entry: entry,
    output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: env.production === true?'[name].min.js':'[name].js'
    },
    plugins: [
    ],
    module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.ts$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    },
  };

  if (env.production === true) {
    p.plugins = p.plugins.concat([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
    ]);
  }

  return p;
}