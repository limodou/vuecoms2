const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      iview: 'iview'
    },
  },
  transpileDependencies: ['resize-detector'],
  lintOnSave: false
}
