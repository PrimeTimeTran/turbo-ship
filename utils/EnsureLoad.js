function setupHotkeys() {
  hotkeys(
    'alt+f, alt+b, alt+d, alt+cmd+e, alt+v, alt+e, alt+r, alt+l, alt+s,alt+c, alt+h, alt+p, alt+o, alt+n, alt+a, alt+t, alt+1, alt+2, enter, cmd+alt+1',
    function (event, handler) {
      console.log('EnsureLoad click')
      switch (handler.key) {
        case 'alt+f':
          document.getElementById('FileMenu').click()
          break
        case 'alt+l':
          document.getElementById('showLeft').click()
          break
        case 'alt+d':
          document.getElementById('previewer').click()
          break
        case 'alt+cmd+e':
          document.getElementById('devTools').click()
          break
        case 'alt+v':
          document.getElementById('ViewMenu').click()
          break
        case 'alt+s':
          document.getElementById('SortSubmenu').click()
          break
        case 'alt+e':
          document.getElementById('EntitiesSubmenu').click()
          break
        case 'alt+c':
          document.getElementById('CollapseSubmenu').click()
          break
        case 'alt+r':
          document.getElementById('showRight').click()
          break
        case 'alt+b':
          document.getElementById('FeedbackSubmenu').click()
          break
        case 'alt+h':
          document.getElementById('HelpSubmenu').click()
          break
        case 'alt+p':
          document.getElementById('actionSparse').click()
          break
        case 'alt+o':
          document.getElementById('actionCopy').click()
          break
        case 'alt+n':
          document.getElementById('inputRef').focus()
          break
        case 'alt+a':
          document.getElementById('attributeInput').focus()
          break
        case 'alt+t':
          document.getElementById('actionStore').click()
          break
        case 'alt+1':
          document.querySelectorAll('section')[1].click()
          break
        case 'alt+2':
          document.querySelectorAll('section')[1].click()
          break
        case 'enter':
          const active = document.activeElement
          const child = active.querySelector('.entity-input')
          child.focus()
          break
        case 'cmd+alt+1':
          // Unable to unfocus an input
          // document.activeElement.blur()
          // console.log('Removing')
          // setTimeout(() => {
          //   document.activeElement.blur()
          // }, 1000)

          break
        default:
          alert(event)
      }
    },
  )
}

export function loadJS(url, async = true) {
  let loaded = null

  function loadFile() {
    try {
      let scriptEle = document.createElement('script')
      scriptEle.setAttribute('src', url)
      scriptEle.setAttribute('type', 'text/javascript')
      scriptEle.setAttribute('async', async)
      document.body.appendChild(scriptEle)

      scriptEle.addEventListener('load', () => {
        console.log('Loaded!')
        if (url === scriptUrls.hotkeys) setupHotkeys()
        loaded = true
      })

      scriptEle.addEventListener('error', (ev) => {
        console.log('Error on loading file', ev)
        loaded = false
        retryLoad()
      })
    } catch (error) {
      console.log('Failed to load', error)
      retryLoad()
    }
  }

  function retryLoad() {
    if (!loaded) {
      console.log('Retrying load...')
      setTimeout(loadFile, 1000)
    } else {
      console.log('Load successful')
    }
  }

  loadFile()
}

const scriptUrls = {
  chart: 'https://unpkg.com/hotkeys-js@3.12.0/dist/hotkeys.min.js',
  hotkeys: 'https://unpkg.com/hotkeys-js@3.12.0/dist/hotkeys.min.js',
}

export function ensureLoad(url) {
  if (!process.browser) return
  console.log('Ensuring load: ', url)
  if (url === scriptUrls.chart && typeof hotkeys === 'undefined') {
    loadJS(url)
  } else if (typeof hotkeys !== 'undefined') {
    setupHotkeys()
  } else {
    loadJS(url)
  }
}
