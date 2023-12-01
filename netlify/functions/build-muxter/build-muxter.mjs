const Turboship = (event, context) =>
  import('@primetimetran/muxter').then(async ({ default: Turboship }) => {
    try {
      const body = JSON.parse(event.body)
      const resp = await new Turboship(body)

      await new Promise((resolve) => setImmediate(resolve))
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, 9000),
      )

      const zipFile = await resp.zip.generateAsync({ type: 'base64' })

      const response = {
        headers: {
          'Content-Type': 'application/zip, application/octet-stream',
          'Content-disposition': `attachment; filename=${`muxter_${new Date().toJSON()}.zip`}`,
        },
        body: zipFile,
        statusCode: 200,
        isBase64Encoded: true,
      }

      return response
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      }
    }
  })

export const handler = Turboship
