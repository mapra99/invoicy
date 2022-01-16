const { webpackConfig, merge } = require('@rails/webpacker');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

const customConfig = {
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.css', '.scss'],
  },

  plugins: [
    new ForkTSCheckerWebpackPlugin(),
    new DotenvPlugin(),
  ],
};

module.exports = merge(webpackConfig, customConfig);
