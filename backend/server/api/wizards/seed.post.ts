import { faker } from '@faker-js/faker'

interface Wizard {
  firstName: String
  lastName: String
  gender: String
  house: String
  patronus: String
}

export default defineEventHandler(async (e) => {
  const wizards: Wizard[] = []
  for (const wizard of seedsTwo) {
    let w = await createWizard(wizard)
    wizards.push(w)
  }

  return {
    wizards,
  }
})

async function createWizard(wizard: Wizard): Promise<Wizard> {
  const randomNumber1 = faker.number.int({ min: 1, max: 10 })
  const randomNumber2 = faker.number.int({ min: 1, max: 10 })
  const randomNumber3 = faker.number.int({ min: 1, max: 10 })

  const country = faker.location.country()
  const randomSpells = getRandomUniqueValues(spells, 3)

  const avatarUrl = `https://randomuser.me/api/portraits/${
    wizard.gender == 'male' ? 'men' : 'women'
  }/${faker.number.int({ min: 1, max: 100 })}.jpg`

  const w = new Wizard({
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
  })

  await w.save()

  return w.toObject() as Wizard
}

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

const seeds = [
  'Albus Dumbledore',
  'Tom Riddle',
  'Gellert Grindlewald',
  'Severus Snape',
  'Alastor Moody',
  'Minerva McGonagall',
  'Lily Potter',
  'Bellatrix Lestrange',
  'Kingsley Shacklebolt',
  'Filius Flitwick',
  'Barty Crouch Jr',
  'Amelia Bones',
  'Antonin Dolohov',
  'Rufus Scrimgeour',
  'Horace Slughorn',
  'Igor Karkaroff',
  'Remus Lupin',
  'Sirius Black',
  'James Potter',
  'Regulus Black',
  'Thorfinn Rowle',
  'Nymphadora Tonks',
  'Phineas Nigellus Black',
  'Barty Crouch Sr',
  'Lucius Malfoy',
  'Narcissa Malfoy',
  'Molly Weasley',
  'Hermione Granger',
  'Harry Potter',
  'Peter Pettigrew',
  'Aberforth Dumbledore',
  'Corban Yaxley',
  'Garrick Ollivander',
  'Pomona Sprout',
  'Arthur Weasley',
  'Madame Maxime',
  'Avery Sr',
  'Rodolphus Lestrange',
  'Augustus Rookwood',
  'Cornelius Fudge',
  'Dolores Umbridge',
  'Pius Thicknesse',
  'Madam Pomfrey',
  'Bill Weasley',
  'Fleur Delaceur',
  'Viktor Krum',
  'Charlie Weasley',
  'Draco Malfoy',
  'Ron Weasley',
  'Fenrir Greyback',
  'Percy Weasley',
  'Neville Longbottom',
  'Gregorovitch',
  'Xenophilius Lovegood',
  'Sybill Trelawney',
  'Quirinus Quirrel',
  'Newton Scamander',
  'Elphias Doge',
  'Thaddeus Travers',
  'Crabbe Sr',
  'Goyle Sr',
  'Ginny Weasley',
  'Luna Lovegood',
  'Rolanda Hooch',
  'Wilhelmina Grubbly-Plank',
  'Oliver Wood',
  'Rabastan Lestrange',
  'Antioch Scabior',
  'Andromeda Tonks',
  'Ludovic Bagman',
  'Stanley Shunpike',
  'Dirk Gibbon',
  'Mafalda Hopkirk',
  'Rubeus Hagrid',
  'Cho Chang',
  'Dean Thomas',
  'Blaise Zabini',
  'Seamus Finnigan',
  'Ernie Macmillan',
  'Alicia Spinnet',
  'Angelina Johnson',
  'Romilda Vane',
  'Lee Jordan',
  'Katie Bell',
  'Pansy Parkinson',
  'Hannah Abbot',
  'Parvati Pravil',
  'Padma Pravil',
  'Susan Bones',
  'Cormac Mclaggen',
  'Colin Creevey',
  'Vincent Crabbe',
  'Gregory Goyle',
  'Moaning Myrtle',
  'Argus Filch',
  'Arabella Figg',
]

