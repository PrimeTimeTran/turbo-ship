<template>
  <NuxtLink href="/admin" class="cursor-pointer">
    <img :src="imageSource" class="h-20"/>
  </NuxtLink>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useDark } from '@vueuse/core'

export default {
  setup() {
    const isDark = useDark()
    const imageSource = ref('~/assets/images/logo-dark.png')

    const initializeImageSource = () => {
      imageSource.value = isDark.value ? '~/assets/images/logo-white.png' : '~/assets/images/logo-dark.png'
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
