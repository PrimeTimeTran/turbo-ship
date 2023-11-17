import { ref } from 'vue'
export function useEntity() {
  const showAttributes = ref(false)
  const toggleAttributes = () => {
    showAttributes.value = !showAttributes.value
  }
  return {
    showAttributes,
    toggleAttributes,
  }
}
