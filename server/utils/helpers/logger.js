import pino from 'pino'

// trace, debug, info, warn, error, fatal
export const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      messageKey: 'message',
    },
  },
})
