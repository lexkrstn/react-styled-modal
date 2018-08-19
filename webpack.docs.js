const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = require('./webpack.common');

module.exports = Object.assign({}, config, {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/docs/index.js'),
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'index.js'
  },
  plugins: config.plugins.concat([
    new HtmlWebPackPlugin({
      template: './src/docs/index.html',
      filename: './index.html',
      // Append a unique webpack compilation hash to all included scripts and CSS
      hash: true
    })
  ]),
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    compress: true
  }
});
