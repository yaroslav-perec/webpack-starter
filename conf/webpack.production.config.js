import webpack from 'webpack';
import Config from 'webpack-config';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default new Config().extend('conf/webpack.base.config.js').merge({
  output: {
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new OptimizeCssAssetsPlugin()
  ]
});
