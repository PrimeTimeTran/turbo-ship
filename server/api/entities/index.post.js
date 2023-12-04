import { Turboship } from '@netlify/functions/build-muxter/Turboship/Turboship.js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const resp = await new Turboship(body)
  await new Promise((resolve) => {
    setTimeout(resolve, 9000)
  })

  try {
    const zipFile = await resp.zip.generateAsync({ type: 'base64' })
    const response = {
      headers: {
        'Content-Type': 'application/zip, application/octet-stream',
        'Content-disposition': `attachment; filename=muxter_source.zip`,
      },
      statusCode: 200,
      isBase64Encoded: true,
    }
    setResponseHeaders(event, response)
    return send(event, zipFile)
  } catch (error) {
    console.error('Error sending zip file:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
})
