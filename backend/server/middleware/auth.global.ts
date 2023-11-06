// const protectedRoutes = ['/admin', '/api']
const protectedRoutes: string[] = []

function isProtectedPath(path: string) {
  return protectedRoutes.some((route) => path.startsWith(route))
}

export default defineEventHandler(async (e) => {
  const token = getCookie(e, 'token')
  if (isProtectedPath(e.path) && !token) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Must be authenticated',
    })
  } else {
    console.log('Middle Ware!', token)
  }
})
