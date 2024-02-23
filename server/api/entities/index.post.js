import { Turboship } from '@turboship/Turboship'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const resp = await new Turboship(body)
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })

  try {
    const zipFile = await resp.zip.generateAsync({ type: 'base64' })
    const response = {
      statusCode: 200,
      isBase64Encoded: true,
      headers: {
        'Content-Type': 'application/zip, application/octet-stream',
        'Content-disposition': `attachment; filename=muxter_source.zip`,
      },
    }
    setResponseHeaders(event, response)
    return send(event, zipFile)
  } catch (error) {
    console.error('Error sending zip file:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
})
