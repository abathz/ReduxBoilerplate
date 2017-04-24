const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      actions: path.resolve(__dirname, 'src/actions/'),
      reducers: path.resolve(__dirname, 'src/reducers/')
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
