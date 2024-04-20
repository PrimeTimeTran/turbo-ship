const mongoose = require('mongoose')
const options = { discriminatorKey: 'class' }

const assetSchema = new mongoose.Schema(
  {
    sym: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0.0,
    },
    mc: {
      type: Number,
      default: 0.0,
    },
    av: {
      type: Number,
      default: 0.0,
    },
    dayHi: {
      type: Number,
      default: 0.0,
    },
    dayLo: {
      type: Number,
      default: 0.0,
    },
    yearHi: {
      type: Number,
      default: 0.0,
    },
    yearLo: {
      type: Number,
      default: 0.0,
    },
    type: {
      type: String,
      enum: ['bond', 'crypto', 'equity'],
    },
  },
  options,
)

const cryptoSchema = assetSchema.clone().add({
  genesisDate: {
    type: Date,
    default: new Date(),
  },
  website: {
    default: '',
    type: String,
  },
  blockchain: {
    default: '',
    type: String,
  },
  whitepaper: {
    default: '',
    type: String,
  },
  supply: {
    default: 0,
    type: Number,
  },
  algorithm: {
    type: String,
    enum: ['rsa', 'md5', 'sha', 'scrypt', 'ethash', 'lanman'],
  },
  consensusMechanism: {
    type: String,
    enum: ['PoW', 'PoS', 'DPoS'],
  },
  exchangeListings: {
    type: String,
    enum: [
      'binance',
      'coinbase',
      'bybit',
      'okx',
      'upbit',
      'kraken',
      'gate.io',
      'kucoin',
      'htx',
      'bitfinex',
      'mexc',
      'bitget',
      'bitstamp',
      'crypto.com',
      'binance-tr',
      'gemini',
      'binance.US',
    ],
  },
  socialMediaLinks: [],
  communityActivity: [],
  developmentActivity: [],
})

const equitySchema = assetSchema.clone().add({
  hq: {
    default: '',
    type: String,
  },
  ceo: {
    default: '',
    type: String,
  },
  founded: {
    default: '',
    type: String,
  },
  dividends: {
    default: 0.0,
    type: Number,
  },
  employees: {
    default: 0,
    type: Number,
  },
  shares: {
    default: 0,
    type: Number,
  },
  pe: {
    type: Number,
    default: 0.0,
  },
  dy: {
    type: Number,
    default: 0.0,
  },
  sector: {
    type: String,
    enum: [
      'it',
      'energy',
      'utilities',
      'materials',
      'realEstate',
      'healthcare',
      'financials',
      'industrials',
      'consumerStaples',
      'consumerDiscetionary',
      'communicationServices',
    ],
  },
})

const bondSchema = assetSchema.clone().add({
  maturityDate: {
    type: Date,
    default: new Date(),
  },
  couponRate: {
    type: Number,
    default: 0.07,
  },
  faceValue: Number,
  issuer: {
    type: String,
    default: '',
  },
  creditRating: {
    type: String,
    default: '',
  },
  yieldToMaturity: Number,
  issueDate: {
    type: Date,
    default: new Date(),
  },
  issuePrice: {
    type: Number,
    default: 0.0,
  },
  couponPaymentFrequency: {
    type: String,
    enum: ['annual', 'biannual', 'quarterly'],
  },
  callable: Boolean,
  convertible: Boolean,
  bondType: {
    type: String,
    enum: ['treasury', 'municipal', 'agency', 'green', 'etfs', 'corporate', 'gov'],
  },
  bondSeries: String,
  issueSize: Number,
  redemptionProvisions: String,
  tradingStatus: {
    type: String,
    enum: ['active', 'illiquid'],
  },
})

const Asset = mongoose.model('Asset', assetSchema)

const Bond = Asset.discriminator('Bond', bondSchema)
const Crypto = Asset.discriminator('Crypto', cryptoSchema)
const Equity = Asset.discriminator('Equity', equitySchema)

module.exports = {
  Bond,
  Crypto,
  Equity,
}



