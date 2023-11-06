import { faker } from '@faker-js/faker'

const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
const spells = [
  'charms',
  'curses',
  'transfigurations',
  'healing',
  'spells',
  'jinxes',
  'hexes',
  'counters',
]

function getRandomUniqueValues(arr: string[], count: number) {
  if (count >= arr.length) {
    return arr
  }

  const uniqueValues = new Set()
  const result = []

  while (uniqueValues.size < count) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const randomValue = arr[randomIndex]

    if (!uniqueValues.has(randomValue)) {
      uniqueValues.add(randomValue)
      result.push(randomValue)
    }
  }

  return result
}

function getRandomElementFromArray() {
  const randomIndex = Math.floor(Math.random() * houses.length)
  return houses[randomIndex]
}

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const randomNumber1 = faker.number.int({ min: 1, max: 10 })
  const randomNumber2 = faker.number.int({ min: 1, max: 10 })
  const randomNumber3 = faker.number.int({ min: 1, max: 10 })

  const gender = faker.person.sexType()
  const country = faker.location.country()
  const randomSpells = getRandomUniqueValues(spells, 3)

  const wizard = new Wizard({
    gender: gender,

    firstName: faker.person.firstName(gender),
    lastName: faker.person.lastName(gender),
    // lastName: body.firstName || faker.person.firstName(),
    // firstName: body.firstName || faker.person.lastName(),

    email: faker.internet.email(),
    city: faker.location.city(),
    country: country,
    jobTitle: faker.person.jobTitle(),
    industry: faker.person.jobType(),

    house: getRandomElementFromArray(),
    DADA: randomNumber1,
    potions: randomNumber2,
    charms: randomNumber3,
    apparition: faker.datatype.boolean(),
    patronus: faker.animal.type(),
    topSpells: randomSpells,
  })

  await wizard.save()

  return { wizard }
})
