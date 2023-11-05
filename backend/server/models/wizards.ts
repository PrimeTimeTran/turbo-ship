import { defineMongooseModel } from '#nuxt/mongoose'

export const Wizard = defineMongooseModel('Wizard', {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  house: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  potions: {
    type: Number,
    required: true,
  },
  // Defense against the dark arts
  DADA: {
    type: Number,
    required: true,
  },
  charms: {
    type: Number,
    required: true,
  },
  apparition: {
    type: Boolean,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
})
