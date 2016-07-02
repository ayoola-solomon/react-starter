import webpack              from 'webpack';
import assign               from 'object-assign';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import prodCfg              from './webpack.prod.config.js';
import ExtractTextPlugin    from 'extract-text-webpack-plugin';

var path = require('path');

var WebpackIsomorphicToolsPlugin    = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin    = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'))

Object.assign = assign;

const BABEL_QUERY = {
  presets: ['react', 'es2015'],
  plugins: [
    ['transform-object-rest-spread'],
    ['transform-class-properties'],
    ['transform-decorators-legacy'],
    [
      'react-transform',
      {
        transforms: [
          {
            transform: 'react-transform-hmr',
            imports:    ['react'],
            locals:     ['module']
          }
        ]
      }
    ]
  ]
}

export default function(app) {
  const config = Object.assign(prodCfg, {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname),
    entry:   [
      'webpack-hot-middleware/client',
      './client'
    ],
    output: {
      path:       path.join(__dirname, 'dist'),
      publicPath: '/',
      filename:   'bundle.js'
    },
    module: {
      loaders: [
        {
          test:    /\.jsx?$/,
          exclude: /node_modules/,
          loader:  'babel',
          query:   BABEL_QUERY
        },
        {
          test:   /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
        },
        {
          test:   /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        },
        { test: /\.json$/, loader: 'json-loader'},
        { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' },
        { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
      ]
    },
    plugins: [
      webpackIsomorphicToolsPlugin.development(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('app.css'),
      new webpack.DefinePlugin({
        __DEV__:      process.env.NODE_ENV !== 'production',
        __DEVTOOLS__: true
      })
    ],
  });

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true }));
  app.use(webpackHotMiddleware(compiler));
}
