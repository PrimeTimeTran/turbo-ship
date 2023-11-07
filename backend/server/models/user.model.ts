import { defineMongooseModel } from '#nuxt/mongoose'

export const User = defineMongooseModel('User', {
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})
