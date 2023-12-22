const isDeveloping = process.env.NODE_ENV === 'development'

export default defineEventHandler(async (e) => {
  try {
    const isAuthenticated = e.context.user && e.context.user.roles.includes('admin')
    const isAuthorized = isDeveloping || isAuthenticated
    if (!isAuthorized)
      throw createError({
        statusCode: 403,
        statusMessage: 'Unauthorized',
      })
  } catch (error) {
    logger.error({ err: error }, 'Error:')
    const statusCode = error.statusCode === 403 ? 403 : 500
    const statusMessage = error.statusCode === 403 ? 'Forbidden: Unauthorized access' : 'Internal Server error'
    throw createError({
      statusCode,
      statusMessage,
    })
  }
})
