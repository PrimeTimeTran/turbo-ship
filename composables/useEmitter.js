// https://dev.to/israelortuno/event-bus-pattern-in-nuxt-3-with-full-typescript-support-1okp
export default function () {
  const hooks = useNuxtApp().hooks

  return {
    on: hooks.hook,
    emit: hooks.callHook,
  }
}

// // usage in components
// someFunction(){
//   const emitter = useEmitter();
//   emitter.emit("test-emit", "hello world");
// }

// // anoter components
//  const emitter = useEmitter();
//  emitter.on("test-emit", (payload) => {
//     console.log(payload);
//  });
