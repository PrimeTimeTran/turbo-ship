import { getAnalytics, logEvent } from 'firebase/analytics'

export function useAnalytics() {
  function fbEvent(name, params = {}) {
    if(process.browser) {
      try {
        const analytics = getAnalytics()
        logEvent(analytics, name, params)
      } catch (error) {
        console.log({
          error
        })
      }
    }
  }

  return {
    fbEvent
  }
}
