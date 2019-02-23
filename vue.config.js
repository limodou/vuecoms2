module.exports = {
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      iview: 'iview'
    },
  },

  lintOnSave: false
}
