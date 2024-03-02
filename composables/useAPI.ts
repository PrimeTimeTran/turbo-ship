export function useAPI() {
  const {
    public: { apiUrl, hostUrl },
  } = useRuntimeConfig()
  return { apiUrl, hostUrl }
}
