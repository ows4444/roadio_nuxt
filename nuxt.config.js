const pkg = require('./package')
require('dotenv').config()
module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  env: {
    FIREBASE_CLIENT_API_KEY: process.env.FIREBASE_CLIENT_API_KEY,
    FIREBASE_CLIENT_AUTH_DOMAIN: process.env.FIREBASE_CLIENT_AUTH_DOMAIN,
    FIREBASE_CLIENT_DATABASE_URL: process.env.FIREBASE_CLIENT_DATABASE_URL,
    FIREBASE_CLIENT_MESSAGING_SENDER_ID:
      process.env.FIREBASE_CLIENT_MESSAGING_SENDER_ID,
    FIREBASE_CLIENT_PROJECT_ID: process.env.FIREBASE_CLIENT_PROJECT_ID,
    FIREBASE_CLIENT_STORAGE_BUCKET: process.env.FIREBASE_CLIENT_STORAGE_BUCKET
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
