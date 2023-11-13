import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

interface Meta {
  limit: number
  page: number
  pageCount: number
  total: number
  totalRecords: number
}

export function useWizards() {
  const { apiUrl } = useAPI()
  const baseURL = `${apiUrl}/wizards`
  let newWizard = ref('')
  let wizards = ref<WizardType[]>([])
  let params = ref('')
  let meta: Meta = reactive({
    limit: ref(10),
    page: ref(1),
    pageCount: ref(0),
    total: ref(0),
    totalRecords: ref(0),
  })

  const addWizard = async () => {
    if (newWizard.value === '') return
    const wizard = {
      _id: Date.now().toString(),
      firstName: newWizard.value,
      lastName: newWizard.value,
    }
    try {
      const { error } = await useFetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(wizard),
      })
      if (!error.value) {
        wizards.value.push(
          wizard as { _id: string; firstName: string; lastName: string }
        )
        newWizard.value = ''
        return wizard
      }
    } catch (error) {
      console.error({ error })
    }
  }

  onBeforeMount(async () => {
    const { data, error } = await useFetch(
      baseURL + `?page=${meta.page}&limit=${meta.limit}`
    )
    if (!error.value) {
      const val = JSON.parse(data.value as string)
      Object.assign(meta, val.meta)
      wizards.value = val?.data
    }
  })

  // Info fetchFilteredWizards works inside table but not form
  const fetchFilteredWizards = async (fields: object) => {
    meta.page = 1

    // Convert the combinedFields object to a query string
    const queryParams = new URLSearchParams(Object.entries(fields)).toString()
    params.value = queryParams
    console.log({
      queryParams,
      params,
    })

    const url = makeApiQueryString(
      apiUrl + `/wizards?page=${meta.page}&limit=${meta.limit}`,
      fields
    )
    try {
      let { data, error } = await useFetch(url)
      if (!error.value) {
        const val = JSON.parse(data.value as string)
        meta.page = val.meta.page
        meta.totalRecords = val.meta.totalRecords
        Object.assign(meta, val.meta)
        wizards.value = val?.data as WizardType[]
      } else {
        console.error('Error fetching wizards:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const getPaginationString = (diff: number) => {
    let nextPage = meta.page + diff
    if (diff == -10) nextPage = 1
    if (diff == 10) nextPage = meta.pageCount
    return [
      `/wizards?page=${nextPage}&limit=${meta.limit}${
        params.value ? '&' + params.value : ''
      }`,
      nextPage,
    ]
  }

  const fetchPage = async (diff: number) => {
    let [str, nextPage] = getPaginationString(diff)

    const url = makeApiQueryString(apiUrl + str, {})
    console.log({ url })
    try {
      let { data, error } = await useFetch(url)
      if (!error.value) {
        const val = JSON.parse(data.value as string)
        meta.page = nextPage as number
        Object.assign(meta, val.meta)
        wizards.value = val?.data as WizardType[]
      } else {
        console.error('Error fetching wizards:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const sort = (field: keyof WizardType, direction: 'ASC' | 'DESC') => {
    if (direction === 'ASC') {
      wizards.value = wizards.value.sort((a: WizardType, b: WizardType) =>
        (a[field] ?? '') > (b[field] ?? '') ? 1 : -1
      )
    } else if (direction === 'DESC') {
      wizards.value = wizards.value.sort((a: WizardType, b: WizardType) =>
        (a[field] ?? '') > (b[field] ?? '') ? -1 : 1
      )
    }
  }

  return {
    wizards,
    sort,
    fetchPage,
    meta,
    newWizard,
    addWizard,
    fetchFilteredWizards,
  }
}
