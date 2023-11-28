// https:vuefire.vuejs.org/guide/other-firebase-services.html#Nuxt
// https://medium.com/codex/using-firebase-in-nuxt3-the-right-way-bebbb6d8c4dd
import { type Analytics, initializeAnalytics, isSupported, logEvent } from 'firebase/analytics'

export default defineNuxtPlugin(async () => {
  const firebaseApp = useFirebaseApp()

  console.log('Loading analytics')

  let analytics: Analytics | null = null
  if (await isSupported()) {
    analytics = initializeAnalytics(firebaseApp)
    console.log('Loaded analytics')
  } else {
    console.log('Analytics not supported')
  }

  function fbEvent(name: string, params = {}) {
    logEvent(analytics!, name, params)
  }

  return {
    provide: {
      analytics,
      fbEvent,
    },
  }
})
