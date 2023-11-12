// https://zod.dev/?id=schema-methods
// https://www.npmjs.com/package/nuxt-mongoose
// https://mongoosejs.com/docs/middleware.html#pre
// https://mongoosejs.com/docs/schematypes.html
// https://nuxt-mongoose.nuxt.space/docs/api/utils

import { z } from 'zod'
import { Model, Document } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

export const WizardSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  gender: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  jobTitle: z.string().optional(),
  industry: z.string().optional(),
  house: z.string().optional(),
  potions: z.number().optional(),
  dada: z.number().optional(),
  fanScore: z.number().optional(),
  charms: z.number().optional(),
  apparition: z.boolean().optional(),
  patronus: z.string().optional(),
  topSpells: z.array(z.string()).optional(),
  createdAt: z.date().optional(),
  avatarUrl: z.string().optional(),
  updatedAt: z.date().optional(),
  dob: z.date().optional(),
  languages: z.array(z.string()).optional(),
  bookAppearances: z.array(z.number()).optional(),
})

export type PersonType = {
  firstName: String
  lastName: String
}

export type MuggleType = {
  firstName: String
  lastName: String
}

export type WizardType = z.infer<typeof WizardSchema>

type Combined = WizardType & typeof Model & Document

export const Wizard = defineMongooseModel({
  name: 'Wizard',
  schema: {
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    city: String,
    country: String,
    jobTitle: String,
    industry: String,
    house: String,
    patronus: String,
    createdAt: Date,
    updatedAt: Date,
    dob: Date,
    avatarUrl: String,
    fanScore: Number,
    languages: {
      type: [String],
    },
    bookAppearances: {
      type: [Number],
    },
    topSpells: {
      type: [String],
    },
    potions: {
      type: Number,
      min: 0,
      max: 10,
    },
    charms: {
      type: Number,
      min: 0,
      max: 10,
    },
    dada: {
      type: Number,
      min: 0,
      max: 10,
    },
    apparition: {
      type: Boolean,
    },
  },
  options: {},
  hooks(schema) {
    schema.pre('find', function (this: Combined, next) {
      console.log('Wizard hook pre find')
      next()
    })
    schema.post('find', function (docs, next) {
      console.log('Wizard hook post find')
      next()
    })
  },
})
