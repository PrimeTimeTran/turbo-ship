import { z } from 'zod'

import { defineMongooseModel } from '#nuxt/mongoose'

export const UserSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  gender: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  jobTitle: z.string().optional(),
  industry: z.string().optional(),
  crAt: z.date().optional(),
  upAt: z.date().optional(),
})

export type UserType = z.infer<typeof UserSchema>

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
