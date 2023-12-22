import mitt from 'mitt'

export default function useEventBus() {
  const emitter = mitt()

  function emit(eventName, payload) {
    emitter.emit(eventName, payload)
  }

  function on(eventName, handler) {
    emitter.on(eventName, handler)
  }

  function off(eventName, handler) {
    emitter.off(eventName, handler)
  }

  return {
    emit,
    on,
    off,
  }
}
