const path = require("path");
const webpack = require("webpack");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
  mode: "development",
};
