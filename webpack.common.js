module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            envName: 'node',
            presets: [
              ["@babel/preset-env", {
                targets: {node: "current"}
              }]
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
              ['@babel/plugin-proposal-decorators', {
                legacy: true
              }],
            ]
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: []
};