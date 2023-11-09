import { z } from 'zod'
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
  // Defense against the dark arts
  DADA: z.number().optional(),
  charms: z.number().optional(),
  apparition: z.boolean().optional(),
  patronus: z.string().optional(),
  topSpells: z.array(z.string()).optional(),
  avatarUrl: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type WizardType = z.infer<typeof WizardSchema>

export const Wizard = defineMongooseModel('Wizard', {
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
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  industry: {
    type: String,
  },

  house: {
    type: String,
  },
  potions: {
    type: Number,
  },
  DADA: {
    type: Number,
  },
  charms: {
    type: Number,
  },
  apparition: {
    type: Boolean,
  },
  patronus: {
    type: String,
  },
  topSpells: {
    type: Array,
  },
  avatarUrl: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  // squib, muggle, half, pure,

  // attributes
  //
})
