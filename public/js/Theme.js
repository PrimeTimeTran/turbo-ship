let issDark =
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
console.log('Local Storage dark', issDark)
console.log('Local Storage dark', localStorage.theme)
// if (issDark) {
//   document.documentElement.classList.add('dark')
//   document.documentElement.classList.add('dark-mode')
// } else {
//   document.documentElement.classList.remove('dark')
//   document.documentElement.classList.remove('dark-mode')
// }
