import _ from 'lodash'
import { ref } from 'vue'

import seeds from '../utils/seeds/seeds'

export function useEntities() {
  const entities = ref(store.entities)

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
  function clearEntities() {
    const length = entities.value.length
    for (let i = 0; i < length; i++) {
      entities.value.splice(0, 1)
    }
  }
  function setEntities(template: string) {
    const newEntities = _.cloneDeep(seeds[template as keyof typeof seeds])
    clearEntities()

    newEntities.forEach((e: any) => {
      addEntity(e)
    })
  }

  return {
    entities,
    addEntity,
    setEntities,
    removeEntity,
    clearEntities,
  }
}
