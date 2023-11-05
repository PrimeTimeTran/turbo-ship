interface State<T> {
  isLoading: boolean
  hasError: boolean
  errorMessage: string
  data: T | null
}

export const usingFetch = async <T>(
  url: string,
  options?: Record<string, unknown>
) => {
  const state = reactive<State<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: '',
  })

  const fetchData = async () => {
    state.isLoading = true
    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      state.data = await response.json()
    } catch (error) {
      const typedError = error as Error
      state.hasError = true
      state.errorMessage = typedError.message
    } finally {
      state.isLoading = false
    }
  }

  await fetchData()

  return {
    ...toRefs(state),
  }
}
