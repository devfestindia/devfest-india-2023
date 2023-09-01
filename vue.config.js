const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    extract: { ignoreOrder: true },
  },
  configureWebpack: {
    output: {
      crossOriginLoading: "anonymous",
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: "DevFest India 2023",
    workboxPluginMode: "InjectManifest",
    themeColor: "#3D7FF5",
    msTileColor: "#3D7FF5",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      background_color: "#ffffff",
    },
  }})
