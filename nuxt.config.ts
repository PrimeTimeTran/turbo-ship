export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  plugins: ['~/plugins/fontawesome.ts', { src: '~/plugins/marked.js' }],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/', '/404.html'],
    },
    ignore: ['/admin/users', '/todos', '/entities', '/login', '/temp'],
  },
  ignore: ['temp/**', 'output.zip', 'output'],
  formkit: {
    autoImport: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://turboship.ltran.net/api',
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
  ],
  mongoose: {
    options: {},
    modelsDir: 'models',
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
      preload: [
        'dart',
        'python',
        'javascript',
        'js',
        'typescript',
        'ts',
        'vue',
        'vue-html',
        'bash',
      ],
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
