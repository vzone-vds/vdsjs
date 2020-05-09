const path = require("path");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "vds.js",
    path: path.resolve(__dirname, "dist"),
    library: "Vds",
    libraryTarget: "umd"
  }
};
