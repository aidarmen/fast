var path              = require('path')
var webpack           = require('webpack')
var NpmInstallPlugin  = require('npm-install-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './front_main/src/index_dev'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle_main.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     enforce: 'pre',
    //     loaders: ['babel-loader?presets[]=react', 'eslint-loader'],
    //     include: [
    //       path.resolve(__dirname, "src_univer"),
    //     ]
    //   }
    // ],
    loaders: [
      {
        loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/
      },
      {
        test:   /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  }
}