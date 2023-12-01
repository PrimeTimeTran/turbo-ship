import type { HookResult } from 'nuxt/schema'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  devServer: {
    port: 3005,
  },
  plugins: ['~/plugins/fontawesome.ts', { src: '~/plugins/marked.js' }],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  nitro: {
    prerender: {
      failOnError: false,
      routes: ['/articles/*', '/'],
      ignore: ['/admin'],
    },
  },
  ignore: ['temp/**'],
  formkit: {
    autoImport: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://turboship.ltran.net/api',
      generateUrl: process.env.GENERATE_URL || 'https://turboship.ltran.net/api',
    },
  },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-mongoose',
    '@nuxtjs/color-mode',
    '@formkit/nuxt',
    'nuxt-vuefire',
  ],
  vuefire: {
    config: {
      apiKey: 'AIzaSyBaBHq_Igg8V6xDmuNBMDWK_KputgYfSLM',
      authDomain: 'turboship-dev.firebaseapp.com',
      projectId: 'turboship-dev',
      storageBucket: 'turboship-dev.appspot.com',
      messagingSenderId: '885916988672',
      appId: '1:885916988672:web:1cca060cfd4ac74a2eafe5',
      measurementId: 'G-3Y4HHYCZK7',
    },
  },
  mongoose: {
    uri: 'process.env.MONGODB_URI',
    options: {},
    modelsDir: 'models',
  },
  hooks: {
    'build:done': (go: HookResult) => {
      console.log({
        buildComplete: true,
      })
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
