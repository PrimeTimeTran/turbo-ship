<template>
  <NuxtLink
    href="/admin"
    class="cursor-pointer"
  >
    <img :src="imageSource" />
  </NuxtLink>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useDark } from '@vueuse/core'

export default {
  setup() {
    const isDark = useDark()
    const imageSource = ref('https://i.imgur.com/XOSnv20.png')

    const initializeImageSource = () => {
      imageSource.value = isDark.value
        ? 'https://i.imgur.com/QgWZit7.png'
        : 'https://i.imgur.com/XOSnv20.png'
    }

    onMounted(() => {
      initializeImageSource()
    })

    // Watch for changes in dark mode and update imageSource accordingly
    watch(isDark, () => {
      initializeImageSource()
    })

    return {
      imageSource,
    }
  },
}
</script>
