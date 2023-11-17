import { ref } from 'vue'

export function useToolbar() {
  const tiny = ref(true)
  return {
    tiny,
  }
}
