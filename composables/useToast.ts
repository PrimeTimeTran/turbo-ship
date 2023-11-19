import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const notify = (val: string) => {
  toast(val, {
    autoClose: 1500,
  })
}
