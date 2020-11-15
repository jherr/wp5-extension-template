const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  entry: {
    popup: "./src/popup.js",
    background: "./src/background.js",
    contentScript: "./src/contentScript.js",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    disableHostCheck: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new HtmlWebPackPlugin({
      template: "./src/popup.html",
      chunks: ["popup"],
    }),
  ],
};
