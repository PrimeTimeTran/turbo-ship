import { ref } from 'vue'

export function useToolbar() {
  const focusedContent = ref('Relationships')
  const setFocusedContent = (val) => {
    focusedContent.value = val
  }
  const validateEntities = (e) => {
    const invalidItems = []
    entities.forEach((e) => {
      if (e.type === 'enumerator' || e.type === 'enumeratorMulti') {
        if (e.options.length === 0) {
          invalidItems.push(e)
        }
      }
    })
    return invalidItems
  }
  return {
    focusedContent,
    setFocusedContent,
  }
}
