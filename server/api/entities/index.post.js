import { Turboship } from '@primetimetran/muxter'
// import JSZip from 'jszip-sync'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const resp = await new Turboship(body)
  await new Promise((resolve) => {
    setTimeout(resolve, 9000)
  })

  try {
    // Works local. Download unzip no problem
    const zipFile = await resp.zip.generateAsync({ type: 'base64' })
    const response = {
      headers: {
        'Content-Type': 'application/zip, application/octet-stream',
        'Content-disposition': `attachment; filename=muxter_source.zip`,
      },
      statusCode: 200,
      isBase64Encoded: true,
    }
    setResponseHeaders(event, response)
    return send(event, zipFile)

    // Leave to test sending any zip back
    // return send(event, { message: 'Good Work' })
    // const zip = await new JSZip()
    // var zipFile = await zip.sync(function () {
    //   var data = null
    //   zip.file('Hi.txt', '<h1>gogogo</h1>')
    //   zip.generateAsync({ type: 'base64', compression: 'DEFLATE' }).then(function (content) {
    //     data = content
    //   })
    //   return data
    // })
    // const responseHeaders = {
    //   'Content-Type': 'application/zip',
    //   'Content-Disposition': 'attachment; filename=muxter.zip',
    // }
    // setResponseHeaders(event, responseHeaders)
    // return send(event, zipFile)
  } catch (error) {
    console.error('Error sending zip file:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
})

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const resp = await new Turboship(body)
//   await new Promise((resolve) => {
//     setTimeout(resolve, 5000)
//   })
//   const zipFile = await resp.zip.generateAsync({ type: 'base64' })

//   try {
//     const responseHeaders = {
//       headers: {
// 'Content-Type': 'application/zip, application/octet-stream',
// 'Content-disposition': `attachment; filename=${`muxter_${new Date().toJSON()}.zip`}`,
//       },
//       body: zipFile,
//       statusCode: 200,
//       isBase64Encoded: true,
//     }

//     setResponseHeaders(event, responseHeaders)
//     return send(event, zipFile)
//   } catch (error) {
//     console.error('Error sending zip file:', error)
//     return new Response('Internal Server Error', { status: 500 })
//   }
// })

// import { join } from 'path'
// import { readFile } from 'fs/promises'
// import path from 'path'

// import Turboship from '@turboship/muxter'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const root = path.join('/tmp/turboship')
//   const value = await new Turboship(root, body)
//   await new Promise((resolve) => {
//     setTimeout(resolve, 5000)
//   })
//   const zipFilePath = join('/tmp', 'muxter.zip')

//   try {
//     const zipFileContent = await readFile(zipFilePath)

//     const responseHeaders = {
//       'Content-Type': 'application/zip',
//       'Content-Disposition': 'attachment; filename=muxter.zip',
//     }

//     setResponseHeaders(event, responseHeaders)
//     return send(event, zipFileContent)
//   } catch (error) {
//     console.error('Error sending zip file:', error)
//     return new Response('Internal Server Error', { status: 500 })
//   }
// })