const seedsTwo: Wizard[] = [
  {
    firstName: 'Albus',
    lastName: 'Dumbledore',
    house: 'Gryffindor',
    patronus: 'Phoenix',
    gender: 'male',
  },
  {
    firstName: 'Tom',
    lastName: 'Riddle',
    house: 'Slytherin',
    patronus: 'None',
    gender: 'male',
  },
  {
    firstName: 'Gellert',
    lastName: 'Grindelwald',
    house: 'Unknown',
    patronus: 'None',
    gender: 'male',
  },
  {
    firstName: 'Severus',
    lastName: 'Snape',
    house: 'Slytherin',
    patronus: 'Doe',
    gender: 'male',
  },
  {
    firstName: 'Alastor',
    lastName: 'Moody',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Minerva',
    lastName: 'McGonagall',
    house: 'Gryffindor',
    patronus: 'Cat',
    gender: 'female',
  },
  {
    firstName: 'Lily',
    lastName: 'Potter',
    house: 'Gryffindor',
    patronus: 'Doe',
    gender: 'female',
  },
  {
    firstName: 'Bellatrix',
    lastName: 'Lestrange',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Kingsley',
    lastName: 'Shacklebolt',
    house: 'Unknown',
    patronus: 'Lynx',
    gender: 'male',
  },
  {
    firstName: 'Filius',
    lastName: 'Flitwick',
    house: 'Ravenclaw',
    patronus: 'Jack Russell Terrier',
    gender: 'male',
  },
  {
    firstName: 'Barty',
    lastName: 'Crouch Jr',
    house: 'Unknown',
    patronus: 'None',
    gender: 'male',
  },
  {
    firstName: 'Amelia',
    lastName: 'Bones',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Antonin',
    lastName: 'Dolohov',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Rufus',
    lastName: 'Scrimgeour',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Horace',
    lastName: 'Slughorn',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Igor',
    lastName: 'Karkaroff',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Remus',
    lastName: 'Lupin',
    house: 'Gryffindor',
    patronus: 'Wolf',
    gender: 'male',
  },
  {
    firstName: 'Sirius',
    lastName: 'Black',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'James',
    lastName: 'Potter',
    house: 'Gryffindor',
    patronus: 'Stag',
    gender: 'male',
  },
  {
    firstName: 'Regulus',
    lastName: 'Black',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Thorfinn',
    lastName: 'Rowle',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Nymphadora',
    lastName: 'Tonks',
    house: 'Hufflepuff',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Phineas Nigellus',
    lastName: 'Black',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Barty',
    lastName: 'Crouch Sr',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Lucius',
    lastName: 'Malfoy',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Narcissa',
    lastName: 'Malfoy',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Molly',
    lastName: 'Weasley',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Hermione',
    lastName: 'Granger',
    house: 'Gryffindor',
    patronus: 'Otter',
    gender: 'female',
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    house: 'Gryffindor',
    patronus: 'Stag',
    gender: 'male',
  },
  {
    firstName: 'Peter',
    lastName: 'Pettigrew',
    house: 'Gryffindor',
    patronus: 'Rat',
    gender: 'male',
  },
  {
    firstName: 'Aberforth',
    lastName: 'Dumbledore',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Corban',
    lastName: 'Yaxley',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Garrick',
    lastName: 'Ollivander',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Pomona',
    lastName: 'Sprout',
    house: 'Hufflepuff',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Arthur',
    lastName: 'Weasley',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Madame',
    lastName: 'Maxime',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Avery',
    lastName: 'Sr',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Rodolphus',
    lastName: 'Lestrange',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Augustus',
    lastName: 'Rookwood',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Cornelius',
    lastName: 'Fudge',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Dolores',
    lastName: 'Umbridge',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Pius',
    lastName: 'Thicknesse',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Madam',
    lastName: 'Pomfrey',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Bill',
    lastName: 'Weasley',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Fleur',
    lastName: 'Delacour',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Viktor',
    lastName: 'Krum',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Charlie',
    lastName: 'Weasley',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Draco',
    lastName: 'Malfoy',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Ron',
    lastName: 'Weasley',
    house: 'Gryffindor',
    patronus: 'Jack Russell Terrier',
    gender: 'male',
  },
  {
    firstName: 'Fenrir',
    lastName: 'Greyback',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Percy',
    lastName: 'Weasley',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Neville',
    lastName: 'Longbottom',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Gregorovitch',
    lastName: 'Unknown',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Xenophilius',
    lastName: 'Lovegood',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Sybill',
    lastName: 'Trelawney',
    house: 'Ravenclaw',
    patronus: 'None',
    gender: 'female',
  },
  {
    firstName: 'Quirinus',
    lastName: 'Quirrel',
    house: 'Unknown',
    patronus: 'None',
    gender: 'male',
  },
  {
    firstName: 'Newton',
    lastName: 'Scamander',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Elphias',
    lastName: 'Doge',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Thaddeus',
    lastName: 'Travers',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Crabbe',
    lastName: 'Sr',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Goyle',
    lastName: 'Sr',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Ginny',
    lastName: 'Weasley',
    house: 'Gryffindor',
    patronus: 'Horse',
    gender: 'female',
  },
  {
    firstName: 'Luna',
    lastName: 'Lovegood',
    house: 'Ravenclaw',
    patronus: 'Hare',
    gender: 'female',
  },
  {
    firstName: 'Rolanda',
    lastName: 'Hooch',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Wilhelmina',
    lastName: 'Grubbly-Plank',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Oliver',
    lastName: 'Wood',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Rabastan',
    lastName: 'Lestrange',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Antioch',
    lastName: 'Scabior',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Andromeda',
    lastName: 'Tonks',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Ludovic',
    lastName: 'Bagman',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Stanley',
    lastName: 'Shunpike',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Dirk',
    lastName: 'Gibbon',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Mafalda',
    lastName: 'Hopkirk',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Rubeus',
    lastName: 'Hagrid',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Cho',
    lastName: 'Chang',
    house: 'Ravenclaw',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Dean',
    lastName: 'Thomas',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Blaise',
    lastName: 'Zabini',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Seamus',
    lastName: 'Finnigan',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Ernie',
    lastName: 'Macmillan',
    house: 'Hufflepuff',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Alicia',
    lastName: 'Spinnet',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Angelina',
    lastName: 'Johnson',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Romilda',
    lastName: 'Vane',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Lee',
    lastName: 'Jordan',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Katie',
    lastName: 'Bell',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Pansy',
    lastName: 'Parkinson',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Hannah',
    lastName: 'Abbot',
    house: 'Hufflepuff',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Parvati',
    lastName: 'Patil',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Padma',
    lastName: 'Patil',
    house: 'Ravenclaw',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Susan',
    lastName: 'Bones',
    house: 'Hufflepuff',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Cormac',
    lastName: 'McLaggen',
    house: 'Gryffindor',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Colin',
    lastName: 'Creevey',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Vincent',
    lastName: 'Crabbe',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Gregory',
    lastName: 'Goyle',
    house: 'Slytherin',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Myrtle',
    lastName: 'Warren',
    house: 'Ravenclaw',
    patronus: 'Unknown',
    gender: 'female',
  },
  {
    firstName: 'Argus',
    lastName: 'Filch',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'male',
  },
  {
    firstName: 'Arabella',
    lastName: 'Figg',
    house: 'Unknown',
    patronus: 'Unknown',
    gender: 'female',
  },
]
