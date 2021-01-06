const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./webpack/entry.js"),
  output: {
    path: path.resolve(__dirname, "assets/javascripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
    ],
  },
  mode: "development",
};
