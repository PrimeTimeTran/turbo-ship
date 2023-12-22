import mitt from 'mitt'

interface User {
  name: string
}
interface Message {
  user: User
  body: string
}

type ApplicationEvents = {
  'test:email': User
  'user:registered': User
  'user:deleted': User
  'message:created': Message
}

export default defineNuxtPlugin(() => {
  const emitter = mitt<ApplicationEvents>()

  return {
    provide: {
      event: emitter.emit, // Will emit an event
      listen: emitter.on, // Will register a listener for an event
    },
  }
})
