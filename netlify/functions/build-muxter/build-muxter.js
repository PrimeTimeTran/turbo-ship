// Previous:
// NPM, CJS,
//
const fs = require('fs')
const { Turboship } = require('@primetimetran/muxter')
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

    await stallForZip()

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

async function stallForZip() {
  await new Promise((resolve) => setImmediate(resolve))
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 9000),
  )
}

module.exports = { handler }
