// https://vue3-toastify.js-bridge.com/usage/positioning-toast.html

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
export const toastEm = (val: string, time: number = 1500) => {
  toast(val, {
    autoClose: time,
    position: toast.POSITION.BOTTOM_RIGHT,
  })
}
