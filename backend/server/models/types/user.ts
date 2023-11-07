import { z } from 'zod'

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
