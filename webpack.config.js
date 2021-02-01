const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    '/static/js/alpine.js',
  ],
  output: {
    path: path.resolve(__dirname, 'static/js/dist'),
    filename: 'bundle.js'
  }
};