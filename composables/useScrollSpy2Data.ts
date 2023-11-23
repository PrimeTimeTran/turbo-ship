import { watch, computed, reactive } from 'vue'

export interface Item {
  href: string
  label: string
}

export interface Section {
  id: string
  title: string
  text: string
}

export function useScrollSpy2Data(length = 10) {
  const start = parseInt('0')
  const end = parseInt('10')
  const parsedLength = end - start + 1
  const items = ref<Item[]>([])
  const isMobile = process.browser
    ? window.matchMedia('(max-width: 610px)').matches
    : null

  const minText = isMobile ? 50 : 80
  const maxText = isMobile ? 100 : 320

  const sections = reactive(
    Array.from(
      { length: parsedLength <= 1 ? length : parsedLength },
      (_, index) => ({
        id: `title_${start + index}`,
        title: `${start + index} `.repeat(6).toUpperCase(),
        text: 'Text '.repeat(getInt(minText, maxText)),
      })
    )
  )

  const lastNum = computed(() =>
    parseInt(sections[sections.length - 1]?.title ?? '-1')
  )
  const firstNum = computed(() => parseInt(sections[0]?.title ?? '-1'))

  function shiftSection() {
    sections.shift()
  }

  function pushSection() {
    sections.push({
      id: `title_${lastNum.value + 1}`,
      title: `${lastNum.value + 1} `.repeat(6).toUpperCase(),
      text: 'Text '.repeat(getInt(50, 100)),
    })
  }

  watch(
    [firstNum, lastNum],
    ([newFirst, newLast]) => {
      console.log('Hi')
    },
    { immediate: true }
  )

  return { sections, items, pushSection, shiftSection }
}

function getInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
