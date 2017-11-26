import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  output: {
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
});
