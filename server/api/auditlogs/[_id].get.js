export default defineEventHandler(async (event) => {
          try {
            return await Foo.findOne({ _id: event.context.params?._id })
          } catch (error) {
            return error
          }
        })
      