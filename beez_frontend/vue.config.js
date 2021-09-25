module.exports = {
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8081, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
  },
  lintOnSave: false,
  outputDir: "build",
  css: {
    extract: false,
  },
  productionSourceMap: false,
};
