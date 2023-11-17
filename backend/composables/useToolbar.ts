import { ref } from 'vue'

export function useToolbar() {
  const focusedContent = ref('Relationships')
  const setFocusedContent = (val: string) => {
    console.log({
      val,
    })
    focusedContent.value = val
  }
  watch(focusedContent, () => {
    console.log('Toolbar change ', focusedContent.value)
  })
  return {
    focusedContent,
    setFocusedContent,
  }
}
