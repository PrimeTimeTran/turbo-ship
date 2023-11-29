const JSZip = require('jszip')
const { Turboship } = require('../../../server/utils/Turboship')
const fs = require('fs')
const path = require('path')

async function addFolderToZip(zip, folderPath, parentFolderName) {
  const files = await fs.promises.readdir(folderPath)
  for (const file of files) {
    const filePath = path.join(folderPath, file)
    const stat = await fs.promises.stat(filePath)
    if (stat.isDirectory()) {
      const subFolderName = path.join(parentFolderName, file)
      await addFolderToZip(zip, filePath, subFolderName)
    } else {
      const content = await fs.promises.readFile(filePath)
      const relativePath = path.join(parentFolderName, file)
      zip.file(relativePath, content)
    }
  }
}

exports.handler = async (event, context) => {
  try {
    fs.rmSync('/tmp/turboship', { recursive: true, force: true })
    const body = JSON.parse(event.body)
    await new Turboship('/tmp/turboship', body)

    const zip = new JSZip()
    await addFolderToZip(zip, '/tmp/turboship/flutter', 'flutter')
    await addFolderToZip(zip, '/tmp/turboship/nuxt', 'nuxt')

    await new Promise((resolve) => setTimeout(resolve, 9000))

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
