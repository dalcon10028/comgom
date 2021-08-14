import colors from 'vuetify/es5/util/colors'

require("dotenv").config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 대리미',
    title: '대림대학교 커뮤니티',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon/64.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-infinite-loading.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/auth', '@nuxtjs/proxy'],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'http://localhost:1337', pathRewrite: {'^/api/': ''}, changeOrigin: true },
    '/daelim/': { target: 'https://www.daelim.ac.kr/', pathRewrite: {'^/daelim/': ''}, changeOrigin: true },
    '/image/': { target: 'https://u20112.imgbb.com/', pathRewrite: {'^/image/': ''}, changeOrigin: true }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#4fc2f8',
          secondary: '#9675ce',
          accent: '#536dfe',
          error: '#ff5353',
          info: '#80deea',
          success: '#81c683',
          warning: '#ffb74e'
        },
        dark: {
          primary: '#90caf8',
          secondary: '#ba69c8',
          accent: '#5c6bc0',
          error: '#e57373',
          info: '#80deea',
          success: '#81c683',
          warning: '#ffb74e'
        }
      }
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: {
            url: '/api/users/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    },
    redirect: {
      login: '/user/login',
      logout: '/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
