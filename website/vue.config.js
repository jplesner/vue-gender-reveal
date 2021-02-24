module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://api:8081',
        changeOrigin: true,
      }
    }
  }
}