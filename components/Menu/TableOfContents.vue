<template>
  <div class="md:pt-24 overflow-auto scrollbar-hide">
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li
          class="list-none"
          :key="category._path"
          v-for="category in navigation[1].children"
        >
          <ul class="list-none">
            <!-- Makes the scroll spy more tricky to code -->
            <NuxtLink
              :to="category._path"
              @click="$emit('toggled')"
              :class="{
                'min-w-full': true,
                'hover:text-green-400': true,
                active: currentRoute === category._path,
              }"
            >
              {{ category.title }}
            </NuxtLink>
            <div class="py-3 ml-1">
              <li
                class="border-l border-l-gray-900/25 dark:border-l-white/25"
                v-for="child in callExposedFunction(category)"
              >
                <NuxtLink
                  :to="child._path"
                  @click="$emit('toggled')"
                  :class="{
                    'ml-6': true,
                    'min-w-full': true,
                    'hover:text-green-400': true,
                    active: currentRoute === child._path,
                  }"
                >
                  {{ child.title }}
                </NuxtLink>
                <div
                  class="w-1/12 border-b border-b-gray-900/25 dark:border-b-white/25 overflow-visible relative bottom-3"
                />
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggled'])

const { toc } = useContent()

const currentRoute = ref('')

watch(toc, (newTOC, oldTOC) => {
  const router = useRoute()
  console.log({
    route: newTOC,
    router: router.fullPath,
  })
  currentRoute.value = router.fullPath
})

const curArticle = ref()
// Note: Sometimes the index.md of a directory is the last item
// in the list. This ensures the structure of the table of contents is correct.
// Known cases are Flutter, GCP, Business
const callExposedFunction = (category) => {
  let items = category.children
  if (items) {
    const weird = items[items.length - 1]._path == category._path
    if (weird) {
      const last = items.pop()
      items.unshift(last)
    }
  }
  return items
}
</script>
