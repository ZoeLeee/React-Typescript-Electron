const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname, "..");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    mainFields: ["main", "module", "browser"],
  },
  entry: path.resolve(rootPath, "src", "App.tsx"),
  target: "electron-renderer",
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(rootPath, "dist/renderer"),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 5050,
    publicPath: "/",
  },
  output: {
    path: path.resolve(rootPath, "dist/renderer"),
    filename: "js/[name].js",
    publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ds",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
