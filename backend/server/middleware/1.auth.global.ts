const protectedRoutes: string[] = []

function isProtectedPath(path: string) {
  return protectedRoutes.some((route) => path.startsWith(route))
}

export default defineEventHandler(async (e) => {
  const token = e.node.req.rawHeaders[1].split(' ')[1]
  if (isProtectedPath(e.path) && !token) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Must be authenticated',
    })
  } else {
    console.log('Middle Ware!', token)
  }
})
