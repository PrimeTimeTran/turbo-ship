import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

interface Meta {
  limit: number
  offset: number
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
  let meta: Meta = reactive({
    limit: ref(0),
    offset: ref(0),
    page: ref(0),
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
    const { data, error } = await useFetch(baseURL)
    if (!error.value) {
      const val = JSON.parse(data.value as string)
      Object.assign(meta, val.meta)
      wizards.value = val?.data
    }
  })

  // Info fetchFilteredWizards works inside table but not form
  const fetchFilteredWizards = async (fields: object) => {
    console.log('Hi fetchFilteredWizards')
    const url = makeApiQueryString(apiUrl + '/wizards', fields)
    try {
      let { data, error } = await useFetch(url)
      if (!error.value) {
        const val = JSON.parse(data.value as string)
        meta.limit = val.meta.limit
        meta.total = val.meta.total
        Object.assign(meta, val.meta)
        wizards.value = val?.data as WizardType[]
      } else {
        console.error('Error fetching wizards:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }
  watch(meta, () => {
    console.log('useWizards meta changed')
  })
  watch(wizards, () => {
    console.log('useWizards meta wizards')
  })

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
    meta,
    newWizard,
    addWizard,
    fetchFilteredWizards,
  }
}
