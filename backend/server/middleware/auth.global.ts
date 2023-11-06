export default defineEventHandler(async (e) => {
  const token = getCookie(e, 'token')
  if (e.path.startsWith('/admin') && !token) {
    throw createError({
      statusCode: 401,
    })
  } else {
    console.log('Middle Ware!', token)
  }
})
