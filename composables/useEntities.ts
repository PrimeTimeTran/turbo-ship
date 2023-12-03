import _ from 'lodash'

import seeds from '../utils/seeds.js'

export function useEntities() {
  const entities = reactive(store.entities)

  const addEntity = (e: any) => {
    entities.push(e)
  }
  const removeEntity = (id: string) => {
    const idx = entities.findIndex((e: any) => e._id === id)
    if (idx !== -1) {
      entities.splice(idx, 1)
      return true
    }
  }
  function clearEntities() {
    const length = entities.length
    for (let i = 0; i < length; i++) {
      entities.splice(0, 1)
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
