module.exports = {
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8081, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
    proxy: {
      "^/api": {
        target: "https://172.30.1.57:9091",
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
  lintOnSave: false,
  outputDir: "build",
  css: {
    extract: false,
  },
  productionSourceMap: false,
};
