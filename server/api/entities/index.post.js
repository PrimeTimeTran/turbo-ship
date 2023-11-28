import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { readFile } from 'fs/promises';
import path from 'path'

export const __filename = fileURLToPath(import.meta.url)
export const dirName = dirname(__filename)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const root = path.join(dirName, '../../temp/')
  await Turboship.cleanse(root)
  const value = await new Turboship(root, body)
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })
  const zipFilePath = join(dirName, '../../output.zip')

  try {
    const zipFileContent = await readFile(zipFilePath)

    const responseHeaders = {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=output.zip',
    }

    setResponseHeaders(event, responseHeaders)
    return send(event, zipFileContent)
  } catch (error) {
    console.error('Error sending zip file:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
})