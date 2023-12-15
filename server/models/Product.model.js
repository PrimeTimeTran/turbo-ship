import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const productEnumerators = {
  type: {
    bank: 'bank',
    hedgeFund: 'hedgeFund',
    diversified: 'diversified',
  },

  insuranceType: {
    car: 'car',
    home: 'home',
    health: 'health',
    life: 'life',
  },
}

const productSchema = new Schema({
  companyUrl: {
    type: String,
  },
  type: {
    type: String,
    enum: ['bank', 'hedgeFund', 'diversified'],
  },
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  linkForm: {
    type: String,
  },
  linkTerms: {
    type: String,
  },
  linkDisclosure: {
    type: String,
  },
  description: {
    type: String,
  },
  meta: {
    type: String,
  },
  insuranceType: {
    type: String,
    enum: ['car', 'home', 'health', 'life'],
  },
  linkInsuranceQuote: {
    type: String,
  },
})
Auditor.addHooks(productSchema)
export { productSchema }
export const Product = mongoose.model('Product', productSchema)
