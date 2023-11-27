import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

export const __filename = fileURLToPath(import.meta.url)
export const dirName = dirname(__filename)

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody(e)
    // Todo: Generate src, package, send to client.
    const root = path.join(dirName, '../../temp/')
    await Turboship.cleanse(root)
    const go = await new Turboship(root, body)

    console.log({
      body,
    })

    return { code: 200, success: true }
  } catch (error) {
    console.log({
      error
    })
  }
})
