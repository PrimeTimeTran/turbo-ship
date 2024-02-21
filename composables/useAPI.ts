export function useAPI() {
  const {
    public: { apiUrl, commonUrl },
  } = useRuntimeConfig()
  return { apiUrl, commonUrl }
}
