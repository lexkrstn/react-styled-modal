const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require("webpack-node-externals");
const commonConfig = require('./webpack.common');

module.exports = (env, options) => {
  const config = commonConfig(env, options);
  const tsLoaderRule = config.module.rules.find(r => r.loader === 'ts-loader');
  tsLoaderRule.options.configFile = 'src/lib/tsconfig.json';
  return {
    ...config,
    mode: 'production',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/lib/index.ts'),
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'index.js',
      library: 'react-styled-modal',
      libraryTarget: 'commonjs2',
    },
    optimization: {
      minimize: true,
      minimizer: [ new TerserPlugin() ],
    },
    externals: [nodeExternals()],
  };
};
