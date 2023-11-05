import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/themes/tailwind'

export default {
  theme: tailwind,
  locales: { en },
  locale: 'en',
  formData(form$) {
    console.log({
      gogo: form$.formData,
    })
    return form$.convertFormData(form$.requestData)
  },
  endpoints: {
    create_wizard: {
      url: 'http://localhost:3000/api/wizards',
      method: 'post',
    },
  },
}
