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
    const newEntities = _.cloneDeep(seeds[template as keyof typeof seeds].entities)
    clearEntities()

    newEntities.forEach((e: any) => {
      addEntity(e)
    })
  }
  function invalids() {
    let items: any = {}
    entities.forEach((e) => {
      e.attributes.forEach((a) => {
        // let enumInvalid = Validator.enumTypes.includes(a.type) && _.isNil(a.options)
        let enumInvalid = Validator.enumTypes.includes(a.type)
        let relationInvalid = a.type === 'relation' && _.isNil(a.relation?.name)
        if (enumInvalid || relationInvalid) {
          if (!items[e.name]) items[e.name] = []
          items[e.name].push(a.name)
        }
      })
    })
    return items
  }

  return {
    entities,
    invalids,
    addEntity,
    setEntities,
    removeEntity,
    clearEntities,
  }
}
