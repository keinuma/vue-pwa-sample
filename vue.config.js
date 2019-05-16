module.exports = {
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      navigateFallback: "/index.html"
    },
    themeColor: "#9c855b",
    name: "チャットアプリ"
  }
};
