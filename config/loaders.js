const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PUG_LOADER = {
  loader: 'pug-loader',
  options: {
    pretty: true
  }
};

const BABEL_LOADER = {
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env'
    ]
  }
};

const MINI_CSS_EXTRACT_PLUGIN = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../'
  }
};

const CSS_LOADER = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    importLoaders: 1
  }
};

const POST_CSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true
  }
};

const SASS_LOADER = {
  loader: 'sass-loader',
  options: {
    sourceMap: true
  }
};

const IMAGE_LOADER = {
  loader: 'file-loader',
  options: {
    name: 'images/[name].[hash].[ext]'
  }
};

const FONTS_LOADER = {
  loader: 'file-loader',
  options: {
    name: 'fonts/[name].[ext]'
  }
};

const loaders = [
  {
    test: /\.pug$/,
    use: [
      PUG_LOADER
    ]
  },
  {
    test: /\.js$/,
    use: [
      BABEL_LOADER
    ]
  },
  {
    test: /\.css$/,
    use: [
      MINI_CSS_EXTRACT_PLUGIN,
      CSS_LOADER,
      POST_CSS_LOADER
    ]
  },
  {
    // Support .sass and .scss
    test: /\.s[ac]ss$/,
    use: [
      MINI_CSS_EXTRACT_PLUGIN,
      CSS_LOADER,
      POST_CSS_LOADER,
      SASS_LOADER
    ]
  },
  {
    test: /\.(jpg|png|svg)$/,
    use: [
      IMAGE_LOADER
    ]
  },
  {
    test: /\.(eot|woff|woff2|ttf)$/,
    use: [
      FONTS_LOADER
    ]
  }
];

module.exports = loaders;
