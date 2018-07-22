var path              = require('path')
var webpack           = require('webpack')
var NpmInstallPlugin  = require('npm-install-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: [
    './front_main/src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle_main.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      cutCode: JSON.stringify(true)
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   mangle: {
    //     screw_ie8: true,
    //     keep_fnames: false
    //   },
    //   compress: {
    //     screw_ie8: true,
    //     drop_console: true,
    //     warnings: false
    //   },
    //   comments: false
    // }),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 3339,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    loaders: [
      {
        loaders:  ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
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