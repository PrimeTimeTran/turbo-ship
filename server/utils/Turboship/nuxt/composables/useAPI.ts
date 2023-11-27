export function useAPI() {
  const {
    public: { apiUrl },
  } = useRuntimeConfig()
  return { apiUrl }
}
