import path from 'path'
import { dirname } from 'path'
import mongoose from 'mongoose'
import { fileURLToPath } from 'url'
import type { HookResult } from 'nuxt/schema'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtConfig({
  ssr: false,
  devServer: { port: 3005 },
  devtools: {
    enabled: true,
    reuseExistingServer: true,
    timeline: {
      enabled: true,
    },
  },
  ignore: ['/mobile', '/notes', '/utils/seeds'],
  plugins: ['~/plugins/fontawesome.ts', { src: '~/plugins/marked.js' }],
  formkit: {
    autoImport: true,
  },
  typescript: {
    typeCheck: true,
  },
  mongoose: {
    options: {},
    modelsDir: 'models',
    uri: process.env.MONGODB_URI,
  },
  hooks: {
    'build:done': (go: HookResult) => {
      mongoose.disconnect()
    },
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/css/main.css'],
  nitro: {
    prerender: {
      failOnError: false,
      routes: ['/articles/*', '/'],
    },
    experimental: {
      openAPI: true,
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://turboship.ltran.net/api',
      generateUrl: process.env.GENERATE_URL || 'https://turboship.ltran.net/api',
    },
  },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-mongoose',
    '@nuxtjs/color-mode',
    '@formkit/nuxt',
    'nuxt-vuefire',
    '@samk-dev/nuxt-vcalendar',
  ],
  alias: {
    '@netlify': path.resolve(__dirname, 'netlify'),
  },
  app: {
    head: {
      script: [
        { src: '/js/Hotkeys.js', tagPosition: 'head' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js', tagPosition: 'head' },
      ],
    },
  },
  postcss: {
    plugins: {
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
