import { Mint } from './Mint'
import { Forum } from './Forum'
import { Social } from './Social'
import { Delivery } from './Delivery'
import { RealEstate } from './RealEstate'

export interface Seeds {
  String: Entity[]
}

const seeds = {
  mint: Mint,
  forum: Forum,
  social: Social,
  delivery: Delivery,
  realestate: RealEstate,
}

export default seeds
export { seeds }