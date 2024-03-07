import { LMS } from './seeds/LMS.js'
import { CRM } from './seeds/CRM.js'
import { News } from './seeds/News.js'
import { Bank } from './seeds/Bank.js'
import { Forum } from './seeds/Forum.js'
import { Hotel } from './seeds/Hotel.js'
import { Social } from './seeds/Social.js'
import { Delivery } from './seeds/Delivery.js'
import { Exchange } from './seeds/Exchange.js'
import { RealEstate } from './seeds/RealEstate.js'

export const seeds = {
  lms: LMS,
  crm: CRM,
  bank: Bank,
  news: News,
  hotel: Hotel,
  forum: Forum,
  social: Social,
  delivery: Delivery,
  exchange: Exchange,
  realestate: RealEstate,
}

export default seeds
