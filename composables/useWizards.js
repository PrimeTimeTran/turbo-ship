import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
// https://stackoverflow.com/questions/76839341/which-to-use-fetch-useasyncdata-or-usefetch-for-get-and-post-requests-in-nuxt
export function useWizards() {
  const { apiUrl } = useAPI()
  const baseURL = `${apiUrl}/wizards`
  let wizards = ref([])
  let params = ref('')
  let meta = reactive({
    limit: ref(10),
    page: ref(1),
    pageCount: ref(0),
    total: ref(0),
    totalRecords: ref(0),
  })
  const addWizard = async (fields) => {
    try {
      const { data, error } = await useFetch(baseURL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })

      if (!error.value) {
        let wizard = JSON.parse(data.value)
        wizards.value.push(wizard)
        toastEm('Wizard created')
        return wizard
      }
    } catch (error) {
      console.error({ error })
    }
  }
  onBeforeMount(async () => {
    const { data, error } = await useFetch(baseURL + `?page=${meta.page}&limit=${meta.limit}`)
    if (!error.value) {
      const val = JSON.parse(data.value)
      Object.assign(meta, val.meta)
      wizards.value = val?.data
    }
  })

  const fetchFilteredWizards = async (fields) => {
    meta.page = 1

    const queryParams = new URLSearchParams(Object.entries(fields)).toString()
    params.value = queryParams

    const url = makeApiQueryString(apiUrl + `/wizards?page=${meta.page}&limit=${meta.limit}`, fields)
    try {
      let { data, error } = await useFetch(url)
      if (!error.value) {
        const val = JSON.parse(data.value)
        meta.page = val.meta.page
        meta.totalRecords = val.meta.totalRecords
        Object.assign(meta, val.meta)
        wizards.value = val?.data
      } else {
        console.error('Error fetching wizards:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const getPaginationString = (diff) => {
    let nextPage = meta.page + diff
    if (diff == -10) nextPage = 1
    if (diff == 10) nextPage = meta.pageCount
    return [`/wizards?page=${nextPage}&limit=${meta.limit}${params.value ? '&' + params.value : ''}`, nextPage]
  }

  const fetchPage = async (diff) => {
    let [str, nextPage] = getPaginationString(diff)

    const url = makeApiQueryString(apiUrl + str, {})
    try {
      let { data, error } = await useFetch(url)
      if (!error.value) {
        const val = JSON.parse(data.value)
        meta.page = nextPage
        Object.assign(meta, val.meta)
        wizards.value = val?.data
      } else {
        console.error('Error fetching wizards:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const sort = (field, direction) => {
    if (direction === 'ASC') {
      wizards.value = wizards.value.sort((a, b) => ((a[field] ?? '') > (b[field] ?? '') ? 1 : -1))
    } else if (direction === 'DESC') {
      wizards.value = wizards.value.sort((a, b) => ((a[field] ?? '') > (b[field] ?? '') ? -1 : 1))
    }
  }

  return {
    wizards,
    sort,
    fetchPage,
    meta,
    addWizard,
    fetchFilteredWizards,
  }
}
