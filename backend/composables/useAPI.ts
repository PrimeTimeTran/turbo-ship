import { ref, computed } from 'vue'
export function useAPI() {
  const {
    public: { apiUrl },
  } = useRuntimeConfig()
  return { apiUrl }
}
