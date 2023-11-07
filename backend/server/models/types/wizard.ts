import { z } from 'zod'

export const WizardSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
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
  crAt: z.date().optional(),
  upAt: z.date().optional(),
})

export type WizardType = z.infer<typeof WizardSchema>
