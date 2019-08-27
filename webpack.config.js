// Pages
const PAGES = [
  'index',
  'test'
];

// Core
const path = require('path');
const webpack = require('webpack');

// Plugins and other tools
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

// LOADERS
const LOADERS = require('./config/loaders');

const PATH = {
  build: path.join(__dirname, 'build'),
  source: path.join(__dirname, 'source'),
  media: path.join(__dirname, 'source/media'),
  styles: path.join(__dirname, 'source/styles')
};

// Base webpack config
const base = {
  /**
   * What happens there?
   * We need to create multiple pages and each page require to own `entry`.
   * We get theirs dynamically from `PAGES` variable.
   */
  entry: (() => {
    const entries = {};
    PAGES.forEach(page => entries[page] = PATH.source + `/pug/pages/${page}/${page}.js`);
    return entries;
  })(),

  output: {
    path: PATH.build,
    filename: 'js/[name].[hash].js'
  },

  module: {
    rules: LOADERS
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },

  resolve: {
    alias: {
      media: PATH.media,
      styles: PATH.styles
    }
  },

  /**
   * What happens there?
   * Option `plugins` get an array of plugins for webpak. But in our case, we can have many pages.
   * And for each page, we need to initialize a new instance of HtmlWebpackPlugin.
   * We make it dynamically from `PAGES` array.
   * In the end, we concatenate array with all our pages with other webpack plugins.
   */
  plugins: PAGES.map((page) => new HtmlWebpackPlugin({
    template: PATH.source + `/pug/pages/${page}/${page}.pug`,
    filename: `${page}.html`,
    chunks: ['commons', page],
    inject: 'body'
  })).concat([
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'syles/[name].[hash].css',
      chunkFilename: 'styles/[id].[hash].css',
    })
  ])
};

const dev = {
  devtool: 'cheap-module-source-map',
  watch: true,
  devServer: {
    contentBase: PATH.build
  }
};

const prod = {
  devtool: 'source-map'
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return merge(base, dev);
  }

  if (argv.mode === 'production') {
    return merge(base, prod);
  }
};