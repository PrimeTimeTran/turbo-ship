export function useWindow() {
  const maxWidth = 500
  const maxHeight = 300
  function setupWindowListeners() {
    if (process.browser) {
      const chartWidth = ref(window.innerWidth > maxWidth ? maxWidth : window.innerWidth)
      const chartHeight = ref((window.innerWidth > maxWidth ? maxWidth : window.innerWidth) * (maxHeight / maxWidth))

      window.addEventListener('resize', () => {
        chartWidth.value = window.innerWidth > maxWidth ? maxWidth : window.innerWidth
        chartHeight.value = (window.innerWidth > maxWidth ? maxWidth : window.innerWidth) * (maxHeight / maxWidth)
      })
    }
  }
  return {
    setupWindowListeners,
  }
}
