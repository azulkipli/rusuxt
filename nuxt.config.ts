const pkg = require('./package.json')

import NuxtConfig from '@nuxt/config'

const config: NuxtConfig = {
  mode: 'universal',
  server: {
    port: 3232 // default: 3000
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      },
      { hid: 'og:image', property: 'og:image', content: '/blackribs.png' },
      { hid: 'og:title', property: 'og:title', content: 'RusukApp' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      { hid: 'og:url', property: 'og:url', content: 'Organic URL' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: '/blackribs.png'
      },
      { hid: 'twitter:title', name: 'twitter:title', content: 'RusukApp' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description
      },
      { hid: 'twitter:url', name: 'twitter:url', content: 'twitter organic' }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre.min.css'
      }
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css'
      //   }
      // { rel: 'apple-touch-startup-image', href: '/splash/splash-1125x2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' },
    ]
  },
  router: {
    // To disable prefetching, uncomment the line
    prefetchLinks: true,
    // Activate prefetched class (default: false)
    // Used to display the check mark next to the prefetched link
    linkPrefetchedClass: 'link-prefetched'
  },
  robots: {
    UserAgent: '*',
    Disallow: ''
  },
  loading: {
    color: '#D4B483',
    failedColor: '#ED1C24',
    height: '5px'
  },
  manifest: {
    name: 'rusuxt',
    theme_color: '#125E8A'
  },
  modules: [
    '@nuxtjs/axios'
    // '@nuxtjs/pwa',
    // '@nuxtjs/vuetify',
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: '/api'
  },
  plugins: [],
  build: {
    extractCSS: true,
    optimizeCSS: true,
    loaders: {},
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-syntax-dynamic-import']
      ]
    },
    extend(config, ctx) {}
  }
}

export default config
