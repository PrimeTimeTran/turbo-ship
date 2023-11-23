<!-- 
  https://www.vuescript.com/custom-scroll-observer/
  https://github.com/smastrom/vue-use-active-scroll/blob/main/demo/components/Sidebar/TOC.vue
  https://vue-use-active-scroll.netlify.app/
 -->

<script lang="ts" setup>
import { computed, inject, type ComputedRef, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import animateScrollTo from 'animated-scroll-to'
import { useActive } from 'vue-use-active-scroll'

type TOCData = {
   targets: ComputedRef<string[]>
   containerRef: Ref<HTMLElement | null>
   overlayHeight?: number
   items: { label: string; href: string }[]
}
interface Item {
  href: string
  label: string
}
const {
  targets,
  containerRef,
  overlayHeight = 0,
} = inject('TOCData') as TOCData
const { clickType } = inject('DemoRadios') as {
  clickType: ComputedRef<'native' | 'custom'>
}
const items = ref<Item[]>([])
if (process.browser) {
  const container = document.getElementById('pageContent')
  const sections = container?.querySelectorAll(`a`)
  sections?.forEach((e) => {
    const path = e.href.split('#')[1]
    items.value.push({ href: path, label: e.href })
  })
}

const { activeIndex, activeId, setActive, isActive } = useActive(targets, {
   overlayHeight,
  root: containerRef,
  replaceHash: true,
})

const route = useRoute()

const activeItemHeight = computed(() => {
  if (process.browser) {
    return (
      document.querySelector(`a[href="${route.path}#${activeId.value}"]`)
        ?.scrollHeight || 0
    )
  }
})

function customScroll(id: string) {
  setActive(id)
  if (process.browser) {
    animateScrollTo(document.getElementById(id) as HTMLElement, {
      elementToScroll: containerRef?.value ?? window,
      easing: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t ,
      // easing: (x: number) =>
      //   1 + (1.70158 + 1) * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2),
      maxDuration: 600,
      verticalOffset: -overlayHeight || 0,
      cancelOnUserAction: true,
    })
  }
}

const onClick = computed(() =>
  clickType.value === 'native' ? setActive : customScroll
)
</script>

<template>
  <nav>
    <ul
      :style="{
        '--ActiveIndex': activeIndex,
        '--ActiveItemHeight': `${activeItemHeight}px`,
      }"
    >
      <span
        v-if="activeIndex >= 0"
        class="Tracker"
      />
      <li
        v-for="item in items"
        :key="item.href.toLowerCase()"
      >
        <RouterLink
         @click="onClick(item.href)"
          :ariaCurrentValue="`${isActive(item.href)}`"
          :to="{ hash: `#${item.href.toLowerCase()}` /* , replace: true */ }"
          :class="{
            Active: isActive(item.href.toLowerCase()),
          }"
          activeClass=""
          exactActiveClass=""
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.Tracker {
  width: calc(100% + 12px);
  height: var(--ActiveItemHeight);
  position: absolute;
  left: -10px;
  right: 10px;
  transform: translateY(calc(var(--ActiveItemHeight) * var(--ActiveIndex)));
  background-color: #00adb538;
  transition: transform 100ms;
  border-left: 4px solid #00adb5;
  border-radius: 0px 5px 5px 0px;
}

ul {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
}

a {
  text-decoration: none;
  transition: color 100ms;
  user-select: none;
  white-space: nowrap;
  transition: background-color 100ms;
  color: rgba(255, 255, 255, 0.646);
  padding: 2.5px 0;
  width: 100%;
  --webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
@media (hover: hover) {
  a:hover {
    color: white;
  }
}
.Active {
  color: white;
}
</style>
