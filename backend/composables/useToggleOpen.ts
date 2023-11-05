import { ref } from 'vue'

export function useToggleOpen() {
  const isOpen = ref(true)

  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    toggleOpen,
  }
}
