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
const PATH = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build'),
  media: path.join(__dirname, 'source/media'),
  styles: path.join(__dirname, 'source/styles')
};

const JS_LOADER = {
  test: /\.js$/,
  use: [
    'babel-loader'
  ]
};

const PUG_LOADER = {
  test: /\.pug$/,
  use: [
    {
      loader: 'pug-loader',
      options: {
        pretty: true
      }
    }
  ]
};

const CSS_LOADER = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};

const SASS_PROD_LOADER = {
  // Support .sass and .scss
  test: /\.s[ac]ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader'
  ]
};

const SASS_DEV_LOADER = {
  // Support .sass and .scss
  test: /\.s[ac]ss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
}

const FILE_LOADER = {
  test: /\.(jpg|png|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'images/[name].[hash].[ext]'
      }
    }
  ]
};

const FONTS_LOADER = {
  test: /\.(eot|woff|woff2|ttf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }
  ]
};

// Main webpack config
const config = {
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
    rules: [
      JS_LOADER,
      PUG_LOADER,
      CSS_LOADER,
      SASS_PROD_LOADER,
      FILE_LOADER,
      FONTS_LOADER
    ]
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

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    
  }

  if (argv.mode === 'production') {
    //
  }

  return config;
};