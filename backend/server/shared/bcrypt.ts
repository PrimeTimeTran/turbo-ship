import bcrypt from 'bcrypt'

export const encryptPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 10)
  return hash
}

export const decryptPassword = async (password: string, hash: string) => {
  const valid = await bcrypt.compare(password, hash)
  return valid
}
