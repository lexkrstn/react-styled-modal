const path = require('path');
const nodeExternals = require("webpack-node-externals");
const config = require('./webpack.common');

module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/lib/index.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'react-modal',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
});
