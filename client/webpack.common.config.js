const path = require('path');
module.export = {
  context: __dirname,
  entry: ['./assets/javasripts/App'],

  resolve: {
    root: [path.join(__dirname, 'scripts'),
           path.join(__dirname, 'assets/javasripts')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.config.js']
  },
  module: {
    loader: []
  }
}
