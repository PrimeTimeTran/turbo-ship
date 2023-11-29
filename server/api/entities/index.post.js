import { join } from 'path'
import { readFile } from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const root = path.join('/tmp/turboship')
  await Turboship.cleanse(root)
  const value = await new Turboship(root, body)
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })
  const zipFilePath = join('/tmp', 'muxter.zip')

  try {
    const zipFileContent = await readFile(zipFilePath)

    const responseHeaders = {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=muxter.zip',
    }

    setResponseHeaders(event, responseHeaders)
    return send(event, zipFileContent)
  } catch (error) {
    console.error('Error sending zip file:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
})