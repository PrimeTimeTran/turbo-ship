// https://hp-api.onrender.com/api/characters
// https:potterhead-api.vercel.app/api/characters

import { faker } from '@faker-js/faker'
import _ from 'lodash'
import mongoose from 'mongoose'

export async function seedBanks() {
  async function createTransactions(banks, branches, users, accounts) {
    function createTransaction(account) {
      return {
        user: account.user,
        bank: account.bank,
        branch: account.branch,
        account: account._id,
        chargeDate: faker.date.recent({ days: 30 }),
        amount: faker.commerce.price({ min: 5, max: 2500 }),
        description: faker.finance.transactionDescription(),
        status: _.sample(['processing', 'complete', 'declined', 'cancelled', 'rejected']),
      }
    }
    try {
      let transactions = []
      accounts.map((a) => {
        let i = 0
        while (i < faker.number.int({ min: 5, max: 20 })) {
          transactions.push(createTransaction(a))
          i++
        }
      })
      transactions = await mongoose.models.Transaction.insertMany(transactions)
      let promises = await transactions.map(async (t) => {
        let bank = await Bank.findById(t.bank).exec()
        let branch = await Branch.findById(t.branch).exec()
        let user = await User.findById(t.user).exec()
        let account = await Account.findById(t.account).exec()
        if (bank && branch && user && account) {
          bank.transactions.push(t._id)
          branch.transactions.push(t._id)
          user.transactions.push(t._id)
          account.transactions.push(t._id)
          await bank.save()
          await branch.save()
          await user.save()
          await account.save()
        }
      })
      await Promise.all(promises)
      return transactions
    } catch (error) {
      console.log({
        error,
      })
    }
  }

  async function createAccounts(banks, branches, users) {
    let accountTypes = ['checking', 'savings', 'credit', 'investing', 'home', 'auto']
    function createAccount(user) {
      let branch = _.sample(branches)
      return {
        user: user._id,
        branch: branch._id,
        bank: branch.bank._id,
        type: _.sample(accountTypes),
        accountNumber: faker.finance.accountNumber(),
        routingNumber: faker.finance.routingNumber(),
        balance: faker.commerce.price({ min: 250, max: 20000 }),
      }
    }
    let accounts = []
    users.map((user) => {
      let i = 0
      while (i < faker.number.int({ min: 1, max: 5 })) {
        accounts.push(createAccount(user))
        i++
      }
    })
    accounts = await mongoose.models.Account.insertMany(accounts)
    let promises = await accounts.map(async (a) => {
      let bank = await Bank.findById(a.bank).exec()
      if (bank) {
        let branch = await Branch.findById(bank._id).exec()
        if (branch) {
          let user = await User.findById(a.user).exec()
          if (user) {
            user.accounts.push(a)
            bank.accounts.push(a)
            branch.accounts.push(a)
            await user.save()
            await bank.save()
            await branch.save()
          }
        }
      }
    })
    await Promise.all(promises)
    return accounts
  }

  async function createUsers(banks, branches) {
    function createUser() {
      let randomNum = faker.number.int({ min: 1, max: 10 })
      let sex = faker.person.sex()
      let genderPic = sex == 'male' ? 'men' : 'women'
      let img = { min: 1, max: 90 }
      let urlAvatar = `https://randomuser.me/api/portraits/${genderPic}/${faker.number.int(img)}.jpg`
      let roles = _.sampleSize(['Admin', 'Customer', 'Manager', 'Owner', 'Staff'], randomNum >= 5 ? 1 : 2)
      return {
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
    }
    try {
      let i = 0
      let users = []
      while (i < faker.number.int({ min: 750, max: 1000 })) {
        // while (i < faker.number.int({ min: 5, max: 10 })) {
        users.push(createUser())
        i++
      }
      users = await mongoose.models.User.insertMany(users)
      let promises = await users.map(async (u) => {
        let branch = _.sample(branches)
        branch = await Branch.findById(branch._id).exec()
        if (branch) {
          let bank = await Bank.findById(branch.bank).exec()
          if (bank) {
            await u.branches.push(branch._id)
            await u.banks.push(bank._id)
            await bank.users.push(u._id)
            await branch.users.push(u._id)
            await u.save()
            await branch.save()
            await bank.save()
          }
        } else {
          console.log({
            branch,
            error: `Bank with _id ${branch} not found`,
          })
        }
      })
      await Promise.all(promises)
      return users
    } catch (error) {
      console.error(error)
    }
  }

  async function createBranches(banks) {
    function createBankBranches(bank) {
      let randomNum = faker.number.int({ min: 5, max: 20 })
      // let randomNum = faker.number.int({ min: 5, max: 7 })
      let i = 0
      let branches = []
      while (i < randomNum) {
        branches.push({
          bank,
          phone: faker.phone.number(),
          manager: {
            phone: faker.phone.number(),
            email: faker.internet.email(),
            fullName: faker.person.fullName({ sex: 'male' }),
          },
          location: {
            email: faker.internet.email(),
            streetAddress: faker.location.streetAddress(),
            city: faker.location.city(),
            county: faker.location.county(),
            state: faker.location.state({ abbreviated: true }),
            country: faker.location.country(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
            zipCode: faker.location.zipCode(),
          },
          description: faker.lorem.paragraphs(5),
          opened: faker.date.between({ from: '1850-01-01T00:00:00.000Z', to: '1950-01-01T00:00:00.000Z' }),
        })
        i++
      }
      return branches
    }
    let branches = banks.map((b) => createBankBranches(b))
    try {
      branches = await mongoose.models.Branch.insertMany(_.flatten(branches))
      let promises = await branches.map(async (branch) => {
        let bank = await Bank.findById(branch.bank._id).exec()
        if (bank) {
          await bank.branches.push(branch._id)
          await bank.save()
        }
      })
      await Promise.all(promises)
      return await branches
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
        let founded = faker.date.between({ from: '1850-01-01T00:00:00.000Z', to: '1950-01-01T00:00:00.000Z' })
        return {
          name,
          founded,
          creditRating: 'a',
          hq: faker.location.city(),
          ceo: faker.person.fullName({ sex: 'male' }),
          description: faker.lorem.paragraphs({ min: 7, max: 12 }),
          email: faker.internet.email(),
          phone: faker.phone.number(),
        }
      })

      // let banks = await Bank.where({}).exec()
      // let branches = await Branch.where({}).exec()
      // let users = await User.where({}).exec()
      // let accounts = await Account.where({}).exec()
      // let transactions = await createTransactions(banks, branches, users, accounts)
      // if (transactions) {
      //   console.log({
      //     transactions: transactions.length,
      //   })
      // }

      let banks = await mongoose.models.Bank.insertMany(items)
      if (banks) {
        let branches = await createBranches(banks)
        if (branches) {
          let users = await createUsers(banks, branches)
          if (users) {
            let accounts = await createAccounts(banks, branches, users)
            if (accounts) {
              let transactions = await createTransactions(banks, branches, users, accounts)
              if (transactions) {
                console.log({
                  transactions: transactions.length,
                })
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return await createBanks()
}

export async function seedWizards() {
  let wizards = []
  for (const wizard of Seeder.wizardSeeds) {
    let w = await Seeder.createWizard(wizard)
    wizards.push(w)
  }
  return wizards
}

class Seeder {
  static spells = ['hexes', 'charms', 'curses', 'spells', 'jinxes', 'healing', 'counters', 'transfigurations']
  static programmingLangs = [
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
  static getRandomUniqueValues(arr, count) {
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
    const randomSpells = Seeder.getRandomUniqueValues(Seeder.spells, 3)

    const avatarUrl = `https://randomuser.me/api/portraits/${wizard.gender == 'm' ? 'men' : 'women'}/${faker.number.int(
      {
        min: 1,
        max: 90,
      },
    )}.jpg`

    const languages = _.sampleSize(Seeder.programmingLangs, randomNumber1 >= 5 ? 3 : 6)

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
  static wizardSeeds = [
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
