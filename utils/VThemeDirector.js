import { useDark, useToggle } from '@vueuse/core'

let isDark = useDark()

function configTheme() {
  const htmlElement = document.querySelector('html')
  let newTheme = 'light'
  if (isDark.value) {
    newTheme = 'dark'
  }
  htmlElement.setAttribute('data-theme', newTheme)
}

if (process.browser) {
  configTheme()
}

function daisyThemeToggle() {
  const htmlElement = document.querySelector('html')
  let theme = htmlElement.getAttribute('data-theme')
  let newTheme = 'light'
  if (theme === 'light') {
    newTheme = 'dark'
  } else if (theme === 'dark') {
    newTheme = 'light'
  }
  htmlElement.setAttribute('data-theme', newTheme)
}

export function toggleTheme() {
  isDark = useDark()
  const toggleDark = useToggle(isDark)
  daisyThemeToggle()
  toggleDark()
}
