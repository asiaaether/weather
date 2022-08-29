const { resolve } = require("node:path");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
};
