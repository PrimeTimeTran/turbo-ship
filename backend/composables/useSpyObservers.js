import { ref, onMounted } from 'vue'

export function useSpyObservers(toc) {
  let tocRef = ref(toc)
  let showTOC = ref(false)
  let activeItem = ref('')
  let isClickScrolling = false

  let observer = ref(newObserver())

  function newObserver() {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          activeItem.value = id.toLowerCase()
        }
      })
    }, observerOptions)
  }

  onMounted(setupObservers)

  function setupObservers() {
    if (process.browser) {
      console.log('setupObservers')
      try {
        const sections = document.querySelectorAll(
          '.nuxt-content h2[id], .nuxt-content h3[id]'
        )
        for (const section of sections) {
          observer.value.observe(section)
        }
        if (sections.length >= 3) {
          activeItem.value = sections[0].getAttribute('id').toLowerCase()
          showTOC.value = true
        }
      } catch (error) {
        console.error({ error })
      }
    }
  }

  watch(
    () => toc,
    () => {
      setTimeout(setupObservers, 100)
    },
    { deep: true }
  )

  return {
    tocRef,
    showTOC,
    observer,
    activeItem,
    isClickScrolling,
  }
}

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
}
