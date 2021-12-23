const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const commonConfig = require('./webpack.common');

module.exports = (env, options) => {
  const config = commonConfig(env, options);
  const tsLoaderRule = config.module.rules.find(r => r.loader === 'ts-loader');
  tsLoaderRule.options.configFile = 'src/docs/tsconfig.json';
  return {
    ...config,
    mode: 'development',
    entry: path.resolve(__dirname, 'src/docs/index'),
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: 'index.js',
    },
    plugins: config.plugins.concat([
      new HtmlWebPackPlugin({
        template: './src/docs/index.html',
        filename: './index.html',
        // Append a unique webpack compilation hash to all included scripts and CSS
        hash: true,
      })
    ]),
    devServer: {
      static: {
        directory: path.join(__dirname, 'docs'),
      },
      compress: true,
      port: 8080,
    },
  };
};
