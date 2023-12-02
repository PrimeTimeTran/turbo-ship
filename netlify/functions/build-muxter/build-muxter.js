// Why not ESM?
// - Internal dependencies throw errors for __filename already defined.
// - We don't use that global but some node modules due and that error fails Turboship
// import Turboship from '@primetimetran/muxter'

// export default async (event, context) => {
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

const fs = require('fs')
const { Turboship } = require('@primetimetran/muxter')

// 12/2/23
//    - 2.12 Local - Netlify dev server files dl no problem
//    - 2.36 Prod - Netlify doesn't error but also doesn't dl src
//    - 3:30 Prod - Netlify success gen & dl src

const currentDirectory = process.cwd()

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

const handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body)
    const resp = await new Turboship(body)

    await new Promise((resolve) => setImmediate(resolve))
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, 5000),
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
}

module.exports = { handler }
