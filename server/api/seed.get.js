import _ from 'lodash'
import mongoose from 'mongoose'
import { faker } from '@faker-js/faker'

export default defineEventHandler(async (e) => {
  await seedBanks()
  return {
    wizards: ['Harry', 'Hermione', 'Ron'],
  }
})

async function seedBanks() {
  async function createTransactions(user, account, bank) {
    let item = {
      user: user._id,
      account: account._id,
      bank: bank._id,
      amount: faker.commerce.price({ min: 10, max: 250 }),
      status: _.sample(['processing', 'complete', 'declined', 'cancelled', 'rejected']),
      chargeDate: faker.date.recent({ days: 30 }),
      description: faker.commerce.productDescription(),
    }
    let t = await new Transaction(item)
  }

  async function createAccount(user, banks, type) {
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
    while (i < numTransactions) {
      createTransactions(user, account, bank)
      i++
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
    } catch (error) {
      console.error(error)
    }
  }

  async function createUsers(banks) {
    let randomNum
    try {
      let items = []
      for (let idx = 0; idx < 3; idx++) {
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

  await createBanks()
}
