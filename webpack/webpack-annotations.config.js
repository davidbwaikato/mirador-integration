const path = require('path');

module.exports = {
  entry: './src/index-annotations.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist-annotations'),
    publicPath: './dist-annotations/',
  },
};
