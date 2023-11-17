import { faker } from '@faker-js/faker'
export function generateNewIDs(entities) {
  const newEntities = []
  entities.forEach((e) => {
    e._id = faker.database.mongodbObjectId()
    e.attributes.forEach((a) => {
      a._id = faker.database.mongodbObjectId()
    })
    newEntities.push(e)
  })
  return newEntities
}
