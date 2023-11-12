export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (err) => {
    console.log('Error in Nuxt', err)
  })
})
