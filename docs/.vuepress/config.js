const nav = require('./nav.js')

module.exports = {
  //base:"./",
  title: 'Uphold',
  description: 'Just playing around',
  port: 8083,
  head: [
    ['link', { rel: 'icon', href: 'alien.ico' }],
  ],
  themeConfig: {
    nav: nav,
    sidebar: {
      '/vue/': [
        {
          title: 'VUE',
          collapsable: true,
        },
        ['', 'Vuesubject'],
        ['vue3', 'Vue3新特性'],
        // ['vue3', 'Vue3新特性'],
        // ['vuebuttonauth', 'Vue中按钮权限设置'],
        // ['vuex', 'vuex'],
        // ['vueantic', 'vueantic'],
        // ['vue_eslint', 'vue_eslint'],
        // ['vue_template_invscode', 'vue_template_invscode'],
        // ['vueplugin', 'vueplugin'],
        // ['vue_proxy', 'vue_proxy'],
        // ['vue_jwt', 'vue_jwt'],
        // ['vue_transition', 'vue_transition'],
        // ['funcomponent', 'vue函数式组件'],
        // ['axios_intercept', 'axios全局拦截配置'],
        // ['clickoutside', 'vue中点击空白处隐藏弹出框'],
        // ['appendbody', 'vue中将弹出框插入body中'],
        // ['slideTransition', '页面切换动画'],
        // ['vue_principle', 'principle']
      ],
      '/js/': [
        {
          title: 'JS',
          collapsable: true,
        },
        ['', 'js']
      ],
    },
    sidebarDepth: 23



  },





}