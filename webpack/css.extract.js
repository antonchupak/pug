const ExtractTextCssPlugin = require('extract-text-webpack-plugin');

module.exports = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.sass$/,
          include: paths,
          use: ExtractTextCssPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            // use: ['css-loader','sass-loader']
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        },
        {
          test: /\.css$/,
          include: paths,
          use: ExtractTextCssPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextCssPlugin('./css/[name].css')
    ]
  }
};