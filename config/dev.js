module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer:{
      proxy:{
        '/h5':{
          target: 'https://m.flycua.com',
          changeOrigin: true,
          secure: false,
          ws: true,
          host: 'localhost'
        }
      }
    }
  }
}
