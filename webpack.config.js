const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point 
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", 
      filename: "index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve from 'dist' folder
    compress: true, // Enable Gzip compression
    port: 8080, 
    open: true, 
    historyApiFallback: true, // Fallback to index.html for SPA routing
  },
};
