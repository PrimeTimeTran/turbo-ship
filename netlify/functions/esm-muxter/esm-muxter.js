import fs from 'fs'
const currentDirectory = process.cwd()

// Tradeoffs below lead to switching back from local definitions of Turboship to npm package.
// Tried combining them because building package, deploying to npm, installing really slowed down workflow
// import { Turboship } from '@primetimetran/muxter'

printPath()
export const handler = async (event, context) => {
  try {
    let path = './TurboshipCJS/Turboship.js'
    if (true) {
      path = './netlify/functions/build-muxter/TurboshipCJS/Turboship.js'
      // Tradeoffs
      // - Find path
      // - Bundle correctly

      // path = './netlify/functions/esm-muxter/TurboshipCJS/Turboship.js'
      // Dec 19, 12:32:54 PM: 034e6f7a ERROR  Error importing Turboship: Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/var/task/netlify/functions/esm-muxter/netlify/functions/esm-muxter/TurboshipCJS/Turboship.js' imported from /var/task/netlify/functions/esm-muxter/esm-muxter.js
      // Did you mean to import ../TurboshipCJS/Turboship.js?

      // path = './TurboshipCJS/Turboship.js'
      // Dec 19, 12:34:16 PM: 9329da43 ERROR  Error importing Turboship: Error: Cannot find module 'chalk'
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
