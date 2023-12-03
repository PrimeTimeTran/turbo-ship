import { LMS } from './seeds/LMS.js'
import { Bank } from './seeds/Bank.js'
import { Forum } from './seeds/Forum.js'
import { Social } from './seeds/Social.js'
import { Delivery } from './seeds/Delivery.js'
import { RealEstate } from './seeds/RealEstate.js'

export const seeds = {
  bank: Bank,
  lms: LMS,
  forum: Forum,
  social: Social,
  delivery: Delivery,
  realestate: RealEstate,
}

export default seeds
