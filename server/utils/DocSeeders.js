// https://hp-api.onrender.com/api/characters
// https:potterhead-api.vercel.app/api/characters

import { faker } from '@faker-js/faker'
import _ from 'lodash'
import mongoose from 'mongoose'

export async function seedBanks() {
  function createTransaction(user, account, bank) {
    return {
      user: user._id,
      bank: bank._id,
      account: account._id,
      amount: faker.commerce.price({ min: 10, max: 250 }),
      status: _.sample(['processing', 'complete', 'declined', 'cancelled', 'rejected']),
      chargeDate: faker.date.recent({ days: 30 }),
      description: faker.commerce.productDescription(),
    }
  }

  async function createAccount(user, banks, type) {
    try {
      let bank = _.sample(banks)
      let item = {
        type,
        user: user._id,
        bank: bank._id,
        balance: faker.commerce.price({ min: 250, max: 20000 }),
      }
      let account = await new mongoose.models.Account(item)
      await account.save()
      const numTransactions = faker.number.int({ min: 5, max: 20 })
      let i = 0
      let items = []
      while (i < numTransactions) {
        items.push(createTransaction(user, account, bank))
        i++
      }
      let transactions = await mongoose.models.Transaction.insertMany(items)
      console.log({
        transactions,
      })
      return transactions
    } catch (error) {
      console.log({
        error,
      })
    }
  }

  async function createBanks() {
    const names = [
      'Bank of America',
      'Chase',
      'Fidelity',
      'Wells Fargo',
      'Citibank',
      'Capital One',
      'Citizens',
      'Regions',
    ]

    try {
      let items = names.map((name) => {
        return {
          name: name,
          creditRating: 'a',
          hq: faker.location.city(),
          ceo: faker.person.fullName({ sex: 'male' }),
        }
      })

      let banks = await mongoose.models.Bank.insertMany(items)
      await createUsers(banks)
      return banks
    } catch (error) {
      console.error(error)
    }
  }

  async function createUsers(banks) {
    let randomNum
    try {
      let items = []
      for (let idx = 0; idx < 20; idx++) {
        randomNum = faker.number.int({ min: 1, max: 10 })
        let sex = faker.person.sex()
        let urlAvatar = `https://randomuser.me/api/portraits/${sex == 'male' ? 'men' : 'women'}/${faker.number.int({
          min: 1,
          max: 90,
        })}.jpg`
        let roles = _.sampleSize(['Admin', 'Customer', 'Manager', 'Owner', 'Staff'], randomNum >= 5 ? 1 : 2)
        let data = {
          email: faker.internet.email(),
          bio: faker.person.bio(),
          firstName: faker.person.firstName(sex),
          lastName: faker.person.lastName(sex),
          sex,
          dob: faker.date.birthdate(),
          zodiacSign: faker.person.zodiacSign(),
          urlAvatar: urlAvatar,
          jobArea: faker.person.jobArea(),
          jobDescriptor: faker.person.jobDescriptor(),
          jobTitle: faker.person.jobTitle(),
          jobType: faker.person.jobType(),
          role: roles,
        }
        items.push(data)
      }
      let accounts
      let users = await mongoose.models.User.insertMany(items)
      let accountTypes = ['checking', 'savings', 'credit', 'investing', 'home', 'auto']
      await users.forEach(async (user) => {
        randomNum = faker.number.int({ min: 1, max: 10 })
        accounts = _.sampleSize(accountTypes, randomNum >= 5 ? 2 : 3)
        accounts.map(async (accountType) => {
          return await createAccount(user, banks, accountType)
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return await createBanks()
}

export async function seedWizards() {
  let wizards = []
  for (const wizard of wizardSeeds) {
    let w = await Seeder.createWizard(wizard)
    wizards.push(w)
  }
  return wizards
}

class Seeder {
  spells = ['hexes', 'charms', 'curses', 'spells', 'jinxes', 'healing', 'counters', 'transfigurations']
  programmingLangs = [
    'Javascript',
    'Typescript',
    'Dart',
    'Ruby',
    'Python',
    'Go',
    'C#',
    'C',
    'C++',
    'Java',
    'Kotlin',
    'Mojo',
    'Swift',
    'Rust',
    'PHP',
    'Scala',
    'Perl',
    'R',
    'COBOL',
  ]
  getRandomUniqueValues(arr, count) {
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
  static async createWizard(wizard) {
    const randomNumber1 = faker.number.int({ min: 1, max: 10 })
    const randomNumber2 = faker.number.int({ min: 1, max: 10 })
    const randomNumber3 = faker.number.int({ min: 1, max: 10 })
    let country
    do {
      country = faker.location.country()
    } while (country.length > 30)
    const randomSpells = this.getRandomUniqueValues(this.spells, 3)

    const avatarUrl = `https://randomuser.me/api/portraits/${wizard.gender == 'm' ? 'men' : 'women'}/${faker.number.int(
      {
        min: 1,
        max: 90,
      },
    )}.jpg`

    const languages = _.sampleSize(this.programmingLangs, randomNumber1 >= 5 ? 3 : 6)

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
      dada: randomNumber1,
      potions: randomNumber2,
      charms: randomNumber3,
      apparition: faker.datatype.boolean(),
      patronus: wizard.patronus,
      topSpells: randomSpells,
      avatarUrl: avatarUrl,
      languages,
      fanScore: parseFloat(faker.finance.amount(0, 10, 2)),
      dob: faker.date.birthdate({ max: 70, min: 1, mode: 'age' }),
      bookAppearances:
        wizard.bookAppearances ||
        _.uniq([
          faker.number.int({ min: 1, max: 8 }),
          faker.number.int({ min: 1, max: 8 }),
          faker.number.int({ min: 1, max: 8 }),
          faker.number.int({ min: 1, max: 8 }),
          faker.number.int({ min: 1, max: 8 }),
        ]),
    }

    const w = new Wizard(WizardSchema.parse(toWizard))

    await w.save()

    return w.toObject()
  }
  wizardSeeds = [
    {
      firstName: 'Albus',
      lastName: 'Dumbledore',
      house: 'Gryffindor',
      patronus: 'Phoenix',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Tom',
      lastName: 'Riddle',
      house: 'Slytherin',
      patronus: 'None',
      gender: 'm',
      bookAppearances: [2, 6],
    },
    {
      firstName: 'Gellert',
      lastName: 'Grindelwald',
      house: 'Unknown',
      patronus: 'None',
      gender: 'm',
    },
    {
      firstName: 'Severus',
      lastName: 'Snape',
      house: 'Slytherin',
      patronus: 'Doe',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Alastor',
      lastName: 'Moody',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Minerva',
      lastName: 'McGonagall',
      house: 'Gryffindor',
      patronus: 'Cat',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Lily',
      lastName: 'Potter',
      house: 'Gryffindor',
      patronus: 'Doe',
      gender: 'f',
    },
    {
      firstName: 'Bellatrix',
      lastName: 'Lestrange',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Kingsley',
      lastName: 'Shacklebolt',
      house: 'Unknown',
      patronus: 'Lynx',
      gender: 'm',
    },
    {
      firstName: 'Filius',
      lastName: 'Flitwick',
      house: 'Ravenclaw',
      patronus: 'Jack Russell Terrier',
      gender: 'm',
    },
    {
      firstName: 'Barty',
      lastName: 'Crouch Jr',
      house: 'Unknown',
      patronus: 'None',
      gender: 'm',
    },
    {
      firstName: 'Amelia',
      lastName: 'Bones',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Antonin',
      lastName: 'Dolohov',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Rufus',
      lastName: 'Scrimgeour',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Horace',
      lastName: 'Slughorn',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Igor',
      lastName: 'Karkaroff',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Remus',
      lastName: 'Lupin',
      house: 'Gryffindor',
      patronus: 'Wolf',
      gender: 'm',
    },
    {
      firstName: 'Sirius',
      lastName: 'Black',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
      bookAppearances: [3],
    },
    {
      firstName: 'James',
      lastName: 'Potter',
      house: 'Gryffindor',
      patronus: 'Stag',
      gender: 'm',
    },
    {
      firstName: 'Regulus',
      lastName: 'Black',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Thorfinn',
      lastName: 'Rowle',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Nymphadora',
      lastName: 'Tonks',
      house: 'Hufflepuff',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Phineas Nigellus',
      lastName: 'Black',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Barty',
      lastName: 'Crouch Sr',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Lucius',
      lastName: 'Malfoy',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Narcissa',
      lastName: 'Malfoy',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Molly',
      lastName: 'Weasley',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Hermione',
      lastName: 'Granger',
      house: 'Gryffindor',
      patronus: 'Otter',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Harry',
      lastName: 'Potter',
      house: 'Gryffindor',
      patronus: 'Stag',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Peter',
      lastName: 'Pettigrew',
      house: 'Gryffindor',
      patronus: 'Rat',
      gender: 'm',
    },
    {
      firstName: 'Aberforth',
      lastName: 'Dumbledore',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Corban',
      lastName: 'Yaxley',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Garrick',
      lastName: 'Ollivander',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Pomona',
      lastName: 'Sprout',
      house: 'Hufflepuff',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Arthur',
      lastName: 'Weasley',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Madame',
      lastName: 'Maxime',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Avery',
      lastName: 'Sr',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Rodolphus',
      lastName: 'Lestrange',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Augustus',
      lastName: 'Rookwood',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Cornelius',
      lastName: 'Fudge',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Dolores',
      lastName: 'Umbridge',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Pius',
      lastName: 'Thicknesse',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Madam',
      lastName: 'Pomfrey',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Bill',
      lastName: 'Weasley',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Fleur',
      lastName: 'Delacour',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Viktor',
      lastName: 'Krum',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Charlie',
      lastName: 'Weasley',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Draco',
      lastName: 'Malfoy',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Ron',
      lastName: 'Weasley',
      house: 'Gryffindor',
      patronus: 'Jack Russell Terrier',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Fenrir',
      lastName: 'Greyback',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Percy',
      lastName: 'Weasley',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Neville',
      lastName: 'Longbottom',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Gregorovitch',
      lastName: 'Unknown',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Xenophilius',
      lastName: 'Lovegood',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Sybill',
      lastName: 'Trelawney',
      house: 'Ravenclaw',
      patronus: 'None',
      gender: 'f',
    },
    {
      firstName: 'Quirinus',
      lastName: 'Quirrel',
      house: 'Unknown',
      patronus: 'None',
      gender: 'm',
      bookAppearances: [1],
    },
    {
      firstName: 'Newton',
      lastName: 'Scamander',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Elphias',
      lastName: 'Doge',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Thaddeus',
      lastName: 'Travers',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Crabbe',
      lastName: 'Sr',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Goyle',
      lastName: 'Sr',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Ginny',
      lastName: 'Weasley',
      house: 'Gryffindor',
      patronus: 'Horse',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Luna',
      lastName: 'Lovegood',
      house: 'Ravenclaw',
      patronus: 'Hare',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Rolanda',
      lastName: 'Hooch',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Wilhelmina',
      lastName: 'Grubbly-Plank',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Oliver',
      lastName: 'Wood',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Rabastan',
      lastName: 'Lestrange',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Antioch',
      lastName: 'Scabior',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Andromeda',
      lastName: 'Tonks',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Ludovic',
      lastName: 'Bagman',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Stanley',
      lastName: 'Shunpike',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Dirk',
      lastName: 'Gibbon',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Mafalda',
      lastName: 'Hopkirk',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Rubeus',
      lastName: 'Hagrid',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Cho',
      lastName: 'Chang',
      house: 'Ravenclaw',
      patronus: 'Unknown',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Dean',
      lastName: 'Thomas',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Blaise',
      lastName: 'Zabini',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Seamus',
      lastName: 'Finnigan',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Ernie',
      lastName: 'Macmillan',
      house: 'Hufflepuff',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Alicia',
      lastName: 'Spinnet',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Angelina',
      lastName: 'Johnson',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Romilda',
      lastName: 'Vane',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Lee',
      lastName: 'Jordan',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Katie',
      lastName: 'Bell',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Pansy',
      lastName: 'Parkinson',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Hannah',
      lastName: 'Abbot',
      house: 'Hufflepuff',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Parvati',
      lastName: 'Patil',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Padma',
      lastName: 'Patil',
      house: 'Ravenclaw',
      patronus: 'Unknown',
      gender: 'f',
      bookAppearances: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      firstName: 'Susan',
      lastName: 'Bones',
      house: 'Hufflepuff',
      patronus: 'Unknown',
      gender: 'f',
    },
    {
      firstName: 'Cormac',
      lastName: 'McLaggen',
      house: 'Gryffindor',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Colin',
      lastName: 'Creevey',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Vincent',
      lastName: 'Crabbe',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Gregory',
      lastName: 'Goyle',
      house: 'Slytherin',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Myrtle',
      lastName: 'Warren',
      house: 'Ravenclaw',
      patronus: 'Unknown',
      gender: 'f',
      bookAppearances: [2],
    },
    {
      firstName: 'Argus',
      lastName: 'Filch',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'm',
    },
    {
      firstName: 'Arabella',
      lastName: 'Figg',
      house: 'Unknown',
      patronus: 'Unknown',
      gender: 'f',
    },
  ]
}
