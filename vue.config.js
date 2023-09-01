const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
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
  }
})
