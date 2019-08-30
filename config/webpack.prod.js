// Tools
const PATHS = require('./paths');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = {
  output: {
    filename: 'js/[name].[hash].js'
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'syles/[name].[hash].css',
      chunkFilename: 'styles/[id].[hash].css',
    })
  ]
}

module.exports = prod;
