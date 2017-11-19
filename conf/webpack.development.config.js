import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
});
