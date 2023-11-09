import { faker } from '@faker-js/faker'

export default defineEventHandler(async (e) => {
  const wizards: WizardType[] = []
  for (const wizard of wizardSeeds) {
    let w = await createWizard(wizard as WizardType)
    wizards.push(w)
  }

  return {
    wizards,
  }
})

async function createWizard(wizard: WizardType): Promise<WizardType> {
  const randomNumber1 = faker.number.int({ min: 1, max: 10 })
  const randomNumber2 = faker.number.int({ min: 1, max: 10 })
  const randomNumber3 = faker.number.int({ min: 1, max: 10 })

  const country = faker.location.country()
  const randomSpells = getRandomUniqueValues(spells, 3)

  const avatarUrl = `https://randomuser.me/api/portraits/${
    wizard.gender == 'm' ? 'men' : 'women'
  }/${faker.number.int({ min: 1, max: 100 })}.jpg`

  const toWizard = {
    gender: wizard.gender,
    firstName: wizard.firstName,
    lastName: wizard.lastName,
    email: faker.internet.email(),
    city: faker.location.city(),
    country: country,
    jobTitle: faker.person.jobTitle(),
    industry: faker.person.jobType(),
    house: wizard.house,
    DADA: randomNumber1,
    potions: randomNumber2,
    charms: randomNumber3,
    apparition: faker.datatype.boolean(),
    patronus: wizard.patronus,
    topSpells: randomSpells,
    avatarUrl: avatarUrl,
  }

  // Useful for cleansing our models before we make them...?
  const w = new Wizard(WizardSchema.parse(toWizard))

  await w.save()

  return w.toObject()
}

const spells = [
  'hexes',
  'charms',
  'curses',
  'spells',
  'jinxes',
  'healing',
  'counters',
  'transfigurations',
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
