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
})
