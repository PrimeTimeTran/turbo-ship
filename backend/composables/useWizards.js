import { ref } from 'vue'
import { useRuntimeConfig } from '#imports'
import { useFetch } from '@vueuse/core'

// Todo
// Search by email, id,
// Filter by every property
// Dates on certain fields
// Sort by alphabetical or number value of a field
// Add Table

export async function useWizards() {
  const {
    public: { apiUrl },
  } = useRuntimeConfig()
  const baseURL = `${apiUrl}/wizards`
  console.log({
    spammm: apiUrl,
  })
  let newWizard = ref('')
  const wizards = ref([])

  // Create
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
        // TODO: Fix data.value being a ref
        // Not sure how to do it correctly. It's a ref so can't be pushed
        const wiz = data.value.wizard
        wizards.value.push(wizard)
        newWizard.value = ''
        return wizard
      }
    } catch (error) {
      console.error({ error })
    }
  }

  // Read
  onBeforeMount(async () => {
    const { data, error } = await useFetch(baseURL, {
      suspense: true,
      onError: (error) => console.log('error', error),
      onNewData: (newData) => console.log('newdata', newData),
    })

    if (!error.value) {
      const val = JSON.parse(data.value)
      wizards.value = val?.wizards
    }
  })

  watch(
    () => wizards,
    () => {
      console.log('Just Watched an update!')
    }
  )

  const sort = (field, direction) => {
    if (direction === 'ASC') {
      wizards.value = wizards.value.sort((a, b) =>
        a[field] > b[field] ? 1 : -1
      )
    } else if (direction === 'DESC') {
      wizards.value = wizards.value.sort((a, b) =>
        a[field] > b[field] ? -1 : 1
      )
    } else {
    }
  }

  return {
    sort,
    wizards,
    newWizard,
    addWizard,
  }
}
