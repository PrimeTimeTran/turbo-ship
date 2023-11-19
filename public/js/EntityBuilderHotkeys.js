function setupHotkeys() {
  hotkeys(
    'alt+e,alt+s,alt+c, alt+r, alt+f, alt+h, alt+d, alt+o, alt+n, alt+a, alt+t, alt+1, alt+2, enter, cmd+alt+1',
    function (event, handler) {
      console.log('Handling: ', event)
      switch (handler.key) {
        case 'alt+e':
          document.getElementById('viewEntities').click()
          break
        case 'alt+s':
          document.getElementById('viewSort').click()
          break
        case 'alt+c':
          document.getElementById('actionCollapse').click()
          break
        case 'alt+r':
          document.getElementById('viewRelationships').click()
          break
        case 'alt+f':
          document.getElementById('viewFeedback').click()
          break
        case 'alt+h':
          document.getElementById('viewHelp').click()
          break
        case 'alt+d':
          document.getElementById('actionDense').click()
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
    }
  )
}

function loadJS(FILE_URL, async = true) {
  let loaded = null

  function loadFile() {
    try {
      let scriptEle = document.createElement('script')
      scriptEle.setAttribute('src', FILE_URL)
      scriptEle.setAttribute('type', 'text/javascript')
      scriptEle.setAttribute('async', async)
      document.body.appendChild(scriptEle)

      scriptEle.addEventListener('load', () => {
        console.log('Entity hotkeys loaded!')
        setupHotkeys()
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

if (typeof hotkeys !== 'undefined') {
  setupHotkeys()
} else {
  loadJS('https://unpkg.com/hotkeys-js@3.12.0/dist/hotkeys.min.js')
}
