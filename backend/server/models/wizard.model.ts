import { z } from 'zod'
import { defineMongooseModel } from '#nuxt/mongoose'

export const WizardSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email(),
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

  house: {
    type: String,
    required: true,
  },
  potions: {
    type: Number,
    required: true,
  },
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
  patronus: {
    type: String,
    required: true,
  },
  topSpells: {
    type: Array,
    required: true,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: false,
  },
  updatedAt: {
    type: String,
    required: false,
  },
  // squib, muggle, half, pure,

  // attributes
  //
})
