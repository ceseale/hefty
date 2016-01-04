var buildPath = './'

module.exports = {
  entry: "./src/core.js",
  output: {
    path: buildPath,
    filename: "index.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }
    ]
  }
};
