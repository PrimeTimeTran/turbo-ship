import _ from 'lodash'
import { faker } from '@faker-js/faker'

const reactionTypes = ['like', 'love', 'laugh', 'wow', 'sad', 'angry']
const categories = [
  'fashion',
  'animals',
  'business',
  'city',
  'nature',
  'nightlife',
  'people',
  'sports',
  'transport',
  'food',
]

function generatePersonUrl(sex) {
  let genderPic = sex == 'male' ? 'men' : 'women'
  let range = { min: 1, max: 90 }
  return `https://randomuser.me/api/portraits/${genderPic}/${faker.number.int(range)}.jpg`
}

export default defineEventHandler(async (e) => {
  // const banks = await seedBanks()
  // const wizards = await seedWizards()
  let posts = []
  let count = 0
  while (count < 20) {
    const sex = faker.person.sex()
    const fullName = faker.person.fullName({ sex })
    const title = faker.person.jobTitle()
    let urlAvatar = generatePersonUrl(sex)
    const urlProfile = faker.internet.url()
    const user = {
      name: fullName,
      title,
      urlAvatar,
      urlProfile,
      networkDegree: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }
    let reactionItems = []
    let reactionCount = faker.number.int({ min: 5, max: 10 })
    while (reactionCount > 0) {
      let reactionSex = faker.person.sex()
      let reaction = {
        id: faker.database.mongodbObjectId(),
        type: faker.helpers.arrayElement(reactionTypes),
        user: {
          name: faker.person.fullName({ sex: reactionSex }),
          title: faker.person.jobTitle(),
          caption: faker.person.bio(),
          networkDegree: faker.number.int(1, 5),
          urlAvatar: faker.image.avatar(),
        },
      }
      reactionItems.push(reaction)
      reactionCount--
    }

    let imgCount = faker.number.int({ min: 1, max: 3 })
    let attachments = []
    while (imgCount > 0) {
      let attachment = {
        id: faker.database.mongodbObjectId(),
        url: faker.image.urlLoremFlickr({ category: faker.helpers.arrayElement(categories) }),
        type: 'photo',
      }
      attachments.push(attachment)
      imgCount--
    }

    let isAd = faker.helpers.arrayElement([true, false])
    let ad = {}
    if (isAd) {
      ad = {
        promoterName: faker.company.name(),
        body: faker.lorem.sentences(),
        title: faker.company.buzzPhrase(),
        url: faker.image.url(),
        urlImg: faker.image.url(),
        urlText: `${faker.company.buzzVerb()} ${faker.company.catchPhraseNoun()}`,
        buttonText: faker.company.buzzNoun(),
      }
    }

    const item = {
      id: faker.database.mongodbObjectId(),
      body: faker.lorem.sentences(2, 7),
      user,
      type: {
        privacy: faker.helpers.arrayElement(['global', 'network']),
        caption: faker.lorem.lines(),
        ad,
      },
      reactions: {
        meta: {
          countShares: faker.number.int({ min: 1, max: 25 }),
          countComments: faker.number.int({ min: 1, max: 50 }),
          countReactions: faker.number.int({ min: 1, max: 100 }),
        },
        items: reactionItems,
      },
      attachments,
    }
    posts.push(item)
    count++
  }

  return {
    posts,
  }
})
