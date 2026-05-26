import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  stats: {
    children: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "To-do's",
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
