import fs from 'fs'
const currentDirectory = process.cwd()

// printPath()

export const handler = async (event, context) => {
  try {
    let path = './TurboshipCJS/Turboship.js'
    if (false) {
      path = './netlify/functions/build-muxter/TurboshipCJS/Turboship.js'
    }
    let response
    await import(path)
      .then(async (module) => {
        const { Turboship } = module
        const body = JSON.parse(event.body)
        const resp = await new Turboship(body)
        await stall()
        const zipFile = await resp.zip.generateAsync({ type: 'base64' })
        response = {
          headers: {
            'Content-disposition': 'attachment',
            'Content-Type': 'application/zip, application/octet-stream',
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

async function stall() {
  await new Promise((resolve) => setImmediate(resolve))
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 9000),
  )
}

function printPath() {
  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }

    console.log(`Contents of current directory (${currentDirectory}):`)
    files.forEach((file) => {
      console.log(file)
    })
  })

  fs.readdir(currentDirectory + '/netlify', (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }

    console.log(`Contents of current directory (${currentDirectory}):`)
    files.forEach((file) => {
      console.log(file)
    })
  })
}
