import { ref } from 'vue'

export function useEntities() {
  let entities = ref(original)
  const addEntity = (e: Entity) => {
    entities.value.push(e)
  }
  const removeEntity = (id: string) => {
    const idx = entities.value.findIndex((e: Entity) => e._id === id)
    if (idx !== -1) {
      entities.value.splice(idx, 1)
      return true
    }
  }

  return {
    entities,
    addEntity,
    removeEntity,
  }
}
