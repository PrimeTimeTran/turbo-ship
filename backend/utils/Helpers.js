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

export function addValidators(entities) {
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
    })
    newEntities.push(e)
  })
  return newEntities
}

export function sparseEntities(entities) {
  const newEntities = []
  entities.forEach((e) => {
    const name = e.name
    const attributes = []
    e.attributes.forEach((a) => {
      attributes.push(a.name)
    })
    newEntities.push({
      [name]: attributes,
    })
  })
  return newEntities
}
