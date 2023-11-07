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
  industry: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  patronus: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  topSpells: {
    type: Array,
    required: true,
  },
  // squib, muggle, half, pure,

  // attributes
  //
})
