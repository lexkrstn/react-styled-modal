const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

module.exports = (env, options) => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: options.mode !== 'production' ? [createStyledComponentsTransformer()] : [],
          }),
        },
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [],
});