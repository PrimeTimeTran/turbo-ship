import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const notify = () => {
  toast('Saved', {
    autoClose: 1000,
  })
}
