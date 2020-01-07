module.exports = {
  devServer: {
    port: 9090,
    proxy: {
      '/youzan': {
        target: 'http://192.168.0.106:9999',
        // target: 'http://10.36.136.170:9999',
        changeOrigin: true
      }
    }
  }
}
