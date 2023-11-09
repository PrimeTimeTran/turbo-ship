import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

interface Wizard {
  [key: string]: string | undefined
}

export function useWizards() {
  const { apiUrl } = useAPI()
  const baseURL = `${apiUrl}/wizards`
  let newWizard = ref('')
  let wizards = ref<Wizard[]>([])

  const addWizard = async () => {
    if (newWizard.value === '') return
    const wizard = {
      _id: Date.now().toString(),
      firstName: newWizard.value,
      lastName: newWizard.value,
    }
    try {
      const { data, error } = await useFetch(baseURL, {
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
      wizards.value = val?.data
    }
  })

  // Info: fetchFilteredWizards works inside table but not form
  const fetchFilteredWizards = async (fields: object) => {
    const url = makeApiQueryString(apiUrl + '/wizards', fields)
    try {
      let { data, error } = await useFetch(url)
      if (!error.value) {
        const val = JSON.parse(data.value as string)
        wizards.value = val?.data as Wizard[]
      } else {
        console.error('Error fetching wizards:', error.value)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const sort = (field: string, direction: string) => {
    if (direction === 'ASC') {
      wizards.value = wizards.value.sort((a, b) =>
        (a[field] ?? '') > (b[field] ?? '') ? 1 : -1
      )
    } else if (direction === 'DESC') {
      wizards.value = wizards.value.sort((a, b) =>
        (a[field] ?? '') > (b[field] ?? '') ? -1 : 1
      )
    }
  }
  return {
    wizards,
    sort,
    newWizard,
    addWizard,
    fetchFilteredWizards,
  }
}
