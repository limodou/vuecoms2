const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0]
      const terserOptions = terserWebpackPlugin.options.terserOptions
      terserOptions.compress["drop_console"] = true
    }
    Object.assign(config, {externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      iview: 'iview'
    }})
  },
  transpileDependencies: ['resize-detector'],
  lintOnSave: false
}
