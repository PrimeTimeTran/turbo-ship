import { faker } from '@faker-js/faker'

export function generateNewIDs(entities) {
  const newEntities = []
  entities.forEach((e) => {
    e._id = faker.database.mongodbObjectId()
    if (e.attributes.length == 0) {
      e.attributes = [
        {
          name: '_id',
          type: 'string',
          _id: faker.database.mongodbObjectId(),
        },
      ]
    }
    e.attributes.forEach((a) => {
      a._id = faker.database.mongodbObjectId()
    })
    newEntities.push(e)
  })
  return newEntities
}

export function addValidations(entities) {
  const newEntities = []
  entities.forEach((e) => {
    if (e.attributes.length == 0) {
      e.attributes = [
        {
          name: '_id',
          type: 'string',
          _id: faker.database.mongodbObjectId(),
          validators: [],
        },
      ]
    }

    e.attributes.forEach((a) => {
      a._id = faker.database.mongodbObjectId()
      if (!a.validators) {
        a.validators = []
      }
      if (!a.validations) {
        a.validations = []
      }
    })
    newEntities.push(e)
  })
  return newEntities
}

export function sparseEntities(entities) {
  return entities.map((e) => {
    return {
      name: e.name,
      attributes: e.attributes.map((a, idx) => {
        if (a.type === 'relation') {
          return a.name + '-' + a.relation.type + '-' + a.relation.name
        } else {
          return a.name + '-type-' + a.type
        }
      }),
    }
  })
}

export function validateEntities(entities) {
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

export function addRelations(entities) {
  const newEntities = []

  entities.forEach((e) => {
    e.attributes.forEach((a) => {
      const item = { ...a }
      if (!a.relation && a.name != '_id') {
        a.relation = {
          type: null,
          name: null,
        }
      }
    })
    newEntities.push(e)
  })
  return newEntities
}
