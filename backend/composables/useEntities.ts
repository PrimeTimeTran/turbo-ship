import { ref, computed } from 'vue'

export function useEntities() {
  const entities = ref([])
  return {
    entities,
  }
}
