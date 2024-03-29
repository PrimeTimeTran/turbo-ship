import path from 'path'
import { dirname } from 'path'
import mongoose from 'mongoose'
import { fileURLToPath } from 'url'
import type { HookResult } from 'nuxt/schema'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtConfig({
  ignore: ['/mobile', '/notes'],
  routeRules: {
    '/': { prerender: true, ssr: true },
    '/administrator/**': { ssr: false },
    '/api/**': { cors: true, ssr: false, prerender: false },
    '/articles/**/**/**': { prerender: true },
    '/items/**': { ssr: false },
    '/entities': { cors: true, prerender: true, },
  },
  mongoose: {
    options: {},
    modelsDir: 'models',
    uri: process.env.MONGODB_URI,
  },
  runtimeConfig: {
    host: process.env.HOST,
    googleAPIKey: process.env.GOOGLE_API_KEY,
    public: {
      apiUrl: process.env.API_URL,
      hostUrl: process.env.HOST_URL,
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  nitro: {
    prerender: {
      failOnError: false,
      routes: ['/', '/articles/**/**/**', '/theme/**'],
      ignore: ['/administrator/**'],
    },
    experimental: {
      openAPI: true,
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  plugins: [
    '~/plugins/fontawesome.ts',
    { src: '~/plugins/marked.js' },
    { src: '~/plugins/eventBus.ts', mode: 'client' },
  ],
  formkit: {
    autoImport: true,
  },
  typescript: {
    typeCheck: true,
  },
  hooks: {
    'build:done': (go: HookResult) => {
      mongoose.disconnect()
      console.log('Disconnected!')
    },
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/css/main.css'],
  modules: [
    '@nuxt/devtools',
    require('postcss-nested'),
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-mongoose',
    '@nuxtjs/color-mode',
    '@formkit/nuxt',
    'nuxt-vuefire',
    '@samk-dev/nuxt-vcalendar',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  alias: {
    '@utils': path.resolve(__dirname, 'server/utils'),
    '@services': path.resolve(__dirname, 'server/services'),
    '@security': path.resolve(__dirname, 'server/utils/security'),
    '@turboship': path.resolve(__dirname, 'utils/Turboship'),
  },
  app: {
    head: {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js', tagPosition: 'head' },
        { src: '/js/Hotkeys.js', tagPosition: 'head' },
      ],
    },
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    documentDriven: true,
    highlight: {
      preload: ['dart', 'python', 'javascript', 'js', 'typescript', 'ts', 'vue', 'vue-html', 'bash'],
      theme: {
        light: 'github-light',
        default: 'github-dark',
      },
    },
  },
  vuefire: {
    config: {
      projectId: 'turboship-dev',
      measurementId: 'G-3Y4HHYCZK7',
      messagingSenderId: '885916988672',
      storageBucket: 'turboship-dev.appspot.com',
      authDomain: 'turboship-dev.firebaseapp.com',
      databaseURL: 'https://turboship-dev-default-rtdb.firebaseio.com',
      appId: '1:885916988672:web:1cca060cfd4ac74a2eafe5',
      apiKey: 'AIzaSyBaBHq_Igg8V6xDmuNBMDWK_KputgYfSLM',
    },
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/fontawesome-free',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
})
