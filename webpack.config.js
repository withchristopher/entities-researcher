// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: path.join(__dirname, "src", "index.js"),
//   output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
//   mode: process.env.NODE_ENV || "development",
//   resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
//   devServer: {
//     contentBase: path.join(__dirname, "src"),
//     historyApiFallback: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },
//       {
//         test: /\.(css|scss)$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
//         use: ["file-loader"],
//       },
//     ],
//   },
//   // presets: ["@babel/preset-env"],
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "public", "index.html"),
//       hash: true,
//     }),
//   ],
// };

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
    library: "webpackGhPages",
  },
};
