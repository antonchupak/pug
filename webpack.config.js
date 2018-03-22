const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const js = require('./webpack/js');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');

const PATH = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'index': PATH.source + '/pages/index/index.js',
		},

		output: {
			path: PATH.build,
			filename: 'js/[name].js'
		},

		plugins: [
			// new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATH.source + '/pages/index/index.pug'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			})
  	]
	},
	js(),
  pug(),
	images()
]);

module.exports = function(env) {
  if (env === 'development') {
    return merge([
			common,
			devserver(),
			sass(),
			css()
    ]);
  }
  if (env === 'production') {
    return merge([
    	common,
			extractCSS(),
      uglifyJS()
    ]);
  }
};