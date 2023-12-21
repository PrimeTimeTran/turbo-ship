import pino from 'pino'

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      messageKey: 'message',
    },
  },
  serializers: {
    err: (error) => {
      if (error instanceof Error) {
        return {
          stack: error.stack,
          message: error.message,
          code: error.code || 'UNKNOWN_ERROR_CODE',
        }
      }
      return error
    },
  },
})
