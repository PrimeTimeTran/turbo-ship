import { LMS } from './LMS'
import { Mint } from './Mint'
import { Forum } from './Forum'
import { Social } from './Social'
import { Delivery } from './Delivery'
import { RealEstate } from './RealEstate'

interface Seeds {
  String: Entity[]
}

const seeds = {
  lms: LMS,
  mint: Mint,
  forum: Forum,
  social: Social,
  delivery: Delivery,
  realestate: RealEstate,
}

export default seeds