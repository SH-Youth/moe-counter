const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'worker.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [
      {
        test: /\.html?$/i,
        type: 'asset/source',
      },
      {
        test: /\.(gif|png)$/i,
        type: 'asset/inline',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  devtool: 'inline-source-map',
  plugins: [new CleanWebpackPlugin()],
};
