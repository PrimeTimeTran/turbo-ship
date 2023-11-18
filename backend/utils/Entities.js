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
