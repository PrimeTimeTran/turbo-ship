import { faker } from '@faker-js/faker'

const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

function getRandomElementFromArray() {
  const randomIndex = Math.floor(Math.random() * houses.length)
  return houses[randomIndex]
}

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const randomNumber1 = faker.number.int({ min: 1, max: 10 })
  const randomNumber2 = faker.number.int({ min: 1, max: 10 })
  const randomNumber3 = faker.number.int({ min: 1, max: 10 })

  const wizard = new Wizard({
    lastName: faker.person.firstName(),
    firstName: faker.person.lastName(),
    // lastName: body.firstName || faker.person.firstName(),
    // firstName: body.firstName || faker.person.lastName(),
    email: faker.internet.email(),
    house: getRandomElementFromArray(),
    DADA: randomNumber1,
    potions: randomNumber2,
    charms: randomNumber3,
    apparition: faker.datatype.boolean(),
    gender: faker.person.sexType(),
    jobTitle: faker.person.jobTitle(),
    industry: faker.person.jobType(),
  })

  await wizard.save()

  return { wizard }
})
