import { defineMongooseModel } from '#nuxt/mongoose'

export const User = defineMongooseModel('User', {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
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
  jobTitle: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  crAt: {
    type: String,
    required: true,
  },
  upAt: {
    type: String,
    required: true,
  },
})
