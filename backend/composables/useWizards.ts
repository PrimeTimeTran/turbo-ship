import { ref, computed, onMounted } from 'vue'

import { usingFetch } from './usingFetch'
import { RefSymbol } from '@vue/reactivity'

interface Wizard {
  id: string
  firstName: string
  lastName: string
}

export function useWizardsTS() {
  let newWizard = ref('')

  // POST good, GET bad
  // Fails to set wizards.value after fetching data
  // let wizards = reactive<Wizard[]>([]) as unknown as Wizard[]

  // const addWizard = async () => {
  //   const wizard = {
  //     id: Date.now().toString(),
  //     firstName: newWizard.value,
  //     lastName: newWizard.value,
  //   }
  //   try {
  //     const { data, error } = await useFetch<Wizard>(
  //       `http://localhost:3000/api/wizards`,
  //       {
  //         method: 'POST',
  //         body: {
  //           wizard,
  //         },
  //       }
  //     )
  //     if (!error.value) {
  //       console.log('No Error posting', { data: data.value })
  //       wizards.push(wizard)
  //       newWizard.value = ''
  //       return wizard
  //     }
  //   } catch (error) {
  //     console.error({ error })
  //   }
  // }

  // onBeforeMount(async () => {
  //   const { data, hasError } = await usingFetch<Wizard[]>(
  //     `http://localhost:3000/api/wizards`
  //   )
  //   if (!hasError.value) {
  //     const val = data.value
  //     // wizards = val
  //     console.log({
  //       val,
  //       data,
  //     })
  //   }
  // })

  // return {
  //   wizards,
  //   newWizard,
  //   addWizard,
  // }

  // GET good, POST bad
  // Fails to push in addWizard due to typing
  // let wizards = ref<Wizard[]>([])

  // const addWizard = async () => {
  //   const wizard = {
  //     id: Date.now().toString(),
  //     firstName: newWizard.value,
  //     lastName: newWizard.value,
  //   }
  //   try {
  //     const { data, error } = await useFetch(
  //       `http://localhost:3000/api/wizards`,
  //       {
  //         method: 'POST',
  //         body: {
  //           wizard,
  //         },
  //       }
  //     )
  //     if (!error.value) {
  //       console.log('No Error posting', { data: data.value })

  //       newWizard.value = ''
  //       return wizard
  //     }
  //   } catch (error) {
  //     console.error({ error })
  //   }
  // }

  // onBeforeMount(async () => {
  //   const { data, hasError } = await usingFetch<Wizard[]>(
  //     `http://localhost:3000/api/wizards`
  //   )
  //   if (!hasError.value) {
  //     const val = data.value!
  //     wizards.value = val
  //   }
  // })

  // return {
  //   wizards,
  //   newWizard,
  //   addWizard,
  // }

  let wizards = reactive<Wizard[]>([]) as unknown as Wizard[]

  const addWizard = async () => {
    const wizard = {
      id: Date.now().toString(),
      firstName: newWizard.value,
      lastName: newWizard.value,
    }
    try {
      const { data, error } = await useFetch(
        `http://localhost:3000/api/wizards`,
        {
          method: 'POST',
          body: {
            wizard,
          },
        }
      )
      if (!error.value) {
        console.log('No Error posting', { data: data.value })
        wizards.push(wizard)
        newWizard.value = ''
        return wizard
      }
    } catch (error) {
      console.error({ error })
    }
  }

  onBeforeMount(async () => {
    const { data, error } = await useFetch(`http://localhost:3000/api/wizards`)
    if (!error.value) {
      const val = data.value! as Wizard[]
      console.log({
        val,
      })
      // wizards = val!
    }
  })

  return {
    wizards,
    newWizard,
    addWizard,
  }
}

const seedData: Ref[] | undefined = []
