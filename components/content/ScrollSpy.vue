<template>
  <aside :v-if="showTOC">
    <div class="sticky top-16">
      <h2
        class="dark:text-white uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider"
      >
        Table of contents
      </h2>
      <nav class="mt-4">
        <ul>
          <li
            :key="link.id"
            v-for="link of tocRef?.links"
            @click="tableOfContentsHeadingClick(link.id)"
          >
            <a
              :href="`#${link.id}`"
              :class="{ active: link.id.toLowerCase() === activeItem }"
            >
              {{ link.text }}
            </a>
            <div
              class="pl-2 lg:ml-4"
              v-if="link.children"
            >
              <ul>
                <li v-for="childLink of link.children">
                  <a
                    :href="`#${childLink.id}`"
                    :class="{
                      active: childLink.id.toLowerCase() === activeItem,
                    }"
                  >
                    {{ childLink.text }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<!-- <script setup>
let { toc } = useContent()
let { tocRef, showTOC, activeItem } = useSpyObservers(toc)
const props = defineProps(['count'])
const reactiveCount = ref(props.count)

watch(
  () => props.count,
  (newCount) => {
    reactiveCount.value = newCount
  }
)

function tableOfContentsHeadingClick(link) {
  activeItem = link.id
}
</script> -->

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
const tableOfContentsHeadingClick = (link) => {
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
const { tocRef, showTOC, observer, activeItem, isClickScrolling } =
  ScrollSpy.setup()
</script>

<style>
.active {
  color: #41b883;
}
</style>
