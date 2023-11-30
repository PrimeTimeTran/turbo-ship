const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')
const Turboship = require('@turboship/muxter').default

async function addFolderToZip(zip, folderPath, parentFolderName) {
  try {
    const files = await fs.promises.readdir(folderPath)
    const promises = []

    for (const file of files) {
      const filePath = path.join(folderPath, file)
      const stat = await fs.promises.stat(filePath)

      if (stat.isDirectory()) {
        const subFolderName = path.join(parentFolderName, file)
        promises.push(addFolderToZip(zip, filePath, subFolderName))
      } else {
        const content = await fs.promises.readFile(filePath)
        const relativePath = path.join(parentFolderName, file)
        zip.file(relativePath, content)
      }
    }

    await Promise.all(promises)
  } catch (error) {
    console.log({
      error,
    })
  }
}

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body)
    console.log('Starting src gen...')
    await new Turboship('/tmp/turboship', body)
    await new Promise((resolve) => setImmediate(resolve))
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, 9000),
    )
    console.log('Zipping...')
    const zip = new JSZip()
    await addFolderToZip(zip, '/tmp/turboship/flutter', 'flutter')
    await addFolderToZip(zip, '/tmp/turboship/nuxt', 'nuxt')

    const zipFile = await zip.generateAsync({ type: 'base64' })

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
