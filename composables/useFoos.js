import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

export function useFoos() {
  const { apiUrl } = useAPI()
  const baseURL = `${apiUrl}/foos`
  let foos = ref([])
  let params = ref('')
  let meta = reactive({
    page: ref(1),
    limit: ref(10),
    total: ref(0),
    offset: ref(0),
    pageCount: ref(0),
    totalRecords: ref(0),
  })

  const addFoo = async (fields) => {
    try {
      const { data, error } = await useFetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })
      if (!error.value) {
        const foo = JSON.parse(data.value)
        foos.value.push(foo)
        toastEm('Foo created')
        return foo
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
      foos.value = val?.data
    }
  })
  const fetchFilteredFoos = async (fields) => {
    meta.page = 1
    const queryParams = new URLSearchParams(Object.entries(fields)).toString()
    params.value = queryParams

    const url = makeApiQueryString(apiUrl + `/foos?page=${meta.page}&limit=${meta.limit}`, fields)
    try {
      let { data, error } = await useFetch(url)
      if (!error.value) {
        const val = JSON.parse(data.value)
        meta.page = val.meta.page
        meta.totalRecords = val.meta.totalRecords
        Object.assign(meta, val.meta)
        foos.value = val?.data
      } else {
        console.error('Error fetching foos:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }
  const getPaginationString = (diff) => {
    let nextPage = meta.page + diff
    if (diff == -10) nextPage = 1
    if (diff == 10) nextPage = meta.pageCount
    return [`/foos?page=${nextPage}&limit=${meta.limit}${params.value ? '&' + params.value : ''}`, nextPage]
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
        foos.value = val?.data
      } else {
        console.error('Error fetching foos:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const sort = (field, direction) => {
    if (direction === 'ASC') {
      foos.value = foos.value.sort((a, b) => ((a[field] ?? '') > (b[field] ?? '') ? 1 : -1))
    } else if (direction === 'DESC') {
      foos.value = foos.value.sort((a, b) => ((a[field] ?? '') > (b[field] ?? '') ? -1 : 1))
    }
  }

  return {
    foos,
    sort,
    fetchPage,
    meta,
    addFoo,
    fetchFilteredFoos,
  }
}
