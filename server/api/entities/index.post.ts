import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

export const __filename = fileURLToPath(import.meta.url)
export const dirName = dirname(__filename)

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  // Todo: Generate src, package, send to client.
  const root = path.join(dirName, '../../temp/')
  const go = new Turboship(root, body)
  console.log({
    body,
  })

  return { code: 200, success: true }
})
