<!-- https://www.sliderrevolution.com/resources/css-border-animation/ -->
<!-- https://www.joshwcomeau.com/animation/css-transitions/#ux-touches-10 -->
<!-- https://alvarotrigo.com/blog/css-page-transitions/ -->
<script setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps(['count'])
const reactiveCount = ref(props.count)

watch(
  () => props.count,
  (newCount) => {
    reactiveCount.value = newCount
  }
)
const tocLinkClick = (link) => {
  activeItem = link.id
}

const useSpyObservers = (toc) => {
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
        let sections = document.querySelectorAll(
          '.nuxt-content h2[id], .nuxt-content h3[id]'
        )
        for (let section of sections) {
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

const ScrollSpy = {
  setup() {
    let tocRef = ref(null)
    let showTOC = ref(false)
    let observer = ref(null)
    let activeItem = ref('')
    let isClickScrolling = ref(false)

    if (process.browser) {
      let { toc } = useContent()
      const spyObservers = useSpyObservers(toc)
      tocRef = spyObservers.tocRef
      showTOC = spyObservers.showTOC
      observer = spyObservers.observer
      activeItem = spyObservers.activeItem
      isClickScrolling = spyObservers.isClickScrolling
    }

    return {
      tocRef,
      showTOC,
      observer,
      activeItem,
      isClickScrolling,
    }
  },
}

const { tocRef, showTOC, activeItem} =
  ScrollSpy.setup()

const activeRef = ref(activeItem)
const isActive = (id) => {
  return activeRef.value === id.toLowerCase()
}
</script>

<template>
  <aside :v-if="showTOC">
    <div class="sticky top-16">
      <h2
        class="dark:text-white uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider"
      >
        Table of contents
      </h2>
      <nav class="mt-4">
        <TransitionGroup name="list" tag="ul">

          <li
            :key="link.id"
            v-for="link of tocRef?.links"
            @click="tocLinkClick(link.id)"
          >
            <a
              :href="link.id" 
              v-text="link.text"
              :class="{ active: isActive(link.id), 'border-opacity-100': isActive(link.id) }"
              class="pl-2 my-1 border-l-green-400 border-l-4 border-opacity-0 list-item"
            />
            <ul
              v-if="link.children"
            >
                <li :key="childLink.id" v-for="childLink of link.children">
                  <a
                    :href="childLink.id"
                    v-text="childLink.text"
                    class="pl-4 my-1 border-l-green-400 border-l-4 border-opacity-0 list-item"
                    :class="{ active: isActive(childLink.id), 'border-opacity-100': isActive(childLink.id) }"

                  />
                </li>
            </ul>
          </li>
        </TransitionGroup>
      </nav>
    </div>
  </aside>
</template>

<style>
.active {
  color: #41b883;
}
</style>
