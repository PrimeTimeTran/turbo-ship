// ESM Netlify function.
// - Works Locally
// - Fails in prod

export const handler = async (event, context) => {
  try {
    let path = './Turboship/Turboship.js'
    if (false) {
      path = './netlify/functions/build-muxter/Turboship/Turboship.js'
    }
    let response
    await import(path)
      .then(async (module) => {
        let { Turboship } = module
        const body = JSON.parse(event.body)
        const resp = await new Turboship(body)
        await stallForZip()
        const zipFile = await resp.zip.generateAsync({ type: 'base64' })
        response = {
          headers: {
            'Content-Type': 'application/zip, application/octet-stream',
            'Content-disposition': `attachment; filename=${`muxter_${new Date().toJSON()}.zip`}`,
          },
          body: zipFile,
          statusCode: 200,
          isBase64Encoded: true,
        }
        return response
      })
      .catch((error) => {
        // Handle any potential import errors
        console.error('Error importing Turboship:', error)
      })
    return response
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    }
  }
}

async function stallForZip() {
  await new Promise((resolve) => setImmediate(resolve))
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 9000),
  )
}
