const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  externals: [nodeExternals()], // Prevent bundling node_modules for the server
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
