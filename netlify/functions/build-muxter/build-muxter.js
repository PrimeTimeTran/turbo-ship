// ESM technique.
// Have to manually switch between local vs prod path to Turboship.
// Unsure how to do it programmatically

// 12/3/23:
// 8:06 Can gen src local

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

// Previous:
// NPM, CJS,
//
// const fs = require('fs')
// const currentDirectory = process.cwd()

// fs.readdir(currentDirectory, (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err)
//     return
//   }

//   console.log(`Contents of current directory (${currentDirectory}):`)
//   files.forEach((file) => {
//     console.log(file)
//   })
// })

// fs.readdir(currentDirectory + '/netlify', (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err)
//     return
//   }

//   console.log(`Contents of current directory (${currentDirectory}):`)
//   files.forEach((file) => {
//     console.log(file)
//   })
// })

// const handler = async (event, context) => {
//   try {
//     const body = JSON.parse(event.body)
//     const resp = await new Turboship(body)

//     await new Promise((resolve) => setImmediate(resolve))
//     await new Promise((resolve) =>
//       setTimeout(() => {
//         resolve()
//       }, 5000),
//     )

//     const zipFile = await resp.zip.generateAsync({ type: 'base64' })

//     const response = {
//       headers: {
//         'Content-Type': 'application/zip, application/octet-stream',
//         'Content-disposition': `attachment; filename=${`muxter_${new Date().toJSON()}.zip`}`,
//       },
//       body: zipFile,
//       statusCode: 200,
//       isBase64Encoded: true,
//     }

//     return response
//   } catch (error) {
//     console.error(error)
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: 'Internal Server Error' }),
//     }
//   }
// }

// module.exports = { handler }
